'use server'

import { headers } from 'next/headers'
import { contactSchema, type ContactState, type ContactFieldErrors } from '@/lib/validation'
import { handleContact, type ContactMeta } from '@/lib/contact'

/**
 * Server Action de contato (React 19 useActionState).
 * Fluxo: validar (zod + honeypot) → orquestrar (lib/contact) → devolver o link do WhatsApp.
 * O envio real de e-mail liga sozinho quando a RESEND_API_KEY existir (ver lib/email.ts).
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    company: String(formData.get('company') ?? ''),
    projectType: (formData.get('projectType') as string) || undefined,
    message: String(formData.get('message') ?? ''),
    website: String(formData.get('website') ?? ''),
  }

  // Honeypot preenchido → trata como spam: finge sucesso, sem WhatsApp nem processamento.
  if (raw.website) {
    return { status: 'success', message: 'Mensagem recebida.' }
  }

  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    const errors: ContactFieldErrors = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFieldErrors
      if (key && !errors[key]) errors[key] = issue.message
    }
    return { status: 'error', message: 'Confira os campos destacados.', errors }
  }

  // Metadados da requisição (para o e-mail): data/hora, IP e user-agent quando disponíveis.
  const h = await headers()
  const forwarded = h.get('x-forwarded-for') ?? h.get('x-real-ip') ?? ''
  const meta: ContactMeta = {
    submittedAt: new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'short',
      timeStyle: 'medium',
    }),
    ip: forwarded ? forwarded.split(',')[0]?.trim() || null : null,
    userAgent: h.get('user-agent') ?? null,
  }

  const outcome = await handleContact(parsed.data, meta)

  return {
    status: 'success',
    message: 'Tudo certo! Estou te levando ao WhatsApp para conversarmos.',
    whatsappUrl: outcome.whatsappUrl,
  }
}
