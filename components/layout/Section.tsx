import { cn } from '@/lib/cn'
import { Container } from './Container'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
  /** faixa de fundo levemente elevada para alternância de seções */
  elevated?: boolean
  containerSize?: 'default' | 'reading' | 'prose'
  /** remove o container interno (para seções full-bleed) */
  bleed?: boolean
  /** respiro ampliado para seções-âncora (quebra o metrônomo vertical) */
  spacious?: boolean
  /** rótulo acessível da seção (aria-labelledby é preferível quando há heading) */
  'aria-label'?: string
}

/**
 * Ritmo vertical padronizado de seção (80/96/128px conforme a marca).
 * Base do sistema de layout — usada por todos os organismos de seção.
 */
export function Section({
  id,
  children,
  className,
  elevated,
  containerSize = 'default',
  bleed,
  spacious,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24',
        spacious ? 'py-24 md:py-32 lg:py-40' : 'py-20 md:py-24 lg:py-section',
        elevated && 'bg-ink-2',
        className,
      )}
      {...rest}
    >
      {bleed ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  )
}
