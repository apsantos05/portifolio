import { Quote, MessageSquarePlus } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { testimonials } from '@/content/testimonials'

/**
 * Depoimentos — estrutura pronta. Enquanto vazio (DISCOVERY §13.7: nunca fabricar
 * prova social), mostra um empty-state honesto e elegante em vez de esconder a seção.
 */
export function Testimonials() {
  const hasTestimonials = testimonials.length > 0

  return (
    <Section id="depoimentos" aria-label="Depoimentos">
      <SectionHeader
        eyebrow="Depoimentos"
        title={
          <>
            O que dizem sobre <span className="text-accent">trabalhar comigo</span>.
          </>
        }
      />

      {hasTestimonials ? (
        <Grid cols={3} gap="lg" className="mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06} as="article">
              <Card className="flex h-full flex-col">
                <Quote className="h-7 w-7 text-accent/60" aria-hidden />
                <p className="mt-4 flex-1 text-body-md text-paper/90">“{t.quote}”</p>
                <div className="mt-6 border-t border-line-soft pt-5">
                  <p className="font-display text-heading-sm font-semibold text-paper">
                    {t.author}
                  </p>
                  <p className="text-body-sm text-muted">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ''}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
      ) : (
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-xl border border-line bg-panel p-10 text-center sm:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40 mask-fade-y" />
            <div className="relative mx-auto flex max-w-md flex-col items-center gap-5">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line-soft bg-accent-subtle text-accent">
                <MessageSquarePlus className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-heading-md font-semibold text-paper">
                Este espaço é dos meus próximos clientes.
              </h3>
              <p className="text-body-md text-muted">
                Prefiro construir reputação com trabalho, não com frases vazias. Os primeiros
                depoimentos aparecerão aqui — reais, de quem eu ajudar a resolver um problema de
                verdade.
              </p>
              <Button href="/#contato" variant="secondary" withArrow>
                Seja o primeiro
              </Button>
            </div>
          </div>
        </Reveal>
      )}
    </Section>
  )
}
