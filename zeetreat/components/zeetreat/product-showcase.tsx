import { Leaf } from './leaf'
import { Product3D } from './product-3d'
import { ScrollReveal } from './scroll-reveal'

const CALLOUTS = [
  { label: 'Herbal Care', position: 'left-[6%] top-[18%] lg:left-[10%]' },
  { label: 'Premium Experience', position: 'right-[4%] top-[30%] lg:right-[8%]' },
  { label: 'Everyday Routine', position: 'left-[10%] bottom-[10%] lg:left-[14%]' },
]

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-brand-espresso bg-grain py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-full max-w-3xl -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[100px]" />
        <Leaf tone="gold" className="absolute left-[8%] top-[15%] h-12 w-12 rotate-12 opacity-40 animate-zt-drift" />
        <Leaf tone="gold" className="absolute right-[10%] bottom-[18%] h-8 w-8 -rotate-12 opacity-30 animate-zt-drift" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <ScrollReveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            The Zeetreat Bottle
          </p>
          <h2 className="font-serif text-balance text-3xl font-bold text-brand-cream sm:text-5xl">
            Meet Zeetreat
          </h2>
        </ScrollReveal>

        <div className="relative mx-auto mt-16 flex justify-center">
          {CALLOUTS.map((c) => (
            <span
              key={c.label}
              className={`absolute z-10 hidden rounded-full border border-brand-gold/30 bg-brand-espresso/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-gold-light shadow-lg backdrop-blur-sm sm:block ${c.position}`}
            >
              {c.label}
            </span>
          ))}

          <ScrollReveal delay={150}>
            <Product3D className="h-[420px] w-[300px] text-[17px] sm:h-[520px] sm:w-[380px] sm:text-[21px]" />
          </ScrollReveal>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:hidden">
          {CALLOUTS.map((c) => (
            <span
              key={c.label}
              className="rounded-full border border-brand-gold/30 bg-brand-espresso/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-gold-light"
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
