import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { Reveal } from '@/components/motion/Reveal'
import { tech } from '@/content/tech'

/**
 * Tecnologias — por VALOR, não mural de logos (DISCOVERY §Tecnologias).
 * Agrupadas por camada, com o porquê de cada uma. A partir de content/tech.ts.
 */
export function Technologies() {
  return (
    <Section id="tecnologias" elevated aria-label="Tecnologias">
      <SectionHeader
        index="06"
        eyebrow="Tecnologias"
        title={
          <>
            Ferramentas escolhidas por <span className="text-accent">propósito</span>.
          </>
        }
        description="Uso tecnologia moderna e comprovada — cada escolha serve à performance, à segurança e à escala do seu produto."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tech.map((category, i) => (
          <Reveal
            key={category.label}
            delay={(i % 3) * 0.05}
            className="rounded-xl border border-line-soft bg-panel/40 p-6"
          >
            <h3 className="font-display text-heading-sm font-semibold text-paper">
              {category.label}
            </h3>
            <p className="mt-1.5 text-body-sm text-muted">{category.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item.name}>
                  <Tag mono>{item.name}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
