export const SITE = {
  name: "Clockout",
  tagline: "Run better, not busier.",
  description:
    "Done-for-you AI automation for owner-led service businesses. One-time builds. You own the system.",
  bookingUrl: "#book", // TODO: real booking link (Cal.com / SavvyCal)
  email: "hello@clockout.co", // TODO: real email
};

export const OFFER = {
  audit: {
    name: "Revenue Leak Audit",
    price: "$497",
    turnaround: "48-hour report",
    outcome: "We map and quantify the leaks costing you bookings, jobs, and margin.",
    guarantee:
      "If we don't surface at least $10K in fixable leaks, you get a full refund. No back-and-forth.",
    cta: "Book the audit",
  },
  build: {
    name: "Done-for-you build",
    price: "Starting at $997",
    turnaround: "Live in days, not quarters",
    outcome: "We build, install, and hand it over. You own the system outright.",
  },
};

export const CTA = {
  primary: "Book the audit",
  secondary: "See how it works",
  build: "Start a build",
};

export const VERTICALS = [
  {
    slug: "hvac",
    name: "HVAC",
    short: "Stop losing calls to voicemail.",
    blurb:
      "Same-day dispatch, missed-call rescue, and review pipelines built for residential HVAC.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    short: "Turn storm leads into signed jobs.",
    blurb: "Speed-to-lead automations, insurance follow-ups, and canvasser tracking for roofers.",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    short: "Emergency calls answered before the competitor's.",
    blurb: "After-hours triage, automated dispatch, and reactivation flows for plumbing shops.",
  },
  {
    slug: "electrical",
    name: "Electrical",
    short: "Cleaner schedules. Cleaner invoices.",
    blurb:
      "Quote follow-ups, permit tracking, and customer reactivation for residential electricians.",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    short: "Recurring revenue, on autopilot.",
    blurb:
      "Seasonal renewal sequences, route-density tools, and proposal automations for landscapers.",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    short: "Fewer no-shows. More repeat clients.",
    blurb:
      "Booking confirmations, churn-saver flows, and post-clean review engines for cleaning companies.",
  },
  {
    slug: "property-management",
    name: "Property Management",
    short: "Tenants handled. Owners updated. Nothing dropped.",
    blurb:
      "Maintenance triage, owner reports, and renewal automations for residential and commercial PMs.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Your follow-up problem, solved.",
    blurb:
      "Lead nurture, listing automations, and transaction coordination built for producing agents.",
  },
] as const;

export type Vertical = (typeof VERTICALS)[number];

export const NAV = [
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Operator OS", href: "/operator-os" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
