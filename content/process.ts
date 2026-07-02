import { Search, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react'
import type { ProcessStep } from './types'

/**
 * Processo — como conduzo um projeto do início à entrega (DISCOVERY §Processo).
 * Para quem tem poucos cases, mostrar o "como" é uma das maiores alavancas de confiança.
 */
export const process: ProcessStep[] = [
  {
    index: '01',
    icon: Search,
    title: 'Entendimento',
    description:
      'Escuto o seu negócio a fundo. Antes de qualquer código, entendo o problema real, o objetivo e quem vai usar.',
  },
  {
    index: '02',
    icon: PenTool,
    title: 'Estratégia e design',
    description:
      'Defino a arquitetura da solução e desenho a experiência — o que será construído, como e por quê.',
  },
  {
    index: '03',
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Construo em ciclos curtos, com você acompanhando a evolução. Código limpo, testado e feito para durar.',
  },
  {
    index: '04',
    icon: Rocket,
    title: 'Entrega e publicação',
    description:
      'Coloco no ar com performance, segurança e SEO cuidados. Você recebe algo pronto para usar e crescer.',
  },
  {
    index: '05',
    icon: LifeBuoy,
    title: 'Suporte e evolução',
    description:
      'Continuo por perto. Ajustes, melhorias e novas fases — seu produto evolui junto com o negócio.',
  },
]
