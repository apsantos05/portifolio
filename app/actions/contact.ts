'use server'

import { contactSchema, type ContactState, type ContactFieldErrors } from '@/lib/validation'
import { sendContactEmail } from '@/lib/email'

/**
 * Server Action de contato (React 19 useActionState).
 * - Validação com o MESMO schema do cliente (zod).
 * - Honeypot anti-spam (campo `website`).
 * - ⚑ TODO: integrar envio real (e-mail via Resend / CRM) — hoje registra e confirma.
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

  // Honeypot preenchido → trata como spam e "confirma" sem processar.
  if (raw.website) {
    return { status: 'success', message: 'Mensagem recebida. Em breve entro em contato.' }
  }

  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    const errors: ContactFieldErrors = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFieldErrors
      if (key && !errors[key]) errors[key] = issue.message
    }
    return {
      status: 'error',
      message: 'Confira os campos destacados.',
      errors,
    }
  }

  const result = await sendContactEmail({
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company || undefined,
    projectType: parsed.data.projectType,
    message: parsed.data.message,
  })

  // Falha real de envio (chave existe mas o provedor recusou) → avisa o usuário.
  if (result.error) {
    return {
      status: 'error',
      message: 'Não consegui enviar agora. Tente de novo ou me chame direto no e-mail.',
    }
  }

  // Enviado — ou ainda sem provedor configurado (skipped): registra e confirma,
  // para não perder o lead enquanto a RESEND_API_KEY não estiver no ambiente.
  if (result.skipped) {
    console.info('[contato] lead recebido (Resend não configurado):', parsed.data.email)
  }

  return {
    status: 'success',
    message: 'Mensagem enviada. Obrigado — respondo pessoalmente em breve.',
  }
}
