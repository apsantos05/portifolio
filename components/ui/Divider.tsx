import { cn } from '@/lib/cn'

/** Divisor hairline com fade — usado entre subseções. */
export function Divider({ className }: { className?: string }) {
  return <div role="separator" className={cn('hairline w-full', className)} />
}
