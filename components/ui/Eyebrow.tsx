import { cn } from '@/lib/cn'

type EyebrowProps = {
  /** número da seção, ex.: "01" */
  index?: string
  children: React.ReactNode
  className?: string
}

/** Eyebrow-assinatura: "01 — NOME DA SEÇÃO" em periwinkle, tracking largo. */
export function Eyebrow({ index, children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-accent',
        className,
      )}
    >
      {index && (
        <span className="font-mono text-[0.7rem] tabular-nums text-accent/80">
          {index}
        </span>
      )}
      <span aria-hidden className="h-px w-6 bg-accent/40" />
      {children}
    </p>
  )
}
