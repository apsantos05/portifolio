import {
  Globe,
  Boxes,
  Workflow,
  BarChart3,
  Plug,
  Sparkles,
} from 'lucide-react'
import type { Service } from './types'

/**
 * Serviços — orientados a PROBLEMA → RESULTADO (DISCOVERY §6), não lista técnica.
 * Editar aqui altera a seção inteira, sem tocar em componente.
 */
export const services: Service[] = [
  {
    slug: 'sites',
    icon: Globe,
    problem: 'Sua presença digital não passa a confiança que o seu negócio merece.',
    title: 'Sites profissionais que geram autoridade',
    description:
      'Sites rápidos, elegantes e sob medida — construídos para transmitir credibilidade e converter visitantes em clientes.',
    outcomes: ['Performance e SEO de verdade', 'Design exclusivo', 'Pronto para escalar'],
    featured: true,
  },
  {
    slug: 'sistemas',
    icon: Boxes,
    problem: 'Sua operação depende de planilhas, retrabalho e processos manuais.',
    title: 'Sistemas web e SaaS sob medida',
    description:
      'Plataformas que colocam a sua operação para rodar num só lugar — gestão, controle e automação feitos para o seu processo real.',
    outcomes: ['Do MVP ao produto completo', 'Multiusuário e seguro', 'Arquitetura escalável'],
    featured: true,
  },
  {
    slug: 'aplicacoes',
    icon: Workflow,
    problem: 'Existe um gargalo específico que nenhum sistema de prateleira resolve.',
    title: 'Aplicações e automações',
    description:
      'Ferramentas web que atacam um problema específico do seu negócio e eliminam o trabalho repetitivo.',
    outcomes: ['Automação de processos', 'Integração com o que já usa', 'Feito para o seu fluxo'],
  },
  {
    slug: 'dashboards',
    icon: BarChart3,
    problem: 'Você não enxerga o negócio inteiro numa tela para decidir com clareza.',
    title: 'Dashboards e visualização de dados',
    description:
      'Painéis que transformam dados dispersos em decisão — métricas certas, em tempo real, do jeito que você lê.',
    outcomes: ['KPIs em tempo real', 'Relatórios claros', 'Decisão baseada em dado'],
  },
  {
    slug: 'integracoes',
    icon: Plug,
    problem: 'Seus sistemas não conversam entre si e geram trabalho manual duplicado.',
    title: 'APIs e integrações',
    description:
      'Conecto ferramentas, serviços e sistemas para que os dados fluam sozinhos — fim do copia-e-cola entre plataformas.',
    outcomes: ['APIs REST bem projetadas', 'Integração com CRMs e serviços', 'Dados sincronizados'],
  },
  {
    slug: 'ia',
    icon: Sparkles,
    problem: 'Você quer usar IA no negócio, mas sem enfeite — resolvendo algo real.',
    title: 'IA aplicada ao seu produto',
    description:
      'Camada de inteligência que faz trabalho de verdade: geração, correção, personalização e automação — como nos meus próprios produtos.',
    outcomes: ['IA com propósito', 'Integrada ao produto', 'Resultado mensurável'],
  },
]
