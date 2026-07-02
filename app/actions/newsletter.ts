'use server'

import { newsletterSchema, type NewsletterState } from '@/lib/validation'

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

  try {
    // ⚑ TODO: adicionar o e-mail ao provedor de newsletter / CRM.
    console.info('[newsletter] novo inscrito:', parsed.data.email)
    return { status: 'success', message: 'Pronto! Você receberá os materiais em primeira mão.' }
  } catch {
    return { status: 'error', message: 'Não foi possível inscrever agora. Tente novamente.' }
  }
}
