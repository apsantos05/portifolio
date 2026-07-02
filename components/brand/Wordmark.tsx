import { cn } from '@/lib/cn'

/**
 * Wordmark autoral de Arthur Santos (DISCOVERY §10 — camada autoral).
 * Monograma "AS" em container com traço da marca + nome.
 * Não é o logo do Murilo/Skill: identidade própria sobre a mesma base técnica.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center rounded-[10px] border border-line-active/70 bg-panel font-display text-[0.95rem] font-extrabold tracking-tight text-paper"
      >
        <span className="text-paper">A</span>
        <span className="text-accent">S</span>
        <span className="pointer-events-none absolute inset-0 rounded-[10px] bg-blueprint opacity-40 mask-fade-radial" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-bold tracking-tight text-paper">
          Arthur Santos
        </span>
        <span className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-2">
          Full Stack Dev
        </span>
      </span>
    </span>
  )
}
