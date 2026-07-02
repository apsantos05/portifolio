import { cn } from '@/lib/cn'

type MarqueeProps = {
  /** itens da esteira (ex.: <li> chips) — renderizados uma vez e clonados p/ o loop */
  children: React.ReactNode
  /** duração de um ciclo, em segundos (maior = mais lento) */
  durationSec?: number
  reverse?: boolean
  className?: string
  label: string
}

/**
 * Esteira infinita reutilizável (marquee).
 * - Loop perfeito: dois grupos idênticos + translateX(-50%).
 * - Performance: animação por transform (GPU), zero JS por frame.
 * - Acessível: lista real lida uma vez; o clone é aria-hidden; foco de teclado pausa.
 * - Respeita prefers-reduced-motion (vira faixa rolável — ver globals.css).
 */
export function Marquee({ children, durationSec = 40, reverse, className, label }: MarqueeProps) {
  return (
    <div
      className={cn('marquee group rounded-md focus-visible:outline-none', className)}
      data-reverse={reverse ? 'true' : undefined}
      tabIndex={0}
      role="group"
      aria-label={label}
    >
      <div
        className="marquee__track"
        style={{ '--marquee-duration': `${durationSec}s` } as React.CSSProperties}
      >
        <ul className="flex shrink-0 items-center gap-3 pr-3">{children}</ul>
        <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden>
          {children}
        </ul>
      </div>
    </div>
  )
}
