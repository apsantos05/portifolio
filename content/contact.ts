/**
 * Dados do formulário de contato — client-safe (sem imports server-only).
 * Fonte ÚNICA dos tipos de projeto: usada no formulário e nas mensagens (lib/contact.ts).
 */
export const projectTypes = [
  { value: 'site', label: 'Site profissional' },
  { value: 'sistema', label: 'Sistema web / SaaS' },
  { value: 'aplicacao', label: 'Aplicação / automação' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'integracao', label: 'API / integração' },
  { value: 'ia', label: 'IA aplicada' },
  { value: 'outro', label: 'Outro' },
] as const

export const projectTypeLabel = (value?: string) =>
  projectTypes.find((t) => t.value === value)?.label ?? value
