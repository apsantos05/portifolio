import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Marquee } from '@/components/ui/Marquee'
import { Reveal } from '@/components/motion/Reveal'
import { stacksInRows, type Stack } from '@/content/stacks'

function StackChip({ stack }: { stack: Stack }) {
  const Icon = stack.icon
  return (
    <li>
      <span className="inline-flex items-center gap-2.5 rounded-lg border border-line-soft bg-panel/50 px-4 py-2.5 transition-colors duration-base hover:border-line-active hover:bg-panel-2">
        <Icon className="h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
        <span className="whitespace-nowrap font-mono text-sm text-paper/85">{stack.name}</span>
      </span>
    </li>
  )
}

/**
 * Stacks — esteira infinita com as tecnologias REAIS dos repositórios (content/stacks.ts).
 * Substitui a antiga seção "Tecnologias" para evitar duplicação, mantendo o
 * enquadramento "por propósito" no cabeçalho. Integra o conceito "blueprint → produto".
 */
export function Stacks() {
  const rows = stacksInRows(2)

  return (
    <Section id="stacks" elevated aria-label="Stacks e tecnologias" className="overflow-hidden">
      <SectionHeader
        index="06"
        eyebrow="Stacks"
        title={
          <>
            Ferramentas de verdade, escolhidas por <span className="text-accent">propósito</span>.
          </>
        }
        description="Estas são as tecnologias que realmente uso — extraídas dos meus repositórios no GitHub, não de uma lista de desejos."
      />

      <Reveal className="relative mt-14 flex flex-col gap-4">
        {/* textura blueprint por trás da esteira */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-blueprint opacity-40 mask-fade-y" />
        <Marquee label="Tecnologias — faixa 1" durationSec={46}>
          {rows[0].map((s) => (
            <StackChip key={s.name} stack={s} />
          ))}
        </Marquee>
        <Marquee label="Tecnologias — faixa 2" durationSec={58} reverse>
          {rows[1].map((s) => (
            <StackChip key={s.name} stack={s} />
          ))}
        </Marquee>
      </Reveal>
    </Section>
  )
}
