import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ScrollReveal } from './scroll-reveal'

const FAQS = [
  {
    question: 'How can I order Zeetreat?',
    answer:
      'You can order directly through the form in the Order Now section, or contact us on WhatsApp / phone at 0318 4843286.',
  },
  {
    question: 'Is Cash on Delivery available?',
    answer: 'Yes, Cash on Delivery is available on all orders across our delivery areas.',
  },
  {
    question: 'Can I pay through EasyPaisa?',
    answer: 'Yes, EasyPaisa payments are accepted. Details will be shared when you confirm your order.',
  },
  {
    question: 'How do I use Zeetreat?',
    answer:
      'Apply an appropriate amount and gently massage into your scalp and hair as part of your regular routine.',
  },
  {
    question: 'How often should I use it?',
    answer: 'Zeetreat is designed to be used regularly as part of your everyday hair-care ritual.',
  },
  {
    question: 'Where do you deliver?',
    answer: 'We currently deliver across Pakistan. Reach out with your city to confirm availability.',
  },
  {
    question: 'How can I contact Zeetreat?',
    answer: 'You can reach us anytime at 0318 4843286 via call or WhatsApp.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <ScrollReveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">FAQ</p>
          <h2 className="font-serif text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-12">
          <Accordion className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={i}
                className="rounded-2xl border border-border bg-card px-5 data-open:border-brand-gold/40"
              >
                <AccordionTrigger className="font-serif text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
