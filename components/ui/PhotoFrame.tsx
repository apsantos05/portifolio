import Image from 'next/image'
import { cn } from '@/lib/cn'

type PhotoFrameProps = {
  src: string | null
  alt: string
  /** proporção do retrato */
  aspect?: 'portrait' | 'square'
  /** placa de legenda no rodapé (nome/função) */
  caption?: { name: string; role: string }
  priority?: boolean
  sizes?: string
  className?: string
}

const aspectMap = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
}

/**
 * Moldura de foto premium e reutilizável (Hero e Sobre).
 * Acabamento: borda elegante, glow discreto atrás, profundidade por gradiente e sombra.
 * SEM blueprint/grid/wireframe. Quando não há foto, mostra um placeholder sóbrio
 * (monograma tipográfico da marca) — a troca pela foto real é só o caminho em lib/site.
 */
export function PhotoFrame({
  src,
  alt,
  aspect = 'portrait',
  caption,
  priority,
  sizes = '(max-width: 1024px) 80vw, 460px',
  className,
}: PhotoFrameProps) {
  return (
    <div className={cn('relative mx-auto w-full max-w-md lg:mx-0', className)}>
      {/* glow discreto atrás, para profundidade */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(63,93,170,0.28),transparent_70%)] blur-2xl"
      />

      <div
        className={cn(
          'relative overflow-hidden rounded-[1.75rem] border border-line-active/40 shadow-lg',
          'bg-gradient-to-b from-panel-2 to-ink',
          aspectMap[aspect],
        )}
      >
        {src ? (
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        ) : (
          <div aria-label={alt} className="absolute inset-0 grid place-items-center">
            {/* brilho superior sutil */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(80%_100%_at_50%_0%,rgba(132,163,218,0.12),transparent_70%)]"
            />
            <span className="select-none font-display text-7xl font-extrabold tracking-tight text-paper/85">
              A<span className="text-accent">S</span>
            </span>
          </div>
        )}

        {/* vinheta inferior para dar profundidade e casar com o dark-first */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent"
        />

        {caption && (
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-line-soft bg-ink/60 px-4 py-3 backdrop-blur">
            <div>
              <p className="font-display text-sm font-bold text-paper">{caption.name}</p>
              <p className="font-mono text-[0.7rem] text-muted">{caption.role}</p>
            </div>
            <span aria-hidden className="h-2 w-2 rounded-full bg-success" />
          </div>
        )}
      </div>
    </div>
  )
}
