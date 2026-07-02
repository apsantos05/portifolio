import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { MockupFrame } from './MockupFrame'
import { stageLabel } from '@/content/projects'
import type { CaseStudy } from '@/content/types'
import { cn } from '@/lib/cn'

const stageTone = {
  live: 'success',
  prototype: 'accent',
  private: 'neutral',
  archived: 'neutral',
} as const

/** Card de projeto para grades. Reutilizado na Home e no índice /projetos. */
export function ProjectCard({ project, priority }: { project: CaseStudy; priority?: boolean }) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-line bg-panel',
        'transition-all duration-base ease-standard hover:-translate-y-1 hover:border-line-active hover:shadow-lg',
        'focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]',
      )}
    >
      {project.cover && (
        <div className="p-4 pb-0">
          <MockupFrame image={{ ...project.cover, aspect: 'video' }} priority={priority} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <Badge tone={stageTone[project.stage]} dot>
            {stageLabel[project.stage]}
          </Badge>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-2">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 flex items-center gap-2 font-display text-heading-lg font-bold text-paper">
          {project.name}
          <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </h3>
        <p className="mt-2 flex-1 text-body-sm text-muted">{project.tagline}</p>

        {project.highlights && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h}>
                <Tag>{h}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  )
}
