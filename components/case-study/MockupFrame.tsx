import Image from 'next/image'
import { cn } from '@/lib/cn'
import type { CaseImage } from '@/content/types'

const aspectMap: Record<NonNullable<CaseImage['aspect']>, string> = {
  video: 'aspect-video',
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
}

/**
 * Moldura de mockup reutilizável (estilo janela de navegador).
 * Renderiza a imagem quando existe; senão, um placeholder de marca elegante
 * com a legenda — evita "imagem quebrada" enquanto os prints não chegam.
 */
export function MockupFrame({
  image,
  className,
  priority,
}: {
  image: CaseImage
  className?: string
  priority?: boolean
}) {
  const aspect = aspectMap[image.aspect ?? 'video']
  const hasImage = Boolean(image.src)

  return (
    <figure
      className={cn(
        'group relative overflow-hidden rounded-xl border border-line bg-panel-2 shadow-md',
        className,
      )}
    >
      {/* barra da janela — sóbria, sem semáforo clichê */}
      <div className="flex items-center gap-2.5 border-b border-line-soft bg-ink-2/80 px-4 py-2.5">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
        <span className="truncate font-mono text-[0.7rem] text-muted-2">
          {image.caption ?? image.alt}
        </span>
      </div>

      <div className={cn('relative', aspect)}>
        {hasImage ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        ) : (
          // Placeholder de marca (⚑ substituir por print real)
          <div className="absolute inset-0 grid place-items-center bg-ink">
            <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50 mask-fade-y" />
            <div aria-hidden className="absolute inset-0 glow-alt" />
            <div className="relative flex flex-col items-center gap-3 text-center">
              <span className="font-display text-3xl font-extrabold tracking-tight text-panel-2">
                A<span className="text-accent/40">S</span>
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2">
                Prévia em breve
              </span>
            </div>
          </div>
        )}
      </div>
      {image.caption && (
        <figcaption className="sr-only">{image.alt}</figcaption>
      )}
    </figure>
  )
}
