import { cn } from '@/lib/cn'

/**
 * Container tipográfico para texto longo (estudos de caso, artigos futuros).
 * Aplica ritmo de leitura e estilos consistentes sem plugin externo.
 */
export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'max-w-prose text-body-md text-muted',
        '[&>h2]:mt-10 [&>h2]:font-display [&>h2]:text-heading-lg [&>h2]:font-bold [&>h2]:text-paper',
        '[&>h3]:mt-8 [&>h3]:font-display [&>h3]:text-heading-md [&>h3]:font-semibold [&>h3]:text-paper',
        '[&>p]:mt-4 [&>p]:leading-relaxed',
        '[&>ul]:mt-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-1',
        '[&>ul>li]:relative [&>ul>li]:pl-6',
        "[&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-2.5 [&>ul>li]:before:h-1.5 [&>ul>li]:before:w-1.5 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-accent [&>ul>li]:before:content-['']",
        '[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-accent-bright',
        '[&_strong]:text-paper [&_strong]:font-semibold',
        className,
      )}
    >
      {children}
    </div>
  )
}
