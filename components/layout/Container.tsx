import { cn } from '@/lib/cn'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  /** largura de leitura mais estreita para texto longo */
  size?: 'default' | 'reading' | 'prose'
  as?: 'div' | 'section' | 'header' | 'footer'
}

const widths = {
  default: 'max-w-[1200px]',
  reading: 'max-w-[1080px]',
  prose: 'max-w-[720px]',
}

export function Container({
  children,
  className,
  size = 'default',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full px-6 sm:px-8 lg:px-16', widths[size], className)}>
      {children}
    </Tag>
  )
}
