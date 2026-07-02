import { cn } from '@/lib/cn'

type StatProps = {
  /** número/valor display (ex.: "6.5×", "3", "100%") */
  value: string
  label: string
  className?: string
}

/**
 * Métrica display. Números como autoridade (TYPOGRAPHY §4.3): Inter Tight pesado.
 * Reutilizada em resultados de case, hero de números, sobre.
 */
export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-display text-[clamp(2rem,5vw,2.75rem)] font-extrabold leading-none tracking-[-0.02em] text-display-sheen">
        {value}
      </span>
      <span className="text-body-sm text-muted">{label}</span>
    </div>
  )
}
