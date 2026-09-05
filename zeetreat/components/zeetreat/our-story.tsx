import { Leaf } from './leaf'
import { ScrollReveal } from './scroll-reveal'

export function OurStory() {
  return (
    <section id="our-story" className="relative overflow-hidden bg-secondary/50 py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Leaf className="absolute right-[8%] top-[10%] h-16 w-16 rotate-12 opacity-30 animate-zt-drift" />
        <Leaf tone="gold" className="absolute left-[6%] bottom-[8%] h-10 w-10 -rotate-12 opacity-40 animate-zt-drift" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <ScrollReveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Our Story</p>
          <h2 className="font-serif text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Rooted in Nature, Made for You
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Zeetreat began with a simple belief: hair care should feel like a moment of calm, not
            another chore. We set out to create a premium, nature-inspired oil that fits naturally
            into your everyday routine — no complicated steps, no empty promises. Just a thoughtfully
            made herbal oil designed to be part of your daily ritual.
          </p>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Every bottle carries that same intention forward: care that feels good to give yourself,
            drop by drop.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
