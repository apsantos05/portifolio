import type { NavItem } from './types'

/** Navegação principal do site (data-driven — pronta para i18n futura). */
export const navItems: NavItem[] = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'FAQ', href: '/#faq' },
]

/** Links do rodapé — nav principal + páginas de crescimento (recursos). */
export const footerLinks: NavItem[] = [
  ...navItems,
  { label: 'Recursos', href: '/recursos' },
]
