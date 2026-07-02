import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { IconFeature } from '@/components/ui/IconFeature'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { process } from '@/content/process'

/** Processo — como conduzo um projeto. 100% a partir de content/process.ts. */
export function Process() {
  return (
    <Section id="processo" aria-label="Processo de trabalho">
      <SectionHeader
        index="05"
        eyebrow="Processo"
        title={
          <>
            Como conduzo um projeto do início à <span className="text-accent">entrega</span>.
          </>
        }
        description="Um caminho claro e sem surpresas — você acompanha cada etapa."
      />

      <Stagger as="ol" className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
        {process.map((step) => (
          <StaggerItem
            key={step.index}
            as="li"
            className="group relative flex flex-col gap-4 rounded-xl border border-line-soft bg-panel/40 p-6 transition-colors hover:border-line hover:bg-panel"
          >
            <div className="flex items-center justify-between">
              <IconFeature icon={step.icon} />
              <span className="font-display text-heading-lg font-extrabold text-panel-2 transition-colors group-hover:text-accent/30">
                {step.index}
              </span>
            </div>
            <div>
              <h3 className="font-display text-heading-sm font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-body-sm text-muted">{step.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
