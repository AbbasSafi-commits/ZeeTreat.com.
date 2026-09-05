import { Droplet } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'

/**
 * EDIT ME:
 * The real Zeetreat ingredient list was not visible/provided, so these are
 * clearly-labeled placeholders. Replace `name` and `description` below with
 * the actual ingredients (e.g. from your product label) — no other markup
 * needs to change.
 */
const INGREDIENTS = [
  { name: 'Ingredient 01', description: 'Replace with the name and benefit of your first key botanical ingredient.' },
  { name: 'Ingredient 02', description: 'Replace with the name and benefit of your second key botanical ingredient.' },
  { name: 'Ingredient 03', description: 'Replace with the name and benefit of your third key botanical ingredient.' },
  { name: 'Ingredient 04', description: 'Replace with the name and benefit of your fourth key botanical ingredient.' },
]

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Ingredients</p>
          <h2 className="font-serif text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Powered by Nature
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every drop of Zeetreat is built around carefully chosen botanicals, working together for a
            simple, nourishing hair-care ritual.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INGREDIENTS.map((ingredient, i) => (
            <ScrollReveal key={ingredient.name} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-espresso/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-olive/10 transition-transform duration-500 group-hover:scale-125" />
                <span className="relative flex size-11 items-center justify-center rounded-full bg-brand-espresso text-brand-gold">
                  <Droplet className="size-5" />
                </span>
                <p className="relative mt-5 font-serif text-lg font-semibold text-foreground">
                  {ingredient.name}
                </p>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ingredient.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
