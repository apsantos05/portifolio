'use server'

import { contactSchema, type ContactState, type ContactFieldErrors } from '@/lib/validation'

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

  try {
    // ⚑ TODO: enviar e-mail (Resend) e/ou criar lead no CRM aqui.
    //    Mantido como ponto de extensão único — a UI já está pronta.
    console.info('[contato] nova mensagem:', {
      name: parsed.data.name,
      email: parsed.data.email,
      projectType: parsed.data.projectType,
    })

    return {
      status: 'success',
      message: 'Mensagem enviada. Obrigado — respondo pessoalmente em breve.',
    }
  } catch {
    return {
      status: 'error',
      message: 'Algo deu errado ao enviar. Tente novamente ou use o e-mail direto.',
    }
  }
}
