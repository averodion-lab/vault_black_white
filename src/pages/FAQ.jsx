import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Plus, Minus } from 'lucide-react'
import { GradientButton } from '@/components/ui/GradientButton'
import { Reveal } from '@/components/ui/Reveal'
import { PlasmaBackground } from '@/components/ui/PlasmaBackground'
import { Typewriter } from '@/components/ui/Typewriter'
import { TypewriterHeadline } from '@/components/ui/TypewriterHeadline'

const CATEGORIES = [
  {
    name: 'General',
    items: [
      {
        q: 'What exactly does Vault Development do?',
        a: 'Vault Development builds custom websites, web applications, mobile apps, and AI-powered tools for businesses of all sizes. We handle everything from design and development to deployment and ongoing maintenance — all under one roof.',
      },
      {
        q: 'Where are you located and do you work remotely?',
        a: "We're based in Middle Georgia, but we work with clients nationwide. Almost everything we do is handled remotely via video calls, email, and project management tools.",
      },
      {
        q: 'What size businesses do you work with?',
        a: 'We work with everyone from solo entrepreneurs and local small businesses to mid-size commercial companies. We tailor our approach to your size, goals, and budget.',
      },
    ],
  },
  {
    name: 'Pricing & Timeline',
    items: [
      {
        q: 'How much does a website cost?',
        a: 'Every project is custom-quoted. Simple sites are more affordable, full platforms are priced by scope. We always provide a full quote before starting — no surprises.',
      },
      {
        q: 'How long does a project take?',
        a: 'Most websites are completed in about one week. Larger or more complex projects — such as web apps, software, or AI integrations — typically take 2–4 weeks. We give you a clear timeline upfront.',
      },
      {
        q: 'Do you require a deposit?',
        a: 'Yes, 50% upfront before work begins, with the remainder due at launch. For larger projects we can structure milestone-based payment schedules.',
      },
      {
        q: 'Do you offer payment plans?',
        a: "Yes. We understand budget is a real consideration for small businesses. Just bring it up when we chat and we'll work something out.",
      },
    ],
  },
  {
    name: 'Process & Working Together',
    items: [
      {
        q: 'How do we get started?',
        a: "Fill out our contact form or call us at 678-755-6900. We'll schedule a free discovery call — no commitment required.",
      },
      {
        q: 'Will I be involved during the build process?',
        a: "Absolutely. We keep you in the loop at every stage — from design mockups to development previews. You'll never feel left in the dark.",
      },
      {
        q: 'Can I update my website myself after launch?',
        a: 'Yes — we can build on a CMS like WordPress that lets you update content without touching code. We also provide a walkthrough at handoff.',
      },
    ],
  },
  {
    name: 'Technical & AI',
    items: [
      {
        q: 'What technologies do you use?',
        a: 'HTML, CSS, JavaScript, React, Next.js, Node.js, Python, SQL, MongoDB, and more. For AI we integrate OpenAI, Claude API, and custom automation — always choosing the right tool for your project.',
      },
      {
        q: 'What kind of AI can you add to my business?',
        a: 'AI chatbots, workflow automation, lead capture tools, content generation, and custom ML solutions. If you can describe the problem, we can usually build the AI solution.',
      },
      {
        q: 'Do you build mobile apps?',
        a: 'Yes. React Native lets us build iOS and Android apps from one codebase — saving you time and money.',
      },
      {
        q: 'Will my website be fast and SEO-friendly?',
        a: "Always. Performance and SEO are built into every project — not afterthoughts. We follow Google's Core Web Vitals on every build.",
      },
    ],
  },
  {
    name: 'Support & Maintenance',
    items: [
      {
        q: 'Do you offer ongoing support after launch?',
        a: "Yes. Monthly maintenance plans covering security updates, backups, content updates, and priority support. We're in it for the long haul.",
      },
      {
        q: 'What if something breaks after launch?',
        a: "If it's due to our work, we fix it at no charge. Maintenance plan clients get priority response times.",
      },
    ],
  },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 py-4">
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left text-ink"
      >
        <span>{item.q}</span>
        {open ? <Minus size={16} className="shrink-0" /> : <Plus size={16} className="shrink-0" />}
      </button>
      {open && <p className="mt-2 text-lg text-muted">{item.a}</p>}
    </div>
  )
}

export function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | Web Design & AI Development Questions | Vault Development</title>
        <meta
          name="description"
          content="Common questions about working with Vault Development — pricing, timelines, process, AI services, and ongoing support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vault Development" />
        <meta property="og:title" content="FAQ | Vault Development" />
        <meta
          property="og:description"
          content="Everything you need to know about working with Vault Development — pricing, timelines, AI services, and more."
        />
        <meta property="og:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <meta property="og:url" content="https://vaultwebsiteagency.com/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Vault Development" />
        <meta
          name="twitter:description"
          content="Everything you need to know about working with Vault Development — pricing, timelines, AI services, and more."
        />
        <meta name="twitter:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <link rel="canonical" href="https://vaultwebsiteagency.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What exactly does Vault Development do?', acceptedAnswer: { '@type': 'Answer', text: 'Vault Development builds custom websites, web applications, mobile apps, and AI-powered tools for businesses of all sizes. We handle everything from design and development to deployment and ongoing maintenance — all under one roof.' } },
              { '@type': 'Question', name: 'Where are you located and do you work remotely?', acceptedAnswer: { '@type': 'Answer', text: "We're based in Middle Georgia, but we work with clients nationwide. Almost everything we do is handled remotely via video calls, email, and project management tools." } },
              { '@type': 'Question', name: 'How much does a website cost?', acceptedAnswer: { '@type': 'Answer', text: 'Every project is custom-quoted. Simple sites are more affordable, full platforms are priced by scope. We always provide a full quote before starting — no surprises.' } },
              { '@type': 'Question', name: 'How long does a project take?', acceptedAnswer: { '@type': 'Answer', text: 'Most websites are completed in about one week. Larger or more complex projects — such as web apps, software, or AI integrations — typically take 2–4 weeks. We give you a clear timeline upfront.' } },
              { '@type': 'Question', name: 'Do you require a deposit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 50% upfront before work begins, with the remainder due at launch. For larger projects we can structure milestone-based payment schedules.' } },
              { '@type': 'Question', name: 'Do you offer payment plans?', acceptedAnswer: { '@type': 'Answer', text: "Yes. We understand budget is a real consideration for small businesses. Just bring it up when we chat and we'll work something out." } },
              { '@type': 'Question', name: 'How do we get started?', acceptedAnswer: { '@type': 'Answer', text: "Fill out our contact form or call us at 678-755-6900. We'll schedule a free discovery call — no commitment required." } },
              { '@type': 'Question', name: 'Will I be involved during the build process?', acceptedAnswer: { '@type': 'Answer', text: "Absolutely. We keep you in the loop at every stage — from design mockups to development previews. You'll never feel left in the dark." } },
              { '@type': 'Question', name: 'What kind of AI can you add to my business?', acceptedAnswer: { '@type': 'Answer', text: 'AI chatbots, workflow automation, lead capture tools, content generation, and custom ML solutions. If you can describe the problem, we can usually build the AI solution.' } },
              { '@type': 'Question', name: 'Will my website be fast and SEO-friendly?', acceptedAnswer: { '@type': 'Answer', text: "Always. Performance and SEO are built into every project — not afterthoughts. We follow Google's Core Web Vitals on every build." } },
              { '@type': 'Question', name: 'Do you offer ongoing support after launch?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Monthly maintenance plans covering security updates, backups, content updates, and priority support. We're in it for the long haul." } },
              { '@type': 'Question', name: 'What if something breaks after launch?', acceptedAnswer: { '@type': 'Answer', text: "If it's due to our work, we fix it at no charge. Maintenance plan clients get priority response times." } },
            ],
          })}
        </script>
      </Helmet>

      <section className="relative overflow-hidden px-6 pb-16 pt-24 text-center">
        <PlasmaBackground className="pointer-events-none absolute inset-0 h-full w-full" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,7,12,0.05)_0%,rgba(7,7,12,0.55)_85%)]"
        />
        <Reveal className="relative z-10">
          <Typewriter text="Got Questions?" className="text-xs uppercase tracking-[0.3em] text-muted" />
          <TypewriterHeadline
            as="h1"
            className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl"
            segments={[
              { text: 'FREQUENTLY' },
              { break: true },
              { text: 'ASKED ' },
              {
                text: 'QUESTIONS',
                className:
                  'bg-[length:250%_100%] bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 bg-clip-text text-transparent [animation:shimmer-text_4s_linear_infinite]',
              },
            ]}
          />
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Everything you need to know about working with Vault Development. Still have questions? Call us at
            678-755-6900.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 100}>
              <h2 className="font-display text-xl text-glass-border2">{cat.name}</h2>
              <div className="mt-4">
                {cat.items.map((item) => (
                  <FaqItem key={item.q} item={item} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="px-6 py-16 text-center">
        <h2 className="font-display text-2xl text-ink">Still have questions?</h2>
        <p className="mt-2 text-lg text-muted">Reach out and we&apos;ll get back to you within 24 hours.</p>
        <div className="mt-6">
          <GradientButton to="/contact">Contact Us →</GradientButton>
        </div>
      </Reveal>
    </>
  )
}
