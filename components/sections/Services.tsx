import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { services } from '@/content/services'

/**
 * Serviços — lista editorial numerada (não grade de cards).
 * Cada linha revela os entregáveis no hover. Data-driven de content/services.ts.
 */
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

      <Stagger as="ul" className="mt-14 border-t border-line-soft" gap={0.06}>
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <StaggerItem as="li" key={service.slug}>
              <div className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-line-soft py-8 transition-colors sm:gap-8 sm:py-10">
                {/* número editorial */}
                <span className="font-display text-2xl font-extrabold tabular-nums text-panel-2 transition-colors duration-base group-hover:text-accent/50 sm:text-3xl">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <p className="text-caption text-muted-2">{service.problem}</p>
                  <h3 className="mt-2 flex items-center gap-3 font-display text-heading-lg font-bold text-paper">
                    <Icon className="hidden h-5 w-5 shrink-0 text-accent sm:block" strokeWidth={1.75} />
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-body-md text-muted">{service.description}</p>

                  {/* entregáveis — revelados no hover (desktop), sempre visíveis no mobile */}
                  <ul className="mt-4 flex flex-wrap gap-2 sm:mt-0 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-500 sm:ease-out sm:group-hover:mt-4 sm:group-hover:max-h-20 sm:group-hover:opacity-100">
                    {service.outcomes.map((o) => (
                      <li
                        key={o}
                        className="rounded-full border border-line-soft bg-panel/50 px-3 py-1 text-caption text-muted"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <ArrowUpRight className="mt-1 h-5 w-5 text-muted-2 transition-all duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
