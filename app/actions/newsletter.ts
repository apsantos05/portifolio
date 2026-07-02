'use server'

import { newsletterSchema, type NewsletterState } from '@/lib/validation'
import { addNewsletterContact } from '@/lib/email'

/**
 * Server Action de captura de e-mail (newsletter / lead magnets).
 * Honeypot anti-spam + validação zod. ⚑ TODO: integrar provedor (Resend/ESP/CRM).
 */
export async function subscribe(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  if (String(formData.get('website') ?? '')) {
    return { status: 'success', message: 'Pronto! Você está na lista.' }
  }

  const parsed = newsletterSchema.safeParse({
    email: String(formData.get('email') ?? ''),
    website: String(formData.get('website') ?? ''),
  })

  if (!parsed.success) {
    return { status: 'error', message: parsed.error.issues[0]?.message ?? 'E-mail inválido.' }
  }

  const result = await addNewsletterContact(parsed.data.email)

  if (result.error) {
    return { status: 'error', message: 'Não foi possível inscrever agora. Tente novamente.' }
  }
  if (result.skipped) {
    console.info('[newsletter] inscrito (Resend não configurado):', parsed.data.email)
  }
  return { status: 'success', message: 'Pronto! Você receberá os materiais em primeira mão.' }
}
