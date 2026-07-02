import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Accordion } from '@/components/ui/Accordion'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { faq } from '@/content/faq'

/**
 * FAQ — reduz atrito de decisão. Reusa o Accordion acessível + content/faq.ts.
 * Inclui JSON-LD FAQPage para rich results no Google.
 */
export function Faq() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <Section id="faq" elevated aria-label="Perguntas frequentes">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeader
          index="07"
          eyebrow="FAQ"
          title={
            <>
              Perguntas <span className="text-accent">frequentes</span>.
            </>
          }
          description="As dúvidas mais comuns antes de começar um projeto."
        />
        <Reveal>
          <Accordion items={faq} />
        </Reveal>
      </div>
      <JsonLd data={faqJsonLd} />
    </Section>
  )
}
