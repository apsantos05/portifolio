import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { Reveal } from '@/components/motion/Reveal'
import { about } from '@/content/about'
import { site } from '@/lib/site'

/** Sobre — "Minha história". Foto à esquerda + narrativa diagramada à direita. Data-driven. */
export function About() {
  return (
    <Section id="sobre" elevated spacious aria-label="Sobre Arthur Santos">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Foto (fornecida depois — placeholder premium enquanto isso) */}
        <Reveal>
          <PhotoFrame
            src={site.photoAbout}
            alt={`${site.name} — retrato`}
            sizes="(max-width: 1024px) 80vw, 420px"
          />
        </Reveal>

        {/* Narrativa */}
        <Reveal delay={0.08} className="max-w-xl">
          <Eyebrow index="02">Sobre</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.15rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.025em] text-paper">
            {about.title}
          </h2>

          <p className="mt-7 text-body-lg leading-relaxed text-paper/90">{about.lead}</p>

          <div className="mt-4 flex flex-col gap-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-body-md leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>

          {/* Pull-quote de destaque (frase-síntese) */}
          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="font-display text-heading-md font-semibold leading-snug text-paper [text-wrap:balance]">
              {about.highlight}
            </p>
          </blockquote>
        </Reveal>
      </div>
    </Section>
  )
}
