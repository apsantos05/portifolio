import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { IconFeature } from '@/components/ui/IconFeature'
import { Reveal } from '@/components/motion/Reveal'
import { getPrimaryLeadMagnet } from '@/content/resources'

/**
 * Lead magnet em destaque — oferta de baixo atrito (diagnóstico gratuito) para
 * capturar quem ainda não está pronto para o compromisso do formulário de projeto.
 * Data-driven: o material vem de content/resources.ts.
 */
export function LeadMagnet() {
  const magnet = getPrimaryLeadMagnet()

  return (
    <Section aria-label="Diagnóstico gratuito">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-2 p-8 sm:p-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40 mask-fade-y" />
          <div aria-hidden className="pointer-events-none absolute inset-0 glow-alt" />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <IconFeature icon={magnet.icon} size="lg" className="shrink-0" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                  Gratuito · sem compromisso
                </p>
                <h2 className="mt-2 max-w-xl font-display text-heading-lg font-bold text-paper [text-wrap:balance]">
                  {magnet.title}
                </h2>
                <p className="mt-2 max-w-xl text-body-md text-muted">{magnet.description}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <Button href={magnet.href ?? '/#contato'} size="lg">
                {magnet.cta}
              </Button>
              <a
                href="/recursos"
                className="text-center text-caption text-muted-2 transition-colors hover:text-muted"
              >
                Ver todos os materiais
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
