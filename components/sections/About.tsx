import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { about } from '@/content/about'

/** Sobre — história do Arthur. 100% data-driven a partir de content/about.ts. */
export function About() {
  return (
    <Section id="sobre" elevated spacious aria-label="Sobre Arthur Santos">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeader
          index="02"
          eyebrow="Sobre"
          title={
            <>
              Do primeiro <span className="text-accent">mod</span> aos sistemas que rodam
              negócios.
            </>
          }
        />

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5">
            <p className="text-body-lg text-paper/90">{about.lead}</p>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Stagger
            className="grid gap-px overflow-hidden rounded-xl border border-line-soft"
            gap={0.08}
          >
            {about.pillars.map((p) => (
              <StaggerItem
                key={p.title}
                className="bg-panel/40 p-6 transition-colors hover:bg-panel"
              >
                <h3 className="font-display text-heading-sm font-semibold text-paper">
                  {p.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  )
}
