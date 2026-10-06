import { Helmet } from 'react-helmet-async'
import {
  Layers,
  Globe2,
  Sparkles,
  LifeBuoy,
  CheckCircle2,
  Gem,
  MapPin,
  Target,
  Handshake,
  TrendingUp,
} from 'lucide-react'
import { GradientButton } from '@/components/ui/GradientButton'
import { StatCounter } from '@/components/ui/StatCounter'
import { Typewriter } from '@/components/ui/Typewriter'
import { TypewriterHeadline } from '@/components/ui/TypewriterHeadline'
import { Reveal } from '@/components/ui/Reveal'
import { PlasmaBackground } from '@/components/ui/PlasmaBackground'

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'Custom-Built, Always',
    body: 'No templates. No page builders. Every site we deliver is hand-coded from scratch to match your brand exactly.',
  },
  {
    icon: Globe2,
    title: 'Nationwide Reach',
    body: "We've helped clients across multiple states — from local service businesses to national brands — build their digital presence.",
  },
  {
    icon: Sparkles,
    title: 'AI-Forward Approach',
    body: 'We integrate modern AI tools to automate tasks, generate leads, and give your business a competitive edge.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    body: 'We stay with you after launch — updates, improvements, and new features whenever you need them.',
  },
]

const VALUES = [
  {
    icon: CheckCircle2,
    title: 'Honesty First',
    body: 'Transparent timelines, honest pricing, and straightforward communication throughout every project.',
  },
  {
    icon: Gem,
    title: 'Quality Over Speed',
    body: "We'd rather take the time to build something exceptional than rush out something mediocre.",
  },
  {
    icon: MapPin,
    title: 'Local Commitment',
    body: "We're invested in the success of Georgia businesses. When our clients grow, our community grows.",
  },
  {
    icon: Target,
    title: 'Tech With Purpose',
    body: 'We only recommend technology that solves real problems and delivers measurable value for you.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    body: "We're not a one-and-done shop. We build lasting relationships and stay engaged long after launch.",
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    body: "A beautiful website is worthless if it doesn't perform. We build around measurable outcomes.",
  },
]

const TEAM = [
  {
    photo: '/assets/images/team-rodion-averianov.jpg',
    name: 'Rodion Averianov',
    title: 'Founder & Lead Software Developer',
    bio: "Rodion founded Vault Development to bring enterprise-level software engineering to businesses that usually can't access it. A GCSU Information Systems graduate with a Computer Science minor, he leads every technical build personally — from architecture to the last line of code — so nothing ships that he wouldn't put his own name on.",
  },
  {
    photo: '/assets/images/team-ryan-grant.jpg',
    name: 'Ryan Grant',
    title: 'Digital Marketing Specialist',
    bio: "Ryan turns traffic into customers. A Kennesaw State University marketing graduate, he plans and runs paid campaigns across Google, LinkedIn, and Meta — pairing platform expertise with a sharp, data-driven read on what actually converts. He treats every dollar of ad spend like it's his own, testing relentlessly until a campaign earns its place in the budget.",
  },
]

const STATS = [
  { n: '100%', l: 'Custom Built' },
  { n: '24H', l: 'Response Time' },
  { n: '50+', l: 'Customers Helped' },
  { n: '100%', l: 'Customer Satisfaction' },
]

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Custom Web Design Agency | Vault Development | Middle Georgia</title>
        <meta
          name="description"
          content="Learn about Vault Development — a web design and AI company built to help businesses compete and grow online. 50+ clients helped. 100% custom built."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vault Development" />
        <meta property="og:title" content="About | Vault Development" />
        <meta
          property="og:description"
          content="A web design and AI technology company built to help local and commercial businesses compete and grow in the digital world."
        />
        <meta property="og:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <meta property="og:url" content="https://vaultwebsiteagency.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Vault Development" />
        <meta
          name="twitter:description"
          content="A web design and AI technology company built to help local and commercial businesses compete and grow in the digital world."
        />
        <meta name="twitter:image" content="https://vaultwebsiteagency.com/og-image.png" />
        <link rel="canonical" href="https://vaultwebsiteagency.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Vault Development',
            description: 'Vault Development is a web design and AI technology company built to help businesses compete and grow online. Based in Middle Georgia, serving clients nationwide.',
            url: 'https://vaultwebsiteagency.com/about',
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': 'https://vaultwebsiteagency.com/#business',
              name: 'Vault Development',
              foundingLocation: 'Middle Georgia',
              description: 'Custom websites, AI solutions, and software development for businesses nationwide.',
              telephone: '+16787556900',
              email: 'vaultdevelopmentagency@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Middle Georgia', addressRegion: 'GA', addressCountry: 'US' },
              founder: { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
              employee: [
                { '@type': 'Person', name: 'Rodion Averianov', jobTitle: 'Founder & Lead Software Developer' },
                { '@type': 'Person', name: 'Ryan Grant', jobTitle: 'Digital Marketing Specialist' },
              ],
            },
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
          <Typewriter text="About Us" className="text-xs uppercase tracking-[0.3em] text-muted" />
          <TypewriterHeadline
            as="h1"
            className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl"
            segments={[
              { text: 'BUILT ' },
              {
                text: 'DIFFERENT.',
                className:
                  'bg-[length:250%_100%] bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 bg-clip-text text-transparent [animation:shimmer-text_4s_linear_infinite]',
              },
              { break: true },
              { text: 'DIGITALLY FORWARD.' },
            ]}
          />
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            A web design and AI technology company built to help local and commercial businesses compete and grow in
            the digital world.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-16">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-muted">The People Behind It</span>
          <h2 className="mt-2 font-display text-2xl text-ink">MEET THE TEAM</h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-10 sm:grid-cols-2">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-gradient-to-br from-glass-border1 via-glass-border2 to-glass-border3 opacity-70" />
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="eager"
                  className="relative aspect-[4/5] w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl text-ink">{member.name}</h3>
                <span className="mt-1 block text-xs uppercase tracking-widest text-glass-border2">{member.title}</span>
                <p className="mt-3 text-lg text-muted">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Who We Are</span>
            <h2 className="mt-3 font-display text-3xl text-ink">
              BUILT FOR
              <br />
              <span className="text-glass-border2">YOUR SUCCESS</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Vault Development was founded with a simple belief: every business deserves a website and digital
              presence that truly works for them — not just something that looks nice, but something that actually
              drives growth.
            </p>
            <p className="mt-3 text-lg text-muted">
              We&apos;re based in Middle Georgia, and we work with clients nationwide — bringing local dedication
              combined with cutting-edge technology to every single project we take on.
            </p>
            <blockquote className="mt-6 border-l-2 border-glass-border2 pl-4 font-display text-lg text-ink">
              &quot;Every business deserves a digital presence that{' '}
              <em className="text-glass-border2 not-italic">actually works</em> for them.&quot;
            </blockquote>
            <p className="mt-6 text-lg text-muted">
              We don&apos;t just build websites. We build tools that help businesses compete — combining clean design
              with modern AI, custom development, and a process built around your goals, not ours.
            </p>
            <div className="mt-6">
              <GradientButton to="/contact">Work With Us →</GradientButton>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon
              return (
                <Reveal key={h.title} delay={i * 100} className="flex gap-4">
                  <Icon className="mt-1 shrink-0 text-glass-border3" />
                  <div>
                    <h3 className="font-display text-lg text-ink">{h.title}</h3>
                    <p className="mt-1 text-lg text-muted">{h.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <StatCounter value={s.n} className="font-display text-3xl text-ink" />
              <div className="mt-1 text-xs uppercase tracking-widest text-muted">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16">
        <Reveal className="mx-auto max-w-6xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-muted">What We Stand For</span>
          <h2 className="mt-2 font-display text-2xl text-ink">OUR VALUES</h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon
            return (
              <Reveal key={v.title} delay={i * 80}>
                <Icon className="text-glass-border3" size={28} />
                <h3 className="mt-3 font-display text-lg text-ink">{v.title}</h3>
                <p className="mt-2 text-lg text-muted">{v.body}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <Reveal as="section" className="px-6 py-16 text-center">
        <h2 className="font-display text-2xl text-ink">Let&apos;s build something together.</h2>
        <p className="mt-2 text-lg text-muted">We&apos;d love to hear about your business and how we can help.</p>
        <div className="mt-6">
          <GradientButton to="/contact">Start a Conversation →</GradientButton>
        </div>
      </Reveal>
    </>
  )
}
