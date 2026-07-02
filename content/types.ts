import type { LucideIcon } from 'lucide-react'

/**
 * CONTRATOS DA CAMADA DE CONTEÚDO.
 * Esta é a fronteira estável: hoje os dados vêm de arquivos .ts; amanhã podem vir
 * de MDX ou de um CMS — desde que satisfaçam estes tipos, a UI não muda.
 */

// ── Navegação ────────────────────────────────────────────────────────
export type NavItem = {
  label: string
  href: string
  /** rota externa (novo alvo) */
  external?: boolean
}

// ── Sobre ────────────────────────────────────────────────────────────
export type AboutPillar = { title: string; text: string }
export type AboutContent = {
  lead: string
  paragraphs: string[]
  pillars: AboutPillar[]
}

// ── Serviços ─────────────────────────────────────────────────────────
export type Service = {
  slug: string
  icon: LucideIcon
  /** o problema do cliente (dor) */
  problem: string
  /** título orientado a resultado */
  title: string
  description: string
  /** entregáveis/benefícios concretos */
  outcomes: string[]
  featured?: boolean
}

// ── Processo ─────────────────────────────────────────────────────────
export type ProcessStep = {
  index: string
  title: string
  description: string
  icon: LucideIcon
}

// ── FAQ ──────────────────────────────────────────────────────────────
export type FaqItem = {
  question: string
  answer: string
}

// ── Tecnologias ──────────────────────────────────────────────────────
export type TechItem = { name: string; icon?: LucideIcon }
export type TechCategory = {
  label: string
  description: string
  items: TechItem[]
}

// ── Garantias / prova de confiança (social proof sem depoimentos) ────
export type Guarantee = {
  title: string
  description: string
  icon: LucideIcon
}

// ── Lead magnets (materiais gratuitos — arquitetura pronta) ──────────
export type LeadMagnet = {
  slug: string
  icon: LucideIcon
  kind: 'checklist' | 'guia' | 'diagnostico' | 'auditoria'
  title: string
  description: string
  /** chamada do botão */
  cta: string
  /** disponível agora? (false = "em breve") */
  available: boolean
  /** para onde leva quando disponível (rota ou âncora) */
  href?: string
}

// ── Depoimentos (estrutura pronta; publicar só quando reais) ─────────
export type Testimonial = {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
}

// ── Estudo de Caso (sistema único para todos os projetos) ────────────
export type CaseStage = 'live' | 'prototype' | 'private' | 'archived'

export type CaseMetric = { value: string; label: string }

export type CaseFeature = {
  title: string
  description: string
  icon?: LucideIcon
}

export type CaseImage = {
  src: string
  alt: string
  /** proporção sugerida para a galeria/mockup */
  aspect?: 'video' | 'portrait' | 'square' | 'wide'
  caption?: string
}

export type CaseStudy = {
  slug: string
  /** nome do projeto */
  name: string
  /** uma linha — o que é */
  tagline: string
  /** categoria curta, ex.: "SaaS · EdTech" */
  category: string
  year: string
  stage: CaseStage
  /** para quem / setor */
  client: string
  liveUrl?: string
  role: string
  /** cor de acento opcional por projeto (dentro da paleta) */
  accent?: string

  // Blocos narrativos (mesma ordem em todos os cases)
  context: string
  challenge: string
  solution: string
  features: CaseFeature[]
  process: { title: string; description: string }[]
  results?: CaseMetric[]
  /** nota honesta quando não há métricas públicas ainda */
  resultsNote?: string
  techStack: TechCategory[]
  gallery: CaseImage[]

  /** capa/thumb para a grade de projetos */
  cover?: CaseImage
  /** destaques rápidos exibidos no topo do case */
  highlights?: string[]
  /** aviso de confidencialidade (case anonimizado) */
  confidential?: boolean
}
