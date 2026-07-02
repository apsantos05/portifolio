import { cn } from '@/lib/cn'
import { Eyebrow } from './Eyebrow'
import { Reveal } from '@/components/motion/Reveal'

type SectionHeaderProps = {
  /** número da seção, ex.: "02" */
  index?: string
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  /** nível do heading para hierarquia correta (default h2) */
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  /** ações opcionais à direita (ex.: link "ver todos") */
  actions?: React.ReactNode
}

/**
 * Cabeçalho de seção-assinatura (eyebrow numerado → título bicolor → descrição).
 * Data-driven e reutilizado por TODAS as seções — zero duplicação.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  className,
  actions,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        centered ? 'items-center text-center' : 'items-start',
        Boolean(actions) && 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <Reveal className={cn('max-w-2xl', centered && 'mx-auto')}>
        {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
        <Heading
          className={cn(
            'mt-5 font-display font-bold tracking-[-0.025em] text-paper [text-wrap:balance]',
            'text-[clamp(2.15rem,5vw,3.25rem)] leading-[1.08]',
          )}
        >
          {title}
        </Heading>
        {description && (
          <p className={cn('mt-4 text-body-lg text-muted', centered && 'mx-auto')}>
            {description}
          </p>
        )}
      </Reveal>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  )
}
