// Site content in one place. Pages and sections read from here.

export const CONTACT = {
  email: 'vaultdevelopmentagency@gmail.com',
  phone: '678-755-6900',
  phoneHref: 'tel:6787556900',
  location: 'Middle Georgia',
}

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/vaultdevelopment' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1DzY5gekXH/' },
]

export const PAGES = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export const HERO_SERVICES = ['Web Development', 'AI Implementation', 'App Development', 'Digital Marketing']

export const SERVICES = [
  { title: 'Web Development', tag: 'Development', body: 'Clean, fast, and scalable code for any project, from simple landing pages to full multi-page platforms. Built right the first time.' },
  { title: 'AI Implementation', tag: 'AI', body: 'Intelligent chatbots, workflow automation, and AI tools integrated directly into your business to save time and boost revenue.' },
  { title: 'App Development', tag: 'Mobile', body: 'iOS and Android apps built with React Native. One codebase, two platforms, and real results for your growing business.' },
  { title: 'Software Development', tag: 'Software', body: 'Custom software tools, internal dashboards, and business automation systems built for the way your team actually works.' },
  { title: 'Digital Marketing', tag: 'Marketing', body: 'SEO, paid advertising, and content strategy that put your business in front of customers actively searching for what you offer.' },
  { title: 'Maintenance & Support', tag: 'Support', body: 'Security patches, regular updates, backups, and fast support so you can focus on running your business.' },
]

export const STEPS = [
  { n: '01', label: 'Analyze', title: 'We Analyze', body: 'We dig into your business, competitors, and goals to figure out exactly what will move the needle for you.' },
  { n: '02', label: 'Design', title: 'We Design', body: 'Every layout, color, and interaction is crafted deliberately for your brand. Nothing generic, nothing templated.' },
  { n: '03', label: 'Implement', title: 'We Implement', body: 'Clean, tested code shipped to production, then supported long after launch.' },
]

export const STATS = [
  { n: '100%', l: 'Custom built' },
  { n: '24H', l: 'Response time' },
  { n: '50+', l: 'Customers helped' },
  { n: '100%', l: 'Customer satisfaction' },
]

export const COMPARE = [
  { feat: '100% custom design, no templates', them: 'no' },
  { feat: 'AI integration & automation', them: 'no' },
  { feat: 'Transparent pricing, full quote upfront', them: 'no' },
  { feat: '24-hour response time', them: 'maybe' },
  { feat: 'Mobile, app & software development', them: 'no' },
  { feat: 'Post-launch support & maintenance', them: 'maybe' },
  { feat: 'Built for results, not just looks', them: 'no' },
  { feat: 'Direct access to your developer', them: 'no' },
]

export const TIERS = [
  { name: 'Starter', sub: 'For new & local businesses', items: ['1–3 page custom website', 'Mobile responsive design', 'Contact form setup', 'Basic SEO optimization', '1 month support included'] },
  { name: 'Professional', sub: 'For growing businesses', featured: true, items: ['5–8 page custom website', 'Full custom design & branding', 'AI chatbot or automation', 'Full SEO optimization', '3 months support included'] },
  { name: 'Enterprise', sub: 'For complex needs', items: ['Full custom web platform', 'Advanced AI integrations', 'App or software development', 'Ongoing retainer support', 'Priority response time'] },
]

export const FAQ_MINI = [
  { q: 'How do we get started?', a: "Fill out the contact form or call us at 678-755-6900. We'll set up a free discovery call with no commitment required." },
  { q: 'How much does a project cost?', a: 'Every project is custom-quoted. Simple sites are more affordable, and complex platforms are priced by scope. You get a full quote before we start, so there are no surprises.' },
  { q: 'How long does a website take?', a: 'Typically 2–4 weeks for a standard site and 6–12 weeks for complex apps. You get a clear timeline upfront.' },
  { q: 'Do you offer support after launch?', a: 'Yes. We offer monthly maintenance plans and are always available for updates, questions, and improvements.' },
]

// EXAMPLE numbers for the "By the numbers" section. Replace with real counts, then set isExample to false.
// While isExample is true the section only renders in development, never in a production build.
export const NUMBERS = {
  isExample: true,
  byService: [['Web Development', 31], ['AI Implementation', 8], ['Digital Marketing', 7], ['Apps & Software', 6]],
  byYear: [['2024', 14], ['2025', 26], ['2026', 12, 'so far']],
  clients: { total: 52, staying: 31 },
}

export const PROJECTS = [
  {
    num: '01',
    img: '/assets/images/leadengine-ai-system.webp',
    alt: 'LeadEngine AI System',
    cat: 'AI Implementation & Web App',
    title: 'LeadEngine',
    body: 'AI-powered lead management system for home service companies. Automated SMS, email, and voicemail follow-ups with pipeline tracking — turning every lead into a booked job.',
    href: 'https://theleadengine.net',
  },
  {
    num: '02',
    img: '/assets/images/ramzef-construction-website.webp',
    alt: 'Ramzef Construction Website',
    cat: 'Web Design & Development',
    title: 'Ramzef Construction',
    body: 'Full custom website for a construction company offering deck building, kitchen remodeling, bathroom renovations, and more. Built to convert local traffic into booked jobs.',
    href: 'https://ramzefconstructionllc.com',
  },
  {
    num: '03',
    img: '/assets/images/tower-tigers-crew-website.webp',
    alt: 'Tower Tigers Crew LLC Website',
    cat: 'Web Design & Development',
    title: 'Tower Tigers Crew LLC',
    body: 'Professional website for a certified telecom tower crew working on AT&T and T-Mobile infrastructure projects nationwide. Built to communicate credibility and attract contracts.',
    href: 'https://towertigers.com',
  },
  {
    num: '04',
    img: '/assets/images/trusted-roofing-website.webp',
    alt: 'Trusted Roofing Website',
    cat: 'Web Design & Development',
    title: 'Trusted Roofing Co.',
    body: 'Clean, conversion-focused website for a roofing services company. Showcases roof installation, repair, and inspection services with a design built to generate local leads.',
    href: null,
  },
  {
    num: '05',
    img: '/assets/images/seva-photos-website.webp',
    alt: 'Seva Photos Website',
    cat: 'Web Design & Development',
    title: 'Seva Photos',
    body: 'Elegant photography portfolio website for Valeria Rudnitckaia. Full-screen imagery, clean navigation, and a refined layout built to showcase professional wedding and portrait photography.',
    href: 'https://seva-photos.com',
  },
  {
    num: '06',
    img: '/assets/images/jaceys-moving-website.webp',
    alt: "Jacey's Moving & Junk Removal Website",
    cat: 'Web Design & Development',
    title: "Jacey's Moving & Junk Removal",
    body: 'Bold, trust-first website for an Atlanta moving and junk removal company. Built to convert with flat-rate pricing, clear service breakdowns, and a straightforward path to a quote.',
    href: null,
  },
]

export const TEAM = [
  {
    photo: '/assets/images/team-rodion-averianov.jpg',
    name: 'Rodion Averianov',
    title: 'Founder & Lead Software Developer',
    plate: 'Founder',
    bio: "Rodion founded Vault Development to bring enterprise-level software engineering to businesses that usually can't access it. A GCSU Information Systems graduate with a Computer Science minor, he leads every technical build personally — from architecture to the last line of code — so nothing ships that he wouldn't put his own name on.",
  },
  {
    photo: '/assets/images/team-ryan-grant.jpg',
    name: 'Ryan Grant',
    title: 'Digital Marketing Specialist',
    plate: 'Marketing',
    bio: "Ryan turns traffic into customers. A Kennesaw State University marketing graduate, he plans and runs paid campaigns across Google, LinkedIn, and Meta — pairing platform expertise with a sharp, data-driven read on what actually converts. He treats every dollar of ad spend like it's his own, testing relentlessly until a campaign earns its place in the budget.",
  },
]

export const HIGHLIGHTS = [
  {
    title: 'Custom-Built, Always',
    body: 'No templates. No page builders. Every site we deliver is hand-coded from scratch to match your brand exactly.',
  },
  {
    title: 'Nationwide Reach',
    body: "We've helped clients across multiple states — from local service businesses to national brands — build their digital presence.",
  },
  {
    title: 'AI-Forward Approach',
    body: 'We integrate modern AI tools to automate tasks, generate leads, and give your business a competitive edge.',
  },
  {
    title: 'Ongoing Support',
    body: 'We stay with you after launch — updates, improvements, and new features whenever you need them.',
  },
]

export const VALUES = [
  {
    title: 'Honesty First',
    body: 'Transparent timelines, honest pricing, and straightforward communication throughout every project.',
  },
  {
    title: 'Quality Over Speed',
    body: "We'd rather take the time to build something exceptional than rush out something mediocre.",
  },
  {
    title: 'Local Commitment',
    body: "We're invested in the success of Georgia businesses. When our clients grow, our community grows.",
  },
  {
    title: 'Tech With Purpose',
    body: 'We only recommend technology that solves real problems and delivers measurable value for you.',
  },
  {
    title: 'Long-Term Partnership',
    body: "We're not a one-and-done shop. We build lasting relationships and stay engaged long after launch.",
  },
  {
    title: 'Results-Driven',
    body: "A beautiful website is worthless if it doesn't perform. We build around measurable outcomes.",
  },
]

export const FAQ_CATEGORIES = [
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