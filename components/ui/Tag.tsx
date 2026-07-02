import { cn } from '@/lib/cn'

type TagProps = {
  children: React.ReactNode
  className?: string
  active?: boolean
  /** usa tipografia mono (para stacks/tecnologias) */
  mono?: boolean
}

/** Tag de categoria/tecnologia. Reutilizada em stacks, filtros, chips. */
export function Tag({ children, className, active, mono }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors',
        mono ? 'font-mono' : 'font-sans font-medium',
        active
          ? 'border-transparent bg-primary text-paper'
          : 'border-line-soft bg-panel/50 text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
