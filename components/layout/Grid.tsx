import { cn } from '@/lib/cn'

type Cols = 1 | 2 | 3 | 4
type Gap = 'sm' | 'md' | 'lg'

type GridProps = {
  children: React.ReactNode
  className?: string
  /** número de colunas no desktop (responsivo automático) */
  cols?: Cols
  gap?: Gap
  as?: 'div' | 'ul' | 'ol'
}

const colsMap: Record<Cols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

const gapMap: Record<Gap, string> = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-6 lg:gap-8',
}

/** Grade responsiva reutilizável — 12 col base, colapsa por breakpoint. */
export function Grid({ children, className, cols = 3, gap = 'md', as: Tag = 'div' }: GridProps) {
  return (
    <Tag className={cn('grid', colsMap[cols], gapMap[gap], className)}>{children}</Tag>
  )
}
