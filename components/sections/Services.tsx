import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { IconFeature } from '@/components/ui/IconFeature'
import { Reveal } from '@/components/motion/Reveal'
import { services } from '@/content/services'

/** Serviços — orientados a problema→resultado. 100% a partir de content/services.ts. */
export function Services() {
  return (
    <Section id="servicos" aria-label="Serviços">
      <SectionHeader
        index="03"
        eyebrow="Serviços"
        title={
          <>
            Cada serviço nasce de um <span className="text-accent">problema</span> real.
          </>
        }
        description="Não vendo tecnologia — resolvo dores concretas do seu negócio com software sob medida."
      />

      <Grid cols={3} gap="lg" className="mt-14">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 0.06} as="article">
            <Card highlight={service.featured} className="flex h-full flex-col">
              <IconFeature icon={service.icon} size="lg" className="mb-6" />
              <p className="text-caption text-muted-2">{service.problem}</p>
              <h3 className="mt-3 font-display text-heading-md font-semibold text-paper">
                {service.title}
              </h3>
              <p className="mt-2 text-body-sm text-muted">{service.description}</p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-line-soft pt-5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-body-sm text-paper/80">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {o}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  )
}
