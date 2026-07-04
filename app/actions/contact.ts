'use server'

import { contactSchema, type ContactState, type ContactFieldErrors } from '@/lib/validation'
import { handleContact } from '@/lib/contact'

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

  const outcome = await handleContact(parsed.data)

  return {
    status: 'success',
    message: 'Tudo certo! Estou te levando ao WhatsApp para conversarmos.',
    whatsappUrl: outcome.whatsappUrl,
  }
}
