import { Banknote, Smartphone, Sparkles, Truck } from 'lucide-react'

const ITEMS = [
  { icon: Banknote, label: 'Cash on Delivery' },
  { icon: Smartphone, label: 'EasyPaisa Available' },
  { icon: Sparkles, label: 'Premium Hair Care' },
  { icon: Truck, label: 'Easy Ordering' },
]

export function TrustStrip() {
  return (
    <section aria-label="Why shop with Zeetreat" className="border-y border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4 md:gap-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-center sm:justify-start">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-espresso text-brand-gold">
              <Icon className="size-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80 sm:text-[13px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
