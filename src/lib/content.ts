import xylenceCover from "@/assets/covers/xylence.png"
import citradrCover from "@/assets/covers/citradr.png"
import rewardsCover from "@/assets/covers/rewards.png"
import hiringCover from "@/assets/covers/hiring-platform.png"

export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
]

export const skills = [
  { label: "End-to-end UX research & discovery" },
  { label: "Usability testing & experimentation" },
  { label: "Workshop and design frameworks implementation" },
  { label: "AI design workflows and prototyping (Figma + MCP)" },
  { label: "Cross-team facilitation" },
]

export type Project = {
  id: string
  title: string
  tags: string[]
  type: string
  role: string
  timeline: string
  outcome: string
  cover: string
  coverAlt: string
  caseStudyHref?: string
}

export const projects: Project[] = [
  {
    id: "xylence",
    title: "Xylence",
    tags: ["AI", "Venture capital", "Design System", "Enterprise"],
    type: "AI-native VC intelligence",
    role: "AI Product Designer",
    timeline: "2026 — Present",
    outcome: "One-line outcome: what changed and by how much.",
    cover: xylenceCover,
    coverAlt: "Xylence — intelligence for venture capital cover art",
    caseStudyHref: "/case-studies/xylence",
  },
  {
    id: "citradr",
    title: "CITradR",
    tags: ["Fintech", "Trading", "Bancking", "Testing"],
    type: "Trading platform for CI Banco",
    role: "Sr. UX Designer",
    timeline: "2024 — 2025",
    outcome: "Integrate the trading product into the super app and align it with its new design.",
    cover: citradrCover,
    coverAlt: "CITradR trading app cover art",
    caseStudyHref: "/case-studies/citradr",
  },
  {
    id: "rewards-gamification",
    title: "Rewards & Gamification",
    tags: ["Gamification", "Trading", "Bancking", "Research"],
    type: "Reward redemption flow",
    role: "Product Designer",
    timeline: "2024",
    outcome: "One-line outcome: what changed and by how much.",
    cover: rewardsCover,
    coverAlt: "Rewards & Gamification system cover art",
    caseStudyHref: "/case-studies/azteca",
  },
  {
    id: "hiring-platform",
    title: "Hiring Platform",
    tags: ["Saas", "Design System", "CRM", "Research"],
    type: "Talent management platform",
    role: "Sr. UX/UI Designer",
    timeline: "2022 — 2023",
    outcome: "One-line outcome: what changed and by how much.",
    cover: hiringCover,
    coverAlt: "Hiring Platform cover art",
  },
]

export const processSteps = [
  {
    number: "01",
    accent: "#f66a47",
    title: "Discover",
    description:
      "Understand the problem space, users, and business constraints before proposing anything.",
    deliverables: [
      "Stakeholder interviews",
      "User & field research",
      "Competitive analysis",
      "Problem framing",
    ],
  },
  {
    number: "02",
    accent: "#2e49fa",
    title: "Synthesize",
    description:
      "Turn raw research into patterns and decisions, using AI to accelerate synthesis without outsourcing judgment.",
    deliverables: [
      "AI research synthesis",
      "Insight mapping",
      "User flows",
      "Success metrics",
    ],
  },
  {
    number: "03",
    accent: "#111212",
    title: "Design",
    description:
      "Wireframes to high-fidelity UI, built on a system of components, tokens, and accessible-by-default patterns.",
    deliverables: [
      "Wireframing",
      "Design systems & tokens",
      "UX writing",
      "Accessibility (WCAG)",
    ],
  },
  {
    number: "04",
    accent: "#d4ef44",
    title: "Validate",
    description:
      "Test with real users and measure — usability sessions and A/B experiments that settle debates with evidence.",
    deliverables: [
      "Usability testing",
      "A/B testing",
      "Prototyping",
      "Data visualization",
    ],
  },
  {
    number: "05",
    accent: "#111212",
    title: "Ship & Optimize",
    description:
      "Hand off in a single loop via Figma + MCP, then keep optimizing against post-launch behavior.",
    deliverables: [
      "Figma + MCP hand-off",
      "Dev collaboration",
      "Post-launch optimization",
      "DesignOps",
    ],
  },
]

export const experience = [
  {
    period: "Mar 2026 — Present",
    company: "XYLENCE",
    role: "AI Product Designer",
    summary:
      "Built an AI-first design workflow for a B2B VC SaaS platform — from Figma+MCP straight to production-ready code, collapsing design-to-dev into one loop.",
    bullets: [
      "Pioneered an AI-first workflow generating production-ready UI code directly from Figma + MCP.",
      "Kept the MVP on track across fast-changing priorities with a real-time Kanban board.",
      "Wrote concise UX copy that turned scattered VC-intelligence data into a clear interface.",
    ],
    chips: ["Figma + MCP", "AI-assisted prototyping", "Dev/data spec writing", "Prompt engineering"],
  },
  {
    period: "Jun 2024 — Feb 2026",
    company: "MINSAIT",
    role: "Sr. UX Designer & Consultant",
    summary:
      "Ran end-to-end research, design and testing for CI Banco; led exec workshops and cut reward-flow abandonment 11.1% via A/B testing with 5,000 users.",
    bullets: [
      "Designed and implemented a DesignOps methodology across CI Banco's digital products.",
      "Facilitated executive-level workshops with financial services leadership teams.",
      "Reduced abandonment 11.1% and increased conversion 5.3% on Banco Azteca's reward flow.",
    ],
    chips: ["DesignOps", "Exec workshops", "A/B testing", "Fintech UX"],
  },
  {
    period: "Aug 2022 — Dec 2023",
    company: "ATOS (CONTRACTOR)",
    role: "Sr. UX/UI Designer",
    summary:
      "Standardized a recruitment platform and built a scalable design token system with frontend devs, lifting task completion.",
    bullets: [
      "Led the standardization of the recruitment process on a Talent Management Platform.",
      "Collaborated with frontend developers to implement design tokens and a scalable system.",
      "Designed and prototyped an interactive screening process with enhanced data visualization.",
    ],
    chips: ["Design systems & tokens", "Dev collaboration", "Data visualization", "Accessibility (WCAG)"],
  },
  {
    period: "Oct 2020 — Jul 2022",
    company: "FRUBANA",
    role: "UX/UI Designer",
    summary:
      "Designed B2B food-delivery flows for restaurant owners, grounded in field research on how small businesses purchase.",
    bullets: [
      "Optimized the platform experience for small restaurant owners.",
      "Ran end-to-end research — interviews, user flows, usability testing and prototyping.",
    ],
    chips: ["Field research", "User flows & prototyping", "B2B/marketplace UX"],
  },
  {
    period: "Jun 2016 — Jul 2020",
    company: "UTZ GROUP MEXICO",
    role: "Lead Industrial Designer",
    summary:
      "Led a 3-person design team building modular packaging across 100+ projects, driving $1M+ in first-year profit.",
    bullets: [
      "Led a team of 3 designers and implemented a Kanban system in Trello to manage progress.",
      "Created modular packaging from benchmark analysis, adapted across multiple products.",
      "Delivered more than 100 packaging projects for the automotive and food industries.",
    ],
    chips: ["Team leadership", "Benchmarking", "Modular systems", "DFM constraints"],
  },
]

export const toolGroups = [
  {
    label: "research-discovery",
    tools: [
      "UX Research",
      "User interviews",
      "Usability testing",
      "A/B testing",
      "Research synthesis",
      "Competitive analysis",
      "Problem framing",
    ],
  },
  {
    label: "ux-ui-design",
    tools: [
      "Figma",
      "FigJam",
      "Auto Layout",
      "Design systems",
      "Design tokens",
      "Prototyping",
      "Data visualization",
      "Accessibility (WCAG)",
      "UX Writing",
    ],
  },
  {
    label: "ai-first-workflow",
    tools: [
      "Claude",
      "Figma + MCP",
      "AI-assisted prototyping",
      "AI research synthesis",
      "Automated documentation",
    ],
  },
  {
    label: "process-delivery",
    tools: [
      "Design Thinking",
      "DesignOps",
      "Scrum",
      "Kanban",
      "Jira",
      "Agile project management",
      "Product Led Growth",
      "Led workshops",
    ],
  },
]

export const testimonials = [
  {
    quote:
      "Quote placeholder — a short recommendation about working together, focused on a concrete outcome and how the collaboration felt.",
    name: "Name Surname",
    role: "Role · Company",
    relationship: "Relationship placeholder",
  },
  {
    quote:
      "Quote placeholder — a short recommendation about working together, focused on a concrete outcome and how the collaboration felt.",
    name: "Name Surname",
    role: "Role · Company",
    relationship: "Relationship placeholder",
  },
]

export const contactCards = [
  {
    title: "LinkedIn",
    description: "Best place for roles, collaborations, and professional networking.",
    value: "edd-mendoza-ux ↗",
    href: "https://www.linkedin.com/in/edd-mendoza-ux",
  },
  {
    title: "Phone",
    description: "Available for calls across Mexico and remote engagements.",
    value: "55 3043 8143",
    href: "tel:+525530438143",
  },
  {
    title: "Email",
    description: "Copy my email for product design, UX research, or consulting inquiries.",
    value: "mdz.design.89@gmail.com ⧉",
    href: "mailto:mdz.design.89@gmail.com",
  },
]
