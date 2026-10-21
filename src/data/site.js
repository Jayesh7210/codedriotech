// Every visible string lives here.
// Assumptions (owner must confirm, all marked `placeholder: true` where they appear):
// - production domain is codedriotech.com and the inbox is contact@codedriotech.com
// - the company is based in India and works remotely with clients elsewhere
// - first reply within one working day (the old site promised 24 hours)
// - the stacks listed per service are the ones the team actually ships with
// - public launch date 7 Dec 2026 (taken from the old site's countdown)

export const site = {
  name: 'CodeDrio Technologies',
  short: 'codedrio',
  url: 'https://codedriotech.com', // placeholder: true
  email: 'contact@codedriotech.com', // placeholder: true
  location: 'Based in India, working with teams in any time zone.', // placeholder: true
  launch: '2026-12-07T00:00:00+05:30',
  launchLabel: '07.12.2026',
  launchLong: '7 December 2026',
  description:
    'CodeDrio Technologies builds AI agents, cloud infrastructure, backends and apps, and keeps them running. Opening 7 December 2026, taking early projects now.',
};

export const nav = [
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export const pages = {
  '/': {
    title: 'CodeDrio Technologies | AI systems and the software around them',
    description: site.description,
  },
  '/services': {
    title: 'Services | CodeDrio Technologies',
    description:
      'Six things we build: AI agents and LLM products, cloud and DevOps, backends and APIs, web and mobile apps, data platforms and security engineering.',
  },
  '/about': {
    title: 'About | CodeDrio Technologies',
    description:
      'How CodeDrio works: scope, prototype, build, run. A software and AI engineering company opening to the public on 7 December 2026.',
  },
  '/contact': {
    title: 'Contact | CodeDrio Technologies',
    description:
      'Start a project with CodeDrio Technologies. Tell us what you are building and we reply within one working day with next steps.',
  },
  '/404': {
    title: 'Path not found | CodeDrio Technologies',
    description: 'This path does not resolve. Head back to the CodeDrio Technologies home page.',
  },
};

export const hero = {
  intro:
    'CodeDrio Technologies is a software and AI engineering company. We open to the public on 7 December 2026 and are taking early projects now.',
};

export const statement =
  'Most software works in the demo. We build for the part after it: the evals, the infrastructure and the on-call nights that decide whether it keeps working.';

export const services = [
  {
    slug: 'agents',
    name: 'AI agents and LLM products',
    short: 'Agents, retrieval, evals',
    summary:
      'Assistants and agents that read your data and act through your tools, with evaluation suites that tell you the day they get worse.',
    deliver: [
      'Retrieval over your documents and databases',
      'Tool calling into your own systems, with permissions',
      'An eval harness and regression tests per release',
      'Cost and latency budgets per request',
    ],
    stack: ['Python', 'TypeScript', 'PyTorch', 'pgvector'],
  },
  {
    slug: 'cloud',
    name: 'Cloud and DevOps',
    short: 'Infrastructure as code',
    summary:
      'Infrastructure written as code, shipped by pipeline and observable from the first deploy, on AWS, Google Cloud or Azure.',
    deliver: [
      'Terraform modules your team can read',
      'Kubernetes or serverless, whichever fits the load',
      'CI/CD with preview environments',
      'Dashboards, alerts and runbooks',
    ],
    stack: ['Terraform', 'Kubernetes', 'Docker', 'GitHub Actions'],
  },
  {
    slug: 'backend',
    name: 'Backends and APIs',
    short: 'Services that stay fast',
    summary:
      'Services that stay fast as traffic grows: clear APIs, queues where they help, and the tests that let you change them safely.',
    deliver: [
      'API design, versioning and docs',
      'Event-driven pipelines where batch is too slow',
      'Load tests before launch, not after',
      'Migrations off a monolith, one route at a time',
    ],
    stack: ['Go', 'Rust', 'Node.js', 'gRPC', 'Kafka'],
  },
  {
    slug: 'apps',
    name: 'Web and mobile apps',
    short: 'Product interfaces',
    summary:
      'Product interfaces built with your designers, tested on real phones, and fast on the slow connections your users actually have.',
    deliver: [
      'Web apps in React and Next.js',
      'iOS and Android from one React Native codebase',
      'Accessibility checked against WCAG 2.2 AA',
      'Performance budgets in CI',
    ],
    stack: ['React', 'Next.js', 'React Native', 'TypeScript'],
  },
  {
    slug: 'data',
    name: 'Data platforms',
    short: 'Numbers people trust',
    summary:
      'Pipelines and warehouses that turn product events into numbers your team trusts enough to make decisions with.',
    deliver: [
      'Event tracking with a written schema',
      'Streaming and batch pipelines',
      'A warehouse modelled for the questions you ask',
      'Data quality checks that page someone',
    ],
    stack: ['Kafka', 'ClickHouse', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'security',
    name: 'Security engineering',
    short: 'Designed in, not bolted on',
    summary:
      'Threat models, least-privilege access and audit trails designed in early, so a compliance review is paperwork instead of a rewrite.',
    deliver: [
      'Threat modelling for new features',
      'SSO, OIDC and role-based access',
      'Secrets management and mTLS between services',
      'Fixes for findings from your pen test',
    ],
    stack: ['OIDC', 'mTLS', 'Vault', 'OWASP ASVS'],
  },
];

export const process = [
  { name: 'Scope', text: 'We read your code, talk to the people who will use the thing, and write down what done means. You get a plan and an estimate.' },
  { name: 'Prototype', text: 'The riskiest part first, working end to end, inside your environment rather than a sandbox.' },
  { name: 'Build', text: 'Short cycles and a demo every week. The code lives in your repository from the first commit.' },
  { name: 'Run', text: 'Monitoring, on-call cover and a handover your own team can pick up without us.' },
];

export const principles = [
  { name: 'Your repository, from day one.', text: 'Nothing is held back until the final invoice. You can read every commit as it lands.' },
  { name: 'Measured, not guessed.', text: 'Model quality, latency and cost get numbers and tests, the same as any other code.' },
  { name: 'Boring where it counts.', text: 'Proven databases and plain infrastructure under the new parts, so the new parts are the only risk.' },
];

export const contact = {
  interests: ['AI agents or LLM product', 'Cloud and DevOps', 'Backend and APIs', 'Web or mobile app', 'Data platform', 'Security', 'Something else'],
  next: [
    'We reply within one working day.', // placeholder: true
    'A 30 minute call to understand the problem.',
    'A written plan and estimate, yours to keep either way.',
  ],
};
