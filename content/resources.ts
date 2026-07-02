import { ClipboardCheck, BookOpen, Stethoscope, SearchCheck } from 'lucide-react'
import type { LeadMagnet } from './types'

/**
 * Lead magnets — materiais gratuitos para capturar leads que ainda não vão contratar.
 * Arquitetura pronta: adicionar um material = adicionar um objeto aqui.
 * `available: false` renderiza "em breve". Nada é inventado — só o que existe fica ativo.
 */
export const leadMagnets: LeadMagnet[] = [
  {
    slug: 'diagnostico',
    icon: Stethoscope,
    kind: 'diagnostico',
    title: 'Diagnóstico gratuito do seu site ou sistema',
    description:
      'Me conte o que você tem hoje. Eu aponto, sem compromisso, o que está travando resultado e por onde começar.',
    cta: 'Solicitar diagnóstico',
    available: true,
    href: '/#contato',
  },
  {
    slug: 'checklist-site',
    icon: ClipboardCheck,
    kind: 'checklist',
    title: 'Checklist: seu site está pronto para vender?',
    description:
      '20 pontos de performance, SEO, confiança e conversão que separam um site bonito de um site que traz clientes.',
    cta: 'Abrir checklist',
    available: true,
    href: '/recursos/checklist-site',
  },
  {
    slug: 'guia-contratar-dev',
    icon: BookOpen,
    kind: 'guia',
    title: 'Guia: como contratar um desenvolvedor sem se arrepender',
    description:
      'O que perguntar, quais sinais de alerta observar e como não pagar caro por um problema mal resolvido.',
    cta: 'Ler o guia',
    available: false,
  },
  {
    slug: 'auditoria-software',
    icon: SearchCheck,
    kind: 'auditoria',
    title: 'Auditoria do seu software atual',
    description:
      'Uma análise técnica do que você já usa: performance, segurança e o que dá para melhorar.',
    cta: 'Pedir auditoria',
    available: false,
  },
]

export const getAvailableLeadMagnets = () => leadMagnets.filter((m) => m.available)
export const getPrimaryLeadMagnet = () => leadMagnets.find((m) => m.available) ?? leadMagnets[0]
