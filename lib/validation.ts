import { z } from 'zod'

/**
 * Schema de contato — fonte única de validação, compartilhada cliente e servidor.
 * O campo `website` é um honeypot anti-spam: humanos nunca o preenchem.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Informe seu nome.')
    .max(120, 'Nome muito longo.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  projectType: z
    .enum(['site', 'sistema', 'aplicacao', 'dashboard', 'integracao', 'ia', 'outro'])
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, 'Conte um pouco mais sobre o projeto (mín. 10 caracteres).')
    .max(4000, 'Mensagem muito longa.'),
  // Honeypot — deve permanecer vazio
  website: z.literal('').optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: ContactFieldErrors
  /** link do WhatsApp gerado no sucesso (fecho do fluxo) */
  whatsappUrl?: string
}

/** Newsletter / captura de lead — mesmo schema compartilhado cliente/servidor. */
export const newsletterSchema = z.object({
  email: z.string().trim().email('Informe um e-mail válido.'),
  website: z.literal('').optional(), // honeypot
})

export type NewsletterState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}
