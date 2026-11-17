// One entry per service landing page at /services/<slug>. Order matches SERVICES in site.js.
// Facts here (timelines, deposit, ownership) must match the FAQ page and Terms.

export const SERVICE_PAGES = [
  {
    slug: 'web-development',
    title: 'Web design & development',
    short: 'Web Development',
    seoTitle: 'Custom Web Design & Development in Atlanta | Zunova Digital',
    description:
      'Hand-coded, mobile-first websites built to rank and convert. Custom web design and development for Atlanta businesses and clients nationwide.',
    lead: 'Hand-coded websites that load fast, rank well, and turn visitors into customers.',
    headline: 'A website that does a job, not just a look.',
    intro: [
      'Most business websites are templates with the logo swapped. They load slowly, look like everyone else, and quietly lose the people who land on them. We build the opposite: a site designed around what your customers need to see, written for how they search, and coded by hand so it stays fast.',
      'Every build starts with your goals and your competition, not a theme. You get a layout that fits your brand, copy and structure aimed at the searches that matter, and a clean handover with everything you need to keep it running.',
    ],
    note: "Tell me what your best customer looks like and I'll show you how the site should be built to find more of them.",
    includes: [
      { title: 'Custom design', body: 'Layouts, type, and colour chosen for your brand. No templates, no page builders.' },
      { title: 'Mobile-first build', body: 'Designed for the phone screen first, since that is where most of your visitors are.' },
      { title: 'SEO built in', body: 'Clean headings, titles and descriptions, structured data, a sitemap, and fast load times from day one.' },
      { title: 'Lead capture', body: 'Contact forms, click-to-call, and quote requests that land in your inbox without spam.' },
      { title: 'Analytics', body: 'Privacy-friendly tracking so you can see where visitors come from and what they do.' },
      { title: 'Launch and handover', body: 'Domain, hosting, and SSL set up, with a walkthrough so you can make simple updates yourself.' },
    ],
    projects: ['Ramzef Construction', 'Tower Tigers Crew LLC', 'Trusted Roofing Co.', 'Seva Photos', "Jacey's Moving & Junk Removal"],
    faq: [
      { q: 'How long does a website take?', a: 'Most websites are completed in about one week. Larger sites with more pages, custom features, or integrations take longer, and you get a clear timeline before we start.' },
      { q: 'How much does a website cost?', a: 'Every site is custom-quoted. A starter site of one to three pages is the most affordable; a five-to-eight page site with full branding and an AI chatbot sits in our Professional tier. You get the full price in writing before work begins.' },
      { q: 'Do I own the website?', a: 'Yes. Once the final invoice is paid, the design, code, and content are yours, and we can set it up on hosting you control.' },
      { q: 'Can you work with my existing domain and hosting?', a: 'Yes. We can build on your current hosting or recommend a better fit, and we handle the domain and SSL setup either way.' },
    ],
  },
  {
    slug: 'ai-implementation',
    title: 'AI implementation',
    short: 'AI Implementation',
    seoTitle: 'AI Implementation & Automation for Business | Zunova Digital',
    description:
      'AI chatbots, lead follow-up, and workflow automation integrated into your business. Practical AI implementation from Zunova Digital in Atlanta, GA.',
    lead: 'Practical AI that answers leads, reads documents, and runs the repetitive work, inside the tools you already use.',
    headline: 'AI that does real work in your business.',
    intro: [
      'AI is only useful when it is wired into the way your business actually runs. We do not sell a chatbot widget and walk away. We look at where time and leads are being lost, then build an assistant or automation that fixes that specific gap.',
      'That might be an assistant that replies to quote requests in seconds, a system that reads incoming certificates or invoices straight into your database, or a follow-up sequence that keeps every lead warm until it books. You stay in control of what it says and does.',
    ],
    note: "If you can describe the task you keep doing by hand, I can usually tell you in one call whether AI can take it over.",
    includes: [
      { title: 'AI assistants', body: 'Chat and text assistants that answer questions, qualify leads, and book appointments around the clock.' },
      { title: 'Automated follow-up', body: 'SMS, email, and voicemail sequences that reply to new leads instantly and keep going until they respond.' },
      { title: 'Document processing', body: 'Systems that read certificates, forms, and invoices from Gmail or Drive and keep your records current.' },
      { title: 'Workflow automation', body: 'Connections between your inbox, calendar, CRM, and spreadsheets so data moves without retyping.' },
      { title: 'Custom AI tools', body: 'Purpose-built tools for your team when nothing off the shelf fits the job.' },
      { title: 'Guardrails and training', body: 'Set up to stay on your script, with your team trained to review, adjust, and switch it off if needed.' },
    ],
    projects: ['LeadEngine', 'CertTracker'],
    faq: [
      { q: 'What can AI actually do for a small business?', a: 'The reliable wins are answering and qualifying leads instantly, following up automatically, and taking over repetitive admin like reading documents into a database or sending reminders. We focus on those before anything experimental.' },
      { q: 'Is my business data safe?', a: 'Your data stays in accounts you own. We scope every integration to only the access it needs, use providers under their business terms, and document exactly what the system can read and write.' },
      { q: 'How long does an AI project take?', a: 'A focused assistant or automation typically takes two to four weeks from kickoff to live, including testing on your real conversations and documents.' },
      { q: 'Will it replace my staff?', a: 'No. It takes the repetitive work off their plate, such as first replies, data entry, and reminders, so they spend their time on the customers and jobs that need a person.' },
    ],
  },
  {
    slug: 'app-development',
    title: 'App development',
    short: 'App Development',
    seoTitle: 'iOS & Android App Development | Zunova Digital',
    description:
      'Custom iOS and Android apps built with React Native from one codebase. App design, development, and App Store launch by Zunova Digital in Atlanta.',
    lead: 'iOS and Android apps from one codebase, designed around the job your customers need done.',
    headline: 'One app, both stores, built for your business.',
    intro: [
      'A good app does one thing clearly and fast. We scope the first version around the feature your customers or staff will actually use every day, design it for the thumb, and build it with React Native so a single codebase ships to both the App Store and Google Play.',
      'Behind the screens we build the parts you do not see: accounts, data, notifications, payments, and the integrations with the systems you already run. Then we handle store submission and stay on for updates.',
    ],
    note: "Bring the idea on a napkin. We'll turn it into a first version your customers can hold in two to four weeks.",
    includes: [
      { title: 'Product scoping', body: 'A clear first version with the features that matter, so the build stays focused and on budget.' },
      { title: 'App design', body: 'Screens designed for small displays and one-handed use, matched to your brand.' },
      { title: 'React Native build', body: 'One codebase for iOS and Android, with native performance where it counts.' },
      { title: 'Backend and integrations', body: 'Accounts, data storage, push notifications, payments, and links to your existing systems.' },
      { title: 'Store submission', body: 'Listings, screenshots, review requirements, and release handled for both stores.' },
      { title: 'Updates and support', body: 'Bug fixes, OS updates, and new features after launch under a maintenance plan.' },
    ],
    projects: [],
    faq: [
      { q: 'How long does an app take to build?', a: 'A focused first version typically takes two to four weeks. Apps with many screens, user roles, or complex integrations take longer, and you get the timeline in writing up front.' },
      { q: 'Native or cross-platform?', a: 'We build with React Native so one codebase runs on both iOS and Android. It keeps cost and maintenance down without a visible trade-off for the vast majority of business apps.' },
      { q: 'Do you publish the app to the stores?', a: 'Yes. We prepare the listings, handle review requirements, and release the app on the App Store and Google Play under your developer accounts, so you own the listing.' },
      { q: 'What does an app cost?', a: 'Apps are quoted by scope after a short discovery call. A 50% deposit starts the project, with the balance due at launch, or milestone payments for larger builds.' },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software development',
    short: 'Software Development',
    seoTitle: 'Custom Software & Internal Tools Development | Zunova Digital',
    description:
      'Custom software, dashboards, and internal tools built around the way your team works. Automation and integrations by Zunova Digital, Atlanta, GA.',
    lead: 'Dashboards, internal tools, and automation built around the way your team actually works.',
    headline: 'Software shaped to your process, not the other way round.',
    intro: [
      'Off-the-shelf software makes you work its way. When the spreadsheet has grown into a system, or three tools need to talk to each other and do not, custom software fixes the gap exactly, with nothing you do not need.',
      'We build dashboards your managers open every morning, tools that give field staff exactly the screens they need, and automation that moves data between your CRM, inbox, calendar, and accounting without anyone retyping it. You own the code.',
    ],
    note: "Show me the spreadsheet everyone's afraid to touch. That's usually where the software should start.",
    includes: [
      { title: 'Internal dashboards', body: 'Live views of jobs, leads, certifications, or revenue, with filters and exports your team will use.' },
      { title: 'Business automation', body: 'Rules and alerts that run on their own: reminders before expiries, hand-offs between stages, daily reports.' },
      { title: 'Integrations', body: 'Connections to your CRM, email, calendar, accounting, and the APIs of the tools you already pay for.' },
      { title: 'Data and reporting', body: 'Clean data structures and reports that answer the questions you ask every week.' },
      { title: 'Access and roles', body: 'Logins, permissions, and audit trails so the right people see the right things.' },
      { title: 'Hosting and maintenance', body: 'Deployed on infrastructure you control, with backups, monitoring, and updates under a support plan.' },
    ],
    projects: ['LeadEngine', 'CertTracker'],
    faq: [
      { q: 'When does custom software make sense over an off-the-shelf tool?', a: 'When the tool forces your team into workarounds, when you are paying for seats and features you do not use, or when two systems need to share data and cannot. We will tell you honestly if an existing product is the better fit.' },
      { q: 'Where is the software hosted?', a: 'On cloud infrastructure in accounts you own. You keep the keys, we handle the setup, backups, and monitoring.' },
      { q: 'Who owns the code?', a: 'You do, once the final invoice is paid. It is written in standard, documented technology so another developer could pick it up if you ever needed them to.' },
      { q: 'What happens after launch?', a: 'Most clients keep a monthly maintenance plan for updates, fixes, and small improvements. If something breaks because of our work, we fix it at no charge.' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital marketing',
    short: 'Digital Marketing',
    seoTitle: 'SEO & Digital Marketing Services in Atlanta | Zunova Digital',
    description:
      'SEO, Google Ads, and Meta and LinkedIn campaigns run by a dedicated specialist. Digital marketing that puts your business in front of people ready to buy.',
    lead: 'SEO and paid campaigns that put your business in front of people already searching for what you do.',
    headline: 'Marketing measured in customers, not clicks.',
    intro: [
      'A website only earns its keep when the right people find it. We combine search optimisation for the long game with paid campaigns on Google, Meta, and LinkedIn for results you can see this month, and we tie both back to leads and jobs, not vanity numbers.',
      'Our marketing specialist runs the campaigns personally, tests relentlessly, and reports in plain language every month. Budgets stay in accounts you own, so you can always see exactly where every dollar goes.',
    ],
    note: "I'll be straight with you: if ads aren't the right move for your budget yet, I'll say so and tell you what is.",
    includes: [
      { title: 'Local and on-page SEO', body: 'Google Business Profile, service pages, titles, content, and technical fixes aimed at the searches your customers make.' },
      { title: 'Google Ads', body: 'Search campaigns built around buying intent, with negative keywords and landing pages that convert.' },
      { title: 'Meta and LinkedIn ads', body: 'Targeted campaigns for awareness and lead generation, matched to where your customers spend time.' },
      { title: 'Content strategy', body: 'A plan for the pages and posts that earn rankings and answer the questions buyers ask.' },
      { title: 'Landing pages', body: 'Purpose-built pages for each campaign, designed and coded by the same team that builds your site.' },
      { title: 'Plain-language reporting', body: 'A monthly summary of what ran, what it cost, and what it brought in.' },
    ],
    projects: [],
    faq: [
      { q: 'How long until SEO shows results?', a: 'Expect months, not days. Technical and on-page fixes can lift rankings within weeks, but steady growth in search traffic usually takes three to six months. Paid ads can bring leads in the first week while SEO builds.' },
      { q: 'Is there a minimum ad budget?', a: 'It depends on your market and competition. We will tell you honestly what a campaign needs to work, and if the budget is not there yet, we will recommend where to start instead.' },
      { q: 'Who owns the ad accounts?', a: 'You do. We set up and manage campaigns inside accounts you own, so your history, data, and billing stay with you.' },
      { q: 'How do you report?', a: 'Monthly, in plain language: what ran, what it cost, which leads and calls it produced, and what we are changing next.' },
    ],
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & support',
    short: 'Maintenance & Support',
    seoTitle: 'Website Maintenance & Support Plans | Zunova Digital',
    description:
      'Monthly website maintenance: security updates, backups, content changes, and fast fixes with priority response. Support plans from Zunova Digital.',
    lead: 'Security updates, backups, content changes, and fast fixes, so your site keeps working while you run the business.',
    headline: 'Launch is the start, not the end.',
    intro: [
      'Websites, apps, and automations need looking after: libraries get security patches, hosting changes, content goes stale, and something always needs a tweak. A maintenance plan means a developer who already knows your build is on hand, instead of a scramble when something breaks.',
      'Plans are monthly and scale with what we built for you, from a simple site that needs updates and backups to a software platform with monitoring and priority response.',
    ],
    note: "Most of my support messages get a fix the same day. You shouldn't have to wait a week to change a phone number on your site.",
    includes: [
      { title: 'Security updates', body: 'Dependencies, platform, and server patches applied as they are released.' },
      { title: 'Backups', body: 'Scheduled off-site backups so your site or data can be restored quickly.' },
      { title: 'Content updates', body: 'Text, image, pricing, and team changes handled for you.' },
      { title: 'Performance and uptime checks', body: 'Speed, broken links, forms, and uptime monitored so problems are caught before customers notice.' },
      { title: 'Fast fixes', body: 'Bugs and layout issues resolved quickly by the people who built it.' },
      { title: 'Priority response', body: 'Plan clients go to the front of the queue, with same-day replies on working days.' },
    ],
    projects: [],
    faq: [
      { q: 'What does a maintenance plan include?', a: 'Security updates, backups, content changes, monitoring, and fixes, with priority response. The exact hours and scope are set in your plan so there are no surprise invoices.' },
      { q: 'Do I need a plan if my site is simple?', a: 'A small static site needs less, but hosting, domains, SSL, and forms still need attention, and you will want changes made. A light plan covers that for a predictable monthly cost.' },
      { q: 'What if something breaks?', a: "If it is due to our work, we fix it at no charge. For everything else, plan clients get priority response and the fix is covered by the plan's included hours." },
      { q: 'Can I start a plan for a site someone else built?', a: 'Usually, yes. We review the existing build first, tell you what state it is in, and quote a plan based on what it needs.' },
    ],
  },
]

export function servicePage(slug) {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}
