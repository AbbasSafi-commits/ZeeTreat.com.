import { Leaf as LeafIcon, Repeat, Sparkle } from 'lucide-react'
import { Product3D } from './product-3d'
import { ScrollReveal } from './scroll-reveal'

const FEATURES = [
  {
    icon: LeafIcon,
    title: 'Nature-Inspired Care',
    description: 'Formulated with botanical ingredients chosen to work gently alongside your hair.',
  },
  {
    icon: Repeat,
    title: 'Simple Hair-Care Routine',
    description: 'Designed to fit effortlessly into the routine you already have — no complicated steps.',
  },
  {
    icon: Sparkle,
    title: 'Premium Everyday Experience',
    description: 'A comforting, elegant ritual that feels indulgent, even on the busiest days.',
  },
]

export function OilSection() {
  return (
    <section id="the-oil" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 mx-auto h-[85%] w-[85%] self-center rounded-[40%] bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-olive/10 blur-2xl" />
          <Product3D interactive={false} className="h-[340px] w-[260px] text-[14px] sm:h-[400px] sm:w-[300px] sm:text-[16px]" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">The Oil</p>
          <h2 className="font-serif text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            More Than Hair Oil.
            <br />A Daily Ritual.
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Zeetreat brings together time-honored botanical ingredients in a lightweight herbal oil,
            made to be worked into your hair and scalp as a calming, restorative moment in your day.
            It&apos;s not a quick fix — it&apos;s a ritual you return to.
          </p>

          <ul className="mt-9 space-y-5">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-espresso/5 text-brand-espresso ring-1 ring-brand-gold/25">
                  <Icon className="size-4.5 text-brand-gold" />
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
