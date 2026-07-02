import type { NavItem } from './types'

/** Navegação principal do site (data-driven — pronta para i18n futura). */
export const navItems: NavItem[] = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'FAQ', href: '/#faq' },
]

/** CTA principal reutilizado no header e em seções. */
export const primaryCta = { label: 'Iniciar projeto', href: '/#contato' }
