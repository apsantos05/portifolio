import { KeyRound, Eye, Code2, MessagesSquare, LifeBuoy, FileCheck2 } from 'lucide-react'
import type { Guarantee } from './types'

/**
 * Prova social SEM depoimentos (DISCOVERY §13.7 + auditoria CRO).
 * Confiança construída sobre compromissos concretos e transparência — nunca métrica falsa.
 */
export const guarantees: Guarantee[] = [
  {
    icon: KeyRound,
    title: 'O código é seu',
    description:
      'Você recebe tudo — código-fonte, contas e acessos. Sem dependência de mim, sem lock-in.',
  },
  {
    icon: Eye,
    title: 'Você acompanha em tempo real',
    description:
      'Acesso à evolução do projeto do primeiro dia à entrega. Nada de caixa-preta.',
  },
  {
    icon: Code2,
    title: 'Código limpo e documentado',
    description:
      'Escrevo pensando em quem vai manter depois: legível, testável, padrão profissional.',
  },
  {
    icon: MessagesSquare,
    title: 'Você fala direto comigo',
    description:
      'Sem intermediário, sem call center. Quem constrói o seu produto é quem te atende.',
  },
  {
    icon: LifeBuoy,
    title: 'Suporte depois da entrega',
    description:
      'Não desapareço no deploy. Ajustes, correções e evolução continuam comigo.',
  },
  {
    icon: FileCheck2,
    title: 'Escopo e prazo claros',
    description:
      'Proposta transparente antes de começar. Você sabe exatamente o que recebe e quando.',
  },
]
