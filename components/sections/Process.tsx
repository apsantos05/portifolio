import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { process } from '@/content/process'

/**
 * Processo — timeline vertical conectada (é uma sequência, não cards soltos).
 * Data-driven a partir de content/process.ts.
 */
export function Process() {
  return (
    <Section id="processo" aria-label="Processo de trabalho">
      <SectionHeader
        index="05"
        eyebrow="Processo"
        title={
          <>
            Do primeiro contato à <span className="text-accent">entrega</span>.
          </>
        }
        description="Um caminho claro e sem surpresas — você acompanha cada etapa."
      />

      <Stagger as="ol" className="relative mt-16 pl-2" gap={0.1}>
        {/* linha vertical conectando as etapas */}
        <span
          aria-hidden
          className="absolute left-[1.4rem] top-2 bottom-8 w-px bg-gradient-to-b from-line-active via-line to-transparent"
        />
        {process.map((step) => {
          const Icon = step.icon
          return (
            <StaggerItem
              as="li"
              key={step.index}
              className="group relative grid grid-cols-[auto_1fr] gap-x-6 pb-12 last:pb-0"
            >
              {/* nó */}
              <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-line bg-ink text-accent transition-colors duration-base group-hover:border-line-active group-hover:bg-accent-subtle">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="pt-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-2">{step.index}</span>
                  <h3 className="font-display text-heading-md font-semibold text-paper">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-xl text-body-md text-muted">{step.description}</p>
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
