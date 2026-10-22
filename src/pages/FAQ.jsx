import { Helmet } from 'react-helmet-async'
import { PageHero } from '@/components/sections/PageHero'
import { FaqList } from '@/components/sections/FaqList'
import { Reveal } from '@/components/ui/Reveal'
import { FounderNote } from '@/components/sections/FounderNote'
import { FAQ_CATEGORIES } from '@/data/site'

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
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        lead="Everything you need to know about working with Vault Development."
      />
      <section className="sec wrap paper">
        <div className="faq-grid">
          <Reveal>
            <span className="mono">Still curious?</span>
            <h2 style={{ marginTop: 16, fontSize: 'clamp(34px, 4vw, 60px)' }}>Can&apos;t find your answer?</h2>
            <p style={{ color: 'var(--mute-ink)', marginTop: 18, maxWidth: '34ch' }}>
              Call 678-755-6900 or send us a message. We reply within 24 hours on business days.
            </p>
            <FounderNote tone="light" className="note-side">
              No question is too small. Ask me directly and I&apos;ll give you a straight answer.
            </FounderNote>
          </Reveal>
          <div>
            {FAQ_CATEGORIES.map((c) => (
              <Reveal className="faq-cat" key={c.name}>
                <h2 className="mono">{c.name}</h2>
                <FaqList items={c.items} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
