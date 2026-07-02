import { cn } from '@/lib/cn'

type Tone = 'accent' | 'success' | 'warning' | 'danger' | 'neutral'

type BadgeProps = {
  children: React.ReactNode
  tone?: Tone
  className?: string
  /** ponto indicador à esquerda */
  dot?: boolean
}

const tones: Record<Tone, string> = {
  accent: 'bg-accent-subtle text-accent',
  success: 'bg-success/[0.12] text-success',
  warning: 'bg-warning/[0.12] text-warning',
  danger: 'bg-danger/[0.12] text-danger',
  neutral: 'bg-[rgba(139,149,168,0.12)] text-muted',
}

const dotColor: Record<Tone, string> = {
  accent: 'bg-accent',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  neutral: 'bg-muted',
}

/** Badge de estado/rótulo. Semântico e consistente com a paleta. */
export function Badge({ children, tone = 'neutral', className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', dotColor[tone])} />}
      {children}
    </span>
  )
}
