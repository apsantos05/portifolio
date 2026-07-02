import { Quote } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/motion/Reveal'
import { testimonials } from '@/content/testimonials'

/**
 * Depoimentos — estrutura pronta. Enquanto vazio (DISCOVERY §13.7: nunca fabricar
 * prova social), mostra um empty-state honesto e elegante em vez de esconder a seção.
 */
export function Testimonials() {
  // Sem depoimentos reais, a seção não renderiza (a prova social fica nas Garantias).
  // Quando o primeiro depoimento real for adicionado em content/testimonials.ts, aparece.
  if (testimonials.length === 0) return null

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
      <Grid cols={3} gap="lg" className="mt-14">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06} as="article">
            <Card className="flex h-full flex-col">
              <Quote className="h-7 w-7 text-accent/60" aria-hidden />
              <p className="mt-4 flex-1 text-body-md text-paper/90">“{t.quote}”</p>
              <div className="mt-6 border-t border-line-soft pt-5">
                <p className="font-display text-heading-sm font-semibold text-paper">{t.author}</p>
                <p className="text-body-sm text-muted">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ''}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  )
}
