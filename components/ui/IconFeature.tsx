import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

type IconFeatureProps = {
  icon: LucideIcon
  className?: string
  /** tamanho do container */
  size?: 'md' | 'lg'
  label?: string
}

const sizes = {
  md: { box: 'h-12 w-12 rounded-xl', icon: 'h-5 w-5' },
  lg: { box: 'h-14 w-14 rounded-2xl', icon: 'h-6 w-6' },
}

/**
 * Feature icon-assinatura: ícone Lucide dentro de container com fundo accent-subtle.
 * Reutilizado em serviços, diferenciais, processo.
 */
export function IconFeature({ icon: Icon, className, size = 'md', label }: IconFeatureProps) {
  const s = sizes[size]
  return (
    <span
      className={cn(
        'inline-grid place-items-center border border-line-soft bg-accent-subtle text-accent',
        s.box,
        className,
      )}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Icon className={s.icon} strokeWidth={1.75} />
    </span>
  )
}
