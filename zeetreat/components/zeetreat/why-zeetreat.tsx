import { Gem, Leaf, Repeat, Sun } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const CARDS = [
  { icon: Leaf, title: 'Nature Inspired', description: 'Built around botanical ingredients your hair will love.' },
  { icon: Repeat, title: 'Simple Routine', description: 'Fits naturally into the routine you already have.' },
  { icon: Gem, title: 'Premium Presentation', description: 'A bottle and formula that feel as good as they perform.' },
  { icon: Sun, title: 'Made for Everyday Care', description: 'A gentle ritual you can return to, day after day.' },
]

export function WhyZeetreat() {
  return (
    <section className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-lg text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Why Zeetreat</p>
          <h2 className="font-serif text-balance text-3xl font-bold text-foreground sm:text-4xl">
            The Difference is in the Details
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-espresso/10">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-espresso text-brand-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <p className="mt-5 font-serif text-lg font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
