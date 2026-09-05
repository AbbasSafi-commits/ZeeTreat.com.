import { ArrowRight, ChevronDown } from 'lucide-react'
import { Product3D } from './product-3d'
import { Leaf } from './leaf'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#fdf9ef] via-background to-background pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* background botanical accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-brand-olive/10 blur-3xl" />
        <Leaf className="absolute left-[6%] top-[22%] h-10 w-10 rotate-12 opacity-70 animate-zt-drift" />
        <Leaf tone="gold" className="absolute right-[10%] top-[12%] h-8 w-8 -rotate-6 opacity-60 animate-zt-drift" />
        <Leaf className="absolute left-[18%] bottom-[12%] h-6 w-6 rotate-45 opacity-50 animate-zt-drift" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <div className="relative z-10 order-2 lg:order-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-espresso">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Herbal Hair Care
          </p>

          <h1 className="font-serif text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Nature&apos;s Care.
            <br />
            <span className="text-brand-gold">Made for Your Hair.</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            A premium, nature-inspired hair-care oil created to bring a simple and nourishing
            ritual to your everyday routine.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#order"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-espresso px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-cream shadow-lg shadow-brand-espresso/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Order Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#the-oil"
              className="inline-flex items-center gap-2 rounded-full border border-brand-espresso/20 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              Discover Zeetreat
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <ChevronDown className="size-4 animate-bounce text-brand-gold" />
            Scroll to explore
          </div>
        </div>

        {/* Product */}
        <div className="relative order-1 z-10 flex items-center justify-center lg:order-2">
          <Product3D
            className="h-[360px] w-[280px] text-[15px] sm:h-[440px] sm:w-[340px] sm:text-[18px] lg:h-[500px] lg:w-[380px] lg:text-[20px]"
          />
        </div>
      </div>
    </section>
  )
}
