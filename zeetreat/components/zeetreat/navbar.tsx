'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'The Oil', href: '#the-oil' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/80 bg-background/90 shadow-[0_4px_20px_-8px_rgba(36,22,8,0.25)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Zeetreat home">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-gold/40 sm:h-11 sm:w-11">
            <Image
              src="/zeetreat-logo.jpg"
              alt="Zeetreat"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-serif text-lg font-bold tracking-wide text-foreground sm:text-xl">
            Zeetreat
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.12em] text-foreground/75 transition-colors hover:text-brand-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#order"
            className="inline-flex items-center rounded-full bg-brand-espresso px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-cream shadow-md transition-all hover:bg-brand-espresso/90 hover:shadow-lg"
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex items-center justify-center rounded-full border border-border bg-card p-2.5 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-400 ease-out lg:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-5 pb-6 pt-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.1em] text-foreground/80 transition-colors hover:bg-muted hover:text-brand-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand-espresso px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.1em] text-brand-cream"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
