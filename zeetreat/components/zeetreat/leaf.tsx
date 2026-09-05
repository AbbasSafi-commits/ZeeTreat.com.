import { cn } from '@/lib/utils'

/**
 * Small botanical leaf shape built from pure CSS (border-radius trick).
 * Used as a subtle decorative accent — no SVG illustration needed.
 */
export function Leaf({
  className,
  tone = 'olive',
}: {
  className?: string
  tone?: 'olive' | 'gold'
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'block rounded-tr-full rounded-bl-full',
        tone === 'olive'
          ? 'bg-gradient-to-br from-brand-olive/70 to-brand-olive/30'
          : 'bg-gradient-to-br from-brand-gold-light/80 to-brand-gold/40',
        className,
      )}
    >
      <span
        className={cn(
          'block h-full w-px translate-x-1/2 rotate-45',
          tone === 'olive' ? 'bg-brand-olive/40' : 'bg-brand-gold/40',
        )}
      />
    </span>
  )
}
