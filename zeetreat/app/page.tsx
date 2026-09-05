import { Navbar } from '@/components/zeetreat/navbar'
import { Hero } from '@/components/zeetreat/hero'
import { TrustStrip } from '@/components/zeetreat/trust-strip'
import { OilSection } from '@/components/zeetreat/oil-section'
import { ProductShowcase } from '@/components/zeetreat/product-showcase'
import { Ingredients } from '@/components/zeetreat/ingredients'
import { HowToUse } from '@/components/zeetreat/how-to-use'
import { OurStory } from '@/components/zeetreat/our-story'
import { WhyZeetreat } from '@/components/zeetreat/why-zeetreat'
import { Reviews } from '@/components/zeetreat/reviews'
import { OrderSection } from '@/components/zeetreat/order-section'
import { Faq } from '@/components/zeetreat/faq'
import { FinalCta } from '@/components/zeetreat/final-cta'
import { Footer } from '@/components/zeetreat/footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <OilSection />
      <ProductShowcase />
      <Ingredients />
      <HowToUse />
      <OurStory />
      <WhyZeetreat />
      <Reviews />
      <OrderSection />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
