import { Star } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

const REVIEWS = [
  {
    name: 'Ayesha K.',
    quote:
      'Zeetreat has become part of my nightly routine — it feels like a small ritual I actually look forward to.',
  },
  {
    name: 'Bilal R.',
    quote:
      'Simple to use and feels genuinely premium. The bottle alone makes it feel like a treat.',
  },
  {
    name: 'Sana M.',
    quote:
      'I love that it fits so easily into my everyday routine without any extra steps or fuss.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-brand-gold" />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-lg text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Reviews</p>
          <h2 className="font-serif text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Loved for the Daily Ritual
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                <Stars />
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/85">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-serif text-sm font-semibold text-brand-espresso">
                  {review.name}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
