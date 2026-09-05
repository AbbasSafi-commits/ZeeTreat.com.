'use client'

import { useState } from 'react'
import { Banknote, MessageCircle, Phone, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ScrollReveal } from './scroll-reveal'
import { Leaf } from './leaf'

const CONTACT_NUMBER = '0318 4843286'
const WHATSAPP_NUMBER = '923184843286'

export function OrderSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    quantity: '1',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = [
      'New Zeetreat Order:',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Address: ${form.address}`,
      `Quantity: ${form.quantity}`,
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="order" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Leaf tone="gold" className="absolute right-[6%] top-[8%] h-14 w-14 rotate-12 opacity-30 animate-zt-drift" />
        <Leaf className="absolute left-[4%] bottom-[10%] h-10 w-10 -rotate-6 opacity-30 animate-zt-drift" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Order Now</p>
          <h2 className="font-serif text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Try Zeetreat?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Order directly and choose the payment option that works for you.
          </p>
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-secondary/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/80">
            <Banknote className="size-4 text-brand-gold" />
            Cash on Delivery
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-secondary/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/80">
            <Smartphone className="size-4 text-brand-gold" />
            EasyPaisa Available
          </span>
          <a
            href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-secondary/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground/80 transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            <Phone className="size-4 text-brand-gold" />
            {CONTACT_NUMBER}
          </a>
        </div>

        <ScrollReveal delay={100} className="mx-auto mt-12 max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-brand-espresso/5 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="03XX XXXXXXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" required value={form.city} onChange={handleChange} placeholder="Your city" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min={1}
                  required
                  value={form.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address">Complete Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House #, street, area, landmark"
                  rows={3}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="mt-7 h-auto w-full rounded-full bg-brand-espresso py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-cream hover:bg-brand-espresso/90"
            >
              <MessageCircle className="size-4" />
              Place Order
            </Button>

            {submitted && (
              <p className="mt-4 text-center text-sm font-medium text-brand-olive" role="status">
                Thanks! We&apos;ve opened WhatsApp so you can send your order details directly.
              </p>
            )}

            <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
              Placing an order opens WhatsApp with your details pre-filled — you can also call or
              message us directly at{' '}
              <a href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`} className="font-semibold text-brand-gold">
                {CONTACT_NUMBER}
              </a>
              .
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
