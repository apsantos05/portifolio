import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  /** ícone circular de seta à direita (assinatura do botão primário) */
  withArrow?: boolean
  className?: string
  external?: boolean
  'aria-label'?: string
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-pill font-sans font-semibold ' +
  'transition-all duration-base ease-standard focus-visible:outline-none ' +
  'focus-visible:shadow-[var(--focus-ring)] disabled:opacity-50'

const sizes: Record<Size, string> = {
  md: 'text-[0.95rem] px-6 py-3',
  lg: 'text-base px-7 py-3.5',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-primary text-paper shadow-glow hover:bg-primary-hover ' +
    'hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border border-line-active/80 text-accent hover:bg-accent-subtle hover:border-line-active',
  ghost: 'text-muted hover:text-paper hover:bg-paper/5',
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  withArrow = variant === 'primary',
  className,
  external,
  ...rest
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden
          className={cn(
            'ml-1 grid h-8 w-8 place-items-center rounded-full transition-transform duration-base ease-out',
            variant === 'primary'
              ? 'bg-white/15 group-hover:translate-x-0.5'
              : 'bg-accent/10 group-hover:translate-x-0.5',
          )}
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </span>
      )}
    </>
  )

  const classes = cn(base, sizes[size], variants[variant], withArrow && 'pr-2', className)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  )
}
