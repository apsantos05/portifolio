import type { CaseStudy, CaseStage } from '../types'
import { acertavest } from './acertavest'
import { arrematex } from './arrematex'
import { ayhub } from './ayhub'
import { murilo } from './murilo'

/**
 * Registro de projetos. Ordem = ordem de exibição na grade.
 * AcertaVest primeiro (herói/ao vivo). Adicionar um projeto = adicionar aqui.
 */
export const projects: CaseStudy[] = [acertavest, arrematex, ayhub, murilo]

export function getAllProjects(): CaseStudy[] {
  return projects
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug)
}

/** Projeto seguinte (para navegação "próximo projeto" no fim do case). */
export function getNextProject(slug: string): CaseStudy {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}

/** Rótulos legíveis de estágio, para badges. */
export const stageLabel: Record<CaseStage, string> = {
  live: 'No ar',
  prototype: 'Protótipo',
  private: 'Confidencial',
  archived: 'Arquivado',
}
