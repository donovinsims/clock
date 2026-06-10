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
      headline: "One Dallas HVAC shop stopped losing 40% of after-hours calls in week one.",
      body: "Before: 18 missed calls a week, 4-day quote follow-up gap, 3.9-star Google. After: zero missed calls, 6-hour follow-up, 4.7 stars and rising.",
      stats: [
        { value: "+38%", label: "booked jobs / mo" },
        { value: "0", label: "missed calls" },
        { value: "+0.8★", label: "Google rating in 90d" },
        { value: "$14K", label: "leaks fixed in week 1" },
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
      headline:
        "A Florida roofer closed 22% more inspections after we cut lead response to 47 seconds.",
      body: "Before: 4-hour average response, 14% set rate. After: under-a-minute response, 38% set rate, and a sales team that stopped chasing dead leads.",
      stats: [
        { value: "47s", label: "avg lead response" },
        { value: "+22%", label: "inspections set" },
        { value: "3x", label: "referral revenue" },
        { value: "$92K", label: "first-quarter lift" },
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
      headline:
        "An Atlanta plumbing shop added $26K in monthly emergency revenue without hiring a dispatcher.",
      body: "Before: voicemail after 6pm, 11 missed calls/week. After: zero misses, average emergency dispatch under 4 minutes.",
      stats: [
        { value: "+$26K", label: "monthly emergency revenue" },
        { value: "4 min", label: "avg emergency dispatch" },
        { value: "31%", label: "quote recovery rate" },
        { value: "0", label: "new hires required" },
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
      { title: "Handover", body: "Your team owns it. No retainer. No license fee." },
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
      headline: "A residential electrical shop turned a 14% close rate into 31% in 60 days.",
      body: "Before: bids sent and forgotten. After: 5-touch follow-up cadence, automated permit tracking, and an estimator who finally has weekends back.",
      stats: [
        { value: "31%", label: "close rate" },
        { value: "+2.1x", label: "upgrade revenue" },
        { value: "9 hrs", label: "admin saved / wk" },
        { value: "4.9★", label: "Google rating" },
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
      headline: "A Midwest landscaping company locked in 78% of maintenance renewals before March.",
      body: "Before: 41% renewal, scrambling in April. After: 78% locked by February with a calendar planned through fall.",
      stats: [
        { value: "78%", label: "renewal rate" },
        { value: "–22%", label: "windshield time" },
        { value: "+$140K", label: "spring contracts" },
        { value: "1 day", label: "proposal turnaround" },
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
      headline: "A residential cleaning company killed 70% of no-shows in three weeks.",
      body: "Before: 11% no-show, 4.2 stars, churn nobody could explain. After: 3% no-show, 4.8 stars, and a churn-save flow that pays for itself weekly.",
      stats: [
        { value: "–70%", label: "no-show rate" },
        { value: "+18%", label: "recurring revenue" },
        { value: "4.8★", label: "Google rating" },
        { value: "3 wks", label: "to full ROI" },
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
      headline:
        "A 600-door PM company cut maintenance response time from 18 hours to under 90 minutes.",
      body: "Before: tickets across email, text, and phone. After: every request triaged, categorized, and routed in under 90 seconds. Owners get reports the first of every month, automatically.",
      stats: [
        { value: "90 min", label: "avg response time" },
        { value: "100%", label: "owner reports on-time" },
        { value: "+11d", label: "faster unit turnover" },
        { value: "92%", label: "renewal rate" },
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
      headline: "A solo agent doubled GCI without hiring a single assistant.",
      body: "Before: 200+ leads ignored a quarter. After: every lead worked for 90 days minimum, every past client touched quarterly, every listing live in a day.",
      stats: [
        { value: "2x", label: "GCI in 12 months" },
        { value: "+34%", label: "repeat / referral" },
        { value: "1 day", label: "listing to live" },
        { value: "0", label: "assistants hired" },
      ],
    },
  },
};
