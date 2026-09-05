import { Hand, Repeat2, Waves } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const STEPS = [
  {
    number: '01',
    title: 'Apply',
    icon: Waves,
    description: 'Apply an appropriate amount as part of your hair-care routine.',
  },
  {
    number: '02',
    title: 'Massage',
    icon: Hand,
    description: 'Gently massage into the scalp and hair.',
  },
  {
    number: '03',
    title: 'Routine',
    icon: Repeat2,
    description: 'Make Zeetreat part of your regular hair-care ritual.',
  },
]

export function HowToUse() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-lg text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">How to Use</p>
          <h2 className="font-serif text-balance text-3xl font-bold text-foreground sm:text-4xl">
            A Simple Three-Step Ritual
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map(({ number, title, icon: Icon, description }, i) => (
            <ScrollReveal key={number} delay={i * 100} className="relative text-center">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-brand-gold/30 bg-secondary/60">
                <Icon className="size-7 text-brand-gold" />
              </div>
              <p className="mt-5 font-serif text-sm font-semibold tracking-[0.2em] text-brand-gold">{number}</p>
              <p className="mt-1 font-serif text-xl font-semibold text-foreground">{title}</p>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-1.25rem] top-10 hidden h-px w-8 bg-border sm:block" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
