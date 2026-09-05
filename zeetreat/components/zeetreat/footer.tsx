import Image from 'next/image'
import { Banknote, Phone, Smartphone } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'The Oil', href: '#the-oil' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Order Now', href: '#order' },
]

const CONTACT_NUMBER = '0318 4843286'

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="Zeetreat home">
              <span className="relative block h-11 w-11 overflow-hidden rounded-full ring-1 ring-brand-gold/40">
                <Image src="/zeetreat-logo.jpg" alt="Zeetreat" fill sizes="44px" className="object-cover" />
              </span>
              <span className="font-serif text-xl font-bold text-foreground">Zeetreat</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A premium, nature-inspired herbal hair oil made to be part of your everyday ritual.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">Contact & Payment</p>
            <a
              href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand-gold"
            >
              <Phone className="size-4 text-brand-gold" />
              {CONTACT_NUMBER}
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <Banknote className="size-3.5 text-brand-gold" />
                Cash on Delivery
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <Smartphone className="size-3.5 text-brand-gold" />
                EasyPaisa
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Zeetreat. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
