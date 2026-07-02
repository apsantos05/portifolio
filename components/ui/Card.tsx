import Link from 'next/link'
import { cn } from '@/lib/cn'

type CardProps = {
  children: React.ReactNode
  className?: string
  /** destaque: textura blueprint + glow + borda mais forte (preço/métrica-chave) */
  highlight?: boolean
  /** transforma o card em link com hover-elevação */
  href?: string
  external?: boolean
  as?: 'div' | 'article' | 'li'
  'aria-label'?: string
}

const baseStyles =
  'relative overflow-hidden rounded-lg border border-line bg-panel p-6 sm:p-8 transition-all duration-base ease-standard'

const highlightStyles =
  'rounded-xl border-line-active/70 bg-panel-2 shadow-glow'

const interactiveStyles =
  'hover:-translate-y-0.5 hover:border-line-active hover:bg-panel-2 hover:shadow-md focus-visible:shadow-[var(--focus-ring)] focus-visible:outline-none'

/**
 * Card base do sistema. Variantes: padrão / highlight / interativo (link).
 * Reutilizado por serviços, projetos, features, depoimentos.
 */
export function Card({
  children,
  className,
  highlight,
  href,
  external,
  as: Tag = 'div',
  ...rest
}: CardProps) {
  const classes = cn(
    baseStyles,
    highlight && highlightStyles,
    href && interactiveStyles,
    className,
  )

  const inner = (
    <>
      {highlight && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-blueprint opacity-40 mask-fade-y"
        />
      )}
      <span className="relative block">{children}</span>
    </>
  )

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    )
  }

  return (
    <Tag className={classes} {...rest}>
      {inner}
    </Tag>
  )
}
