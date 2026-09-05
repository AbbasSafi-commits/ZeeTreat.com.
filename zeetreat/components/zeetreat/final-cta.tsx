import { Phone } from 'lucide-react'
import { Leaf } from './leaf'
import { ScrollReveal } from './scroll-reveal'

const CONTACT_NUMBER = '0318 4843286'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-espresso bg-grain py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[110px]" />
        <Leaf tone="gold" className="absolute left-[10%] top-[20%] h-10 w-10 rotate-12 opacity-30 animate-zt-drift" />
        <Leaf tone="gold" className="absolute right-[12%] bottom-[22%] h-8 w-8 -rotate-6 opacity-25 animate-zt-drift" />
      </div>

      <ScrollReveal className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-serif text-balance text-3xl font-bold text-brand-cream sm:text-5xl">
          Your Hair-Care Ritual Starts Here.
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#order"
            className="inline-flex items-center rounded-full bg-brand-gold px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-espresso shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-xl"
          >
            Order Zeetreat
          </a>
          <a
            href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand-cream/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-brand-cream transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            <Phone className="size-4" />
            {CONTACT_NUMBER}
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
