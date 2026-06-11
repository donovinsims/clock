type Step = { title: string; body: string };
type Automation = { title: string; body: string };
type Stat = { value: string; label: string };

export type VerticalContent = {
  slug: string;
  name: string;
  hero: string;
  heroLede: string;
  painTitle: string;
  pains: string[];
  steps: Step[];
  automations: Automation[];
  proof: { headline: string; body: string; stats: Stat[] };
};

export const VERTICAL_CONTENT: Record<string, VerticalContent> = {
  hvac: {
    slug: "hvac",
    name: "HVAC",
    hero: "Every missed call is a $400 ticket walking next door.",
    heroLede:
      "We build the dispatch, follow-up, and review systems that turn your phone into a real revenue channel — without adding a single person to payroll.",
    painTitle: "What's quietly costing you a truck a month.",
    pains: [
      "After-hours calls hit voicemail. By morning, the customer already called your competitor.",
      "Quotes go out and disappear. No one chases. The job goes to whoever followed up first.",
      "Techs forget to ask for the review. Your Google rank slips. Lead cost climbs.",
      "Maintenance customers churn silently because no one ever called to schedule the spring tune-up.",
    ],
    steps: [
      {
        title: "Audit",
        body: "We trace a real call through your business — phone tree, CRM, dispatch, invoice — and find every drop-off.",
      },
      {
        title: "Build",
        body: "We install an AI front desk, missed-call rescue, quote follow-ups, and review pipelines into your existing stack.",
      },
      {
        title: "Handover",
        body: "You own every piece. Logins, docs, workflows. We train your office manager in one session.",
      },
    ],
    automations: [
      {
        title: "24/7 AI front desk",
        body: "Answers, qualifies, books, and dispatches based on your real schedule.",
      },
      {
        title: "Missed-call rescue",
        body: "Texts back within 30 seconds with a booking link and ETA.",
      },
      {
        title: "Quote follow-up engine",
        body: "Multi-touch SMS + email sequence that recovers 20–35% of unsigned quotes.",
      },
      {
        title: "Review pipeline",
        body: "Auto-triggers after job completion. Routes 5-star to Google, anything less to you privately.",
      },
      {
        title: "Tune-up reactivation",
        body: "Wakes up dormant maintenance customers two weeks before season hits.",
      },
      {
        title: "Tech dispatch dashboard",
        body: "Live job board with auto-routing and per-tech revenue tracking.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "I ran Product Operations at Uber for major events across the US and Canada — venues doing 50,000+ people, hundreds of drivers, real-time dispatch, and zero margin for process failure. The after-hours missed call problem, the quote follow-up vacuum, the maintenance customer who churns because nobody called — I've seen all of these at a scale that makes your operation look simple. I know exactly where they break and exactly how to fix them. I haven't fixed them for a Rockford HVAC shop yet. That's the honest answer. But I'm building my first three case studies in Northern Illinois this quarter, and one of them can be yours. You get the full build — audit, automation stack, handover — at the beta rate. I get the documented result. Your shop becomes the proof.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
  roofing: {
    slug: "roofing",
    name: "Roofing",
    hero: "Speed-to-lead wins roofing. We make you the first one out the door.",
    heroLede:
      "From storm-chase leads to insurance follow-ups, we build the systems that get your name in front of the homeowner before three other roofers do.",
    painTitle: "Where roofing money goes to die.",
    pains: [
      "A lead form fills out at 9pm. You see it at 11am. They already signed with someone else.",
      "Insurance adjusters take weeks. Your homeowner forgets you ever quoted them.",
      "Canvassers knock 200 doors and nothing makes it back to a CRM.",
      "Past customers refer you, and nobody ever sends them a thank-you or a check.",
    ],
    steps: [
      {
        title: "Audit",
        body: "We trace your funnel from storm map to signed contract and quantify every gap in dollars.",
      },
      {
        title: "Build",
        body: "We install AI lead response, claim tracking, canvasser logging, and referral payouts.",
      },
      {
        title: "Handover",
        body: "Crews, sales, and ops trained in one afternoon. You own every workflow.",
      },
    ],
    automations: [
      {
        title: "60-second lead response",
        body: "AI texts, qualifies, and books an inspection before the lead cools.",
      },
      {
        title: "Insurance claim tracker",
        body: "Auto-updates the homeowner at every adjuster milestone so you stay the trusted contact.",
      },
      {
        title: "Canvasser CRM",
        body: "One-tap door logging from the field, auto-routed to a sales follow-up sequence.",
      },
      {
        title: "Storm radar to ad spend",
        body: "Triggers geo-fenced ads and door routes off real weather events.",
      },
      {
        title: "Referral payout system",
        body: "Tracks, attributes, and pays referrers automatically.",
      },
      {
        title: "Production status portal",
        body: "Homeowners see real-time progress without calling the office.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "Lead response is a systems problem. So is insurance claim tracking, canvasser logging, and referral attribution. These are the same class of operational failures I spent years diagnosing at Uber — where a two-minute delay in response during a live event means a real revenue hit, in real time. I haven't run the after-storm sprint for a roofing company yet. That's the honest answer. What I have done is map exactly how these leaks behave at operational scale, and I know how to close them. I'm taking on three roofing companies in the Northern Illinois/Southern Wisconsin corridor this quarter as my first case studies. You get the full build at beta pricing. I get the documented results to publish. The next roofer pays $1,494. You pay $497.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
  plumbing: {
    slug: "plumbing",
    name: "Plumbing",
    hero: "When the pipe bursts at 2am, you get the call. Not the other guy.",
    heroLede:
      "Emergency triage, after-hours dispatch, and reactivation systems built for plumbing shops that want every panic call routed straight to a truck.",
    painTitle: "What's flooding your margin.",
    pains: [
      "Emergency calls roll to voicemail. Customers call the next number on Google.",
      "Quote-only jobs sit in a notebook and never get followed up.",
      "Old customers call competitors because you never reminded them you exist.",
      "Techs don't ask for reviews. Lead acquisition cost keeps climbing.",
    ],
    steps: [
      {
        title: "Audit",
        body: "We pressure-test your phone tree, dispatch, and follow-up. Every leak gets a dollar amount.",
      },
      {
        title: "Build",
        body: "AI receptionist, on-call rotation logic, and reactivation flows installed into your CRM.",
      },
      { title: "Handover", body: "Trained, documented, owned. No monthly fee." },
    ],
    automations: [
      {
        title: "After-hours AI dispatch",
        body: "Routes emergencies to the on-call tech in 30 seconds, with confirmed ETA texted to the homeowner.",
      },
      {
        title: "Quote-to-job recovery",
        body: "Three-touch SMS + email flow that pulls 25%+ of unsigned quotes back to the schedule.",
      },
      {
        title: "Past-customer reactivation",
        body: "Wakes up customers who haven't called in 12+ months with a maintenance offer.",
      },
      {
        title: "Review engine",
        body: "Triggers a friction-free Google review request the moment payment clears.",
      },
      {
        title: "Permit + inspection tracker",
        body: "Removes the office back-and-forth on every permitted job.",
      },
      {
        title: "Tech KPI dashboard",
        body: "Per-tech revenue, close rate, and average ticket — updated daily.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "Emergency triage, after-hours dispatch, and customer reactivation — these are operational systems problems. Every one of them follows the same pattern I diagnosed at Uber: a trigger happens (pipe bursts), the system fails to route it correctly (voicemail), and revenue walks out the door. I don't have a plumbing shop case study yet. That's the honest answer. But I know exactly how to build these triggers because I've built them at 100x the volume. I'm looking for three plumbing companies in Northern Illinois for my first case studies. You get the full audit + build + handover at beta pricing. I get the documented result to publish.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
  electrical: {
    slug: "electrical",
    name: "Electrical",
    hero: "Cleaner schedules. Cleaner invoices. Quieter phone.",
    heroLede:
      "Quote follow-ups, permit tracking, and reactivation systems for residential electricians who would rather be on the truck than on the phone.",
    painTitle: "What's grounding your growth.",
    pains: [
      "Quotes sit unread in the homeowner's inbox. No one follows up. No one closes.",
      "Permits and inspections eat hours of admin you don't bill for.",
      "Service-call customers never hear from you again until they need a panel upgrade — and call someone else.",
      "Reviews trickle in randomly. Your AdWords cost climbs because organic isn't carrying weight.",
    ],
    steps: [
      { title: "Audit", body: "We map your quote-to-cash flow and the admin tax on every job." },
      {
        title: "Build",
        body: "AI quote follow-up, permit tracking, and reactivation sequences shipped into your CRM.",
      },
      { title: "Handover", body: "Your team owns it. No monthly fees. No license fee." },
    ],
    automations: [
      {
        title: "Quote follow-up sequence",
        body: "Multi-touch SMS + email that recovers 20–30% of unsigned bids.",
      },
      {
        title: "Permit + inspection tracker",
        body: "Tracks every permit, nudges the inspector, updates the homeowner.",
      },
      {
        title: "Service-to-upgrade nurture",
        body: "Converts small repair jobs into panel, EV charger, and rewire upgrades.",
      },
      {
        title: "Review automation",
        body: "Right job, right tech, right time — 5-star Google reviews on autopilot.",
      },
      {
        title: "Estimator cheat sheet",
        body: "AI-assisted bid generation from job notes and photos.",
      },
      {
        title: "Subcontractor coordination",
        body: "Auto-schedules drywallers, painters, and inspectors around your crew.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "Quote follow-ups, permit tracking, customer reactivation — these are coordination failures. The quote sits in an inbox, the permit gets delayed, the customer never hears about a panel upgrade. I've seen this exact failure pattern play out across hundreds of operational workflows at Uber and Walgreens. I haven't solved it for an electrical shop yet. I'm being honest about that. But I know exactly where the gaps are and how to wire the fix. I'm building my first three case studies this quarter with electricians in the Northern Illinois/Southern Wisconsin area. One of them can be you. Beta pricing, full build, time-back guarantee.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
  landscaping: {
    slug: "landscaping",
    name: "Landscaping",
    hero: "Recurring revenue, on autopilot. Even in the off-season.",
    heroLede:
      "Renewal sequences, route-density tools, and proposal automations that turn one-off mows into multi-year contracts.",
    painTitle: "What's overgrowing your margin.",
    pains: [
      "Maintenance customers don't renew because no one asked at the right time.",
      "Routes are inefficient — your crews drive more than they cut.",
      "Proposals take two days to write. The customer signed with someone else by Tuesday.",
      "Spring rush hits and you're drowning in inquiries you can't qualify fast enough.",
    ],
    steps: [
      {
        title: "Audit",
        body: "We look at your renewal rate, route density, and proposal turnaround — and price every gap.",
      },
      {
        title: "Build",
        body: "Auto-renewals, AI proposal drafts, intake routing, and route optimization installed.",
      },
      { title: "Handover", body: "Trained, owned, off our books." },
    ],
    automations: [
      {
        title: "Renewal sequence",
        body: "Multi-touch flow that locks in next-season contracts in fall, not spring.",
      },
      {
        title: "AI proposal generator",
        body: "Job notes + property photos in, signed proposal link out — in minutes.",
      },
      {
        title: "Spring rush intake",
        body: "AI qualifier sorts price shoppers from real buyers before your phone rings.",
      },
      {
        title: "Route density optimizer",
        body: "Recommends crew routes that cut drive time 15–25%.",
      },
      {
        title: "Upsell engine",
        body: "Triggers seasonal add-ons (aeration, mulch, leaf cleanup) to the right customers.",
      },
      {
        title: "Crew time tracking",
        body: "GPS-verified hours per property — no more guessing at job costing.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "Renewal sequences, route density, proposal turnaround — these are predictable operational motions. At Uber, we ran the same math on driver supply: who's about to churn, where's the gap, how fast can you respond. A landscaping renewal flow is the same loop, just different numbers. I don't have a landscaping case study yet. Honest. But I've mapped exactly how these repeat-revenue systems work at scale, and I know how to build them for a local operator. I'm taking three landscaping companies in the Chicago corridor this season. Beta rate, full build, handover included. You own the system.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
  cleaning: {
    slug: "cleaning",
    name: "Cleaning",
    hero: "Fewer no-shows. More repeat clients. Cleaner books.",
    heroLede:
      "Booking confirmations, churn-saver flows, and post-clean review engines for residential and commercial cleaning companies.",
    painTitle: "What's wiping out your margin.",
    pains: [
      "Bookings ghost. Crews show up to locked doors. You eat the drive.",
      "Recurring clients quietly cancel because no one ever asked how the last clean went.",
      "New leads sit in your inbox until they hire someone faster.",
      "Reviews come in only when a client is angry.",
    ],
    steps: [
      {
        title: "Audit",
        body: "We measure no-show rate, churn, and reply time — and quantify what each one costs you.",
      },
      {
        title: "Build",
        body: "Confirmations, churn rescue, instant intake, and review flows installed in your booking tool.",
      },
      { title: "Handover", body: "Your office owns it from day one." },
    ],
    automations: [
      {
        title: "Three-touch confirmation",
        body: "Cuts no-shows by 60–80% without annoying your clients.",
      },
      {
        title: "Churn-saver flow",
        body: "Detects skipped cleans and triggers a personal save offer before the cancel email.",
      },
      {
        title: "Instant intake bot",
        body: "Quotes, qualifies, and books new clients in under five minutes — even at 11pm.",
      },
      {
        title: "Post-clean review engine",
        body: "Routes happy clients to Google, unhappy clients straight to you.",
      },
      {
        title: "Recurring upsell",
        body: "Adds seasonal deep-cleans, windows, and carpets to the right route.",
      },
      {
        title: "Supply + payroll dashboard",
        body: "Real numbers on cost-per-clean, per-crew, per-route.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "No-shows, churn, slow lead response — these aren't customer problems, they're systems gaps. At Walgreens, we ran real-time operational tracking on thousands of locations. The same principles apply to a cleaning route: when confirmation fails, when follow-up lapses, when recovery isn't triggered. I haven't built this for a cleaning company yet. That's the truth. But I can show you exactly where your drop-offs are in a single 48-hour audit. I'm looking for three cleaning companies in the Rockford/Chicago area for case studies. You get the build at beta pricing. I get the documented win.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
  "property-management": {
    slug: "property-management",
    name: "Property Management",
    hero: "Tenants handled. Owners updated. Nothing dropped between them.",
    heroLede:
      "Maintenance triage, owner reporting, and renewal automations built for PM companies that grew faster than their inbox could handle.",
    painTitle: "The PM tax nobody talks about.",
    pains: [
      "Tenants flood maintenance requests through three different channels. Half get lost.",
      "Owners want monthly reports. You spend a weekend writing them.",
      "Renewals come up and nobody owns the conversation until it's already late.",
      "Vacancies sit longer than they should because the listing flow is manual.",
    ],
    steps: [
      {
        title: "Audit",
        body: "We map your tenant, owner, and vendor flows and find every coordination gap.",
      },
      {
        title: "Build",
        body: "AI triage, owner reports, renewal nudges, and listing automations installed in your stack.",
      },
      { title: "Handover", body: "Property managers trained and shipping in one week." },
    ],
    automations: [
      {
        title: "Maintenance triage AI",
        body: "Categorizes, prioritizes, and routes requests to the right vendor 24/7.",
      },
      {
        title: "Owner reporting engine",
        body: "Auto-generates monthly statements and portfolio summaries — no spreadsheets.",
      },
      {
        title: "Renewal pipeline",
        body: "Tracks every lease end date, nudges tenants 90/60/30 days out, surfaces at-risk units.",
      },
      {
        title: "Listing + showing automator",
        body: "Syndicates listings, schedules showings, and pre-qualifies leads before you call back.",
      },
      {
        title: "Vendor SLA monitor",
        body: "Auto-escalates jobs that miss promised completion windows.",
      },
      {
        title: "Rent collection follow-up",
        body: "Multi-channel polite-to-firm cadence that recovers more, faster.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "Maintenance triage across three channels, owner reports that take weekends, renewals nobody owns — these are coordination failures that scale with every new door. At Uber, my job was eliminating these exact bottlenecks across event operations handling 50,000+ people. The systems thinking transfers directly. I haven't solved it for a PM company yet. Being straight with you. But I know exactly how to build a triage, reporting, and renewal pipeline because I've built bigger versions at scale. Three PM companies in Northern Illinois get the beta build this quarter. $497 all-in. The system is yours to keep.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    hero: "Your follow-up problem, finally solved.",
    heroLede:
      "Lead nurture, listing automations, and transaction coordination built for producing agents who refuse to let leads die in a CRM nobody opens.",
    painTitle: "Where deals quietly slip away.",
    pains: [
      "Leads from Zillow, your site, and open houses scatter into different inboxes. Half never get worked.",
      "Past clients don't hear from you for 18 months. They use someone else for the next house.",
      "Listing prep — photos, MLS, social — eats two days you should be selling.",
      "Transaction coordination is a Google Doc, a spreadsheet, and a prayer.",
    ],
    steps: [
      {
        title: "Audit",
        body: "We trace your lead-to-closed-deal funnel and price every place a lead can fall out.",
      },
      {
        title: "Build",
        body: "AI lead nurture, listing pipelines, and TC workflows installed across your stack.",
      },
      { title: "Handover", body: "You own everything. Your TC can run it solo." },
    ],
    automations: [
      {
        title: "Lead nurture brain",
        body: "Personalized SMS + email cadence tuned to lead source, price band, and timeline.",
      },
      {
        title: "Past-client touch system",
        body: "Quarterly check-ins, anniversary notes, and market updates without you lifting a finger.",
      },
      {
        title: "Listing launch playbook",
        body: "From signed agreement to live MLS + social + email in under 24 hours.",
      },
      {
        title: "Showing feedback loop",
        body: "Auto-requests feedback from buyer agents and summarizes it for the seller.",
      },
      {
        title: "Transaction coordinator OS",
        body: "Every deal, every milestone, every doc — tracked and nudged automatically.",
      },
      {
        title: "Sphere CRM hygiene",
        body: "Keeps your database clean, tagged, and segmented without manual upkeep.",
      },
    ],
    proof: {
      headline: "Why I Know Where Your Leaks Are",
      body: "Lead nurture across scattered sources, past-client touch, listing logistics — real estate has the same multi-channel fragmentation problem I spent years solving at scale. A lead from Zillow goes to one inbox, a lead from your website to another, the open house sign-in sheet never makes it to the CRM. The fix isn't more tools. It's a coordination layer that ties them together. I haven't built this for an agent yet. Honest. But I know exactly how to wire it because the pattern — fragmented signal into unified response — is the same problem Uber solved for real-time dispatch. Three agents get the beta build this quarter. Full audit, full automation stack, handover. $497.",
      stats: [
        { value: "6+ YRS", label: "Uber · Walgreens operations" },
        { value: "3", label: "beta spots remaining" },
        { value: "$497", label: "all-in, normally $1,494" },
        { value: "30 DAYS", label: "or 10 hrs/wk back, free" },
      ],
    },
  },
};
