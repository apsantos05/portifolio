import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Grid } from '@/components/layout/Grid'
import { IconFeature } from '@/components/ui/IconFeature'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { leadMagnets } from '@/content/resources'

export const metadata: Metadata = {
  title: 'Recursos gratuitos',
  description:
    'Materiais gratuitos de Arthur Santos: diagnósticos, checklists e guias para quem quer software que traz resultado.',
  alternates: { canonical: '/recursos' },
}

export default function ResourcesPage() {
  return (
    <Section className="pt-28 md:pt-36">
      <SectionHeader
        as="h1"
        eyebrow="Recursos"
        title={
          <>
            Materiais gratuitos para decidir com <span className="text-accent">clareza</span>.
          </>
        }
        description="Conteúdo prático para donos de negócio que querem tecnologia que traz resultado — sem enrolação técnica."
      />

      <Grid cols={2} gap="lg" className="mt-14">
        {leadMagnets.map((m, i) => (
          <Reveal key={m.slug} delay={(i % 2) * 0.06} as="article">
            <div className="flex h-full flex-col rounded-xl border border-line bg-panel p-8">
              <div className="flex items-center justify-between">
                <IconFeature icon={m.icon} size="lg" />
                {m.available ? (
                  <Badge tone="success" dot>
                    Disponível
                  </Badge>
                ) : (
                  <Badge tone="neutral">Em breve</Badge>
                )}
              </div>
              <h2 className="mt-6 font-display text-heading-md font-semibold text-paper [text-wrap:balance]">
                {m.title}
              </h2>
              <p className="mt-2 flex-1 text-body-sm text-muted">{m.description}</p>
              <div className="mt-6">
                {m.available ? (
                  <Button href={m.href ?? '/#contato'} withArrow>
                    {m.cta}
                  </Button>
                ) : (
                  <span className="text-caption text-muted-2">Em produção — entra na lista abaixo.</span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </Grid>

      {/* Captura para avisar quando os materiais saírem */}
      <Reveal className="mt-14">
        <div className="rounded-2xl border border-line-active/50 bg-panel-2 p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-heading-md font-semibold text-paper">
                Receba os materiais em primeira mão
              </h2>
              <p className="mt-2 max-w-md text-body-sm text-muted">
                Sem spam. Só conteúdo útil sobre software que traz resultado — quando sair.
              </p>
            </div>
            <NewsletterForm className="w-full md:w-80" />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
