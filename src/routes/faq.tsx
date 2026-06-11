import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Clockout" },
      {
        name: "description",
        content:
          "Honest answers to the real questions trade owners ask before bringing in an automation partner: pricing, trust, team adoption, lock-in, and what happens after the build.",
      },
      { property: "og:title", content: "FAQ — Clockout" },
      {
        property: "og:description",
        content: "Honest answers to real questions trade owners ask before bringing in a partner. Pricing, trust, adoption, lock-in — no fluff.",
      },
      { property: "og:url", content: fullUrl("/faq") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/faq") }],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  {
    q: "What qualifies you to work on my business? You don't come from the trades.",
    a: "Fair question. You should be skeptical. I've spent over 10,000 hours using and implementing AI systems — building automations that handle millions of operations at massive scale. Not a side project. That was my career. The operational patterns I learned — the ones that prevent dropped balls, missed follow-ups, and silent failures — are the exact patterns that are broken in your business. The trades just haven't had access to that level of ops thinking. That's what Clockout brings. I don't need to know how to fix a furnace. I need to know how to build a system that makes sure you never miss another furnace lead.",
  },
  {
    q: "I've been sold 'systems' before. Usually it's a CRM I don't use. What's different here?",
    a: "You're right to be skeptical. Most 'system' sales are tools looking for a problem. Someone sells you a CRM, hands you the login, and you're stuck configuring it. Clockout works backwards: we audit your actual operations first — every missed call, every late quote, every lead that goes dark — and we only build automations that directly fix those specific leaks. The output isn't a login you have to learn. It's your existing tools working better. If anything, you'll notice less change, not more.",
  },
  {
    q: "I'm already working 60-hour weeks. I don't have time to learn anything new.",
    a: "That's exactly why Clockout exists. You're paying for your time in ways most owners never calculate. Every hour you spend quoting, chasing crews, or doing data entry is an hour you're not spending on growth or business development. Our goal isn't to give you another tool to learn — it's to give you back hours you didn't know you were losing. The audit takes three days of your attention (a few hours total). After that, we do the work. You don't need to learn a system because the system fixes the gaps you already have.",
  },
  {
    q: "My crew barely uses the CRM we have. How do I get them to adopt this?",
    a: "That's actually the best reason to work with us. CRM adoption fails because CRMs are built for management oversight, not for the person doing the work. The tech forced your guys to spend more time in front of a screen instead of less. Clockout automations are invisible by design. Your dispatcher doesn't 'use' the system — she gets a text when a lead comes in instead of having to check the CRM. Your field tech doesn't 'log' the job completion — they text a photo and the system updates the ticket. If your team has to log into something new, we designed it wrong.",
  },
  {
    q: "What happens six months from now when something breaks or needs changing?",
    a: "Three things. One: we document everything. Full wiring diagrams, every connection documented — you're not dependent on us. Two: we hand over all access. Every login, every API key, every automation — it's in your tools, owned by you. Three: if you want ongoing support, we can do hourly blocks or a lightweight support arrangement. But it's optional. There is no forced relationship. Most clients come back for changes anyway, but nobody wants to be held hostage for basic maintenance.",
  },
  {
    q: "I don't need automation — I need more jobs. Can you actually get me leads?",
    a: "You probably have enough leads coming in. The problem is what happens to them. Trade businesses typically lose 15-30% of revenue to operational leaks: missed calls, quotes that go out late, leads nobody follows up on. Fixing those leaks is the fastest way to 'get more jobs' without spending a dollar on marketing. The data on lead response is consistent: cutting from 24 hours to 5 minutes typically doubles close rate. The leads were already there. They were falling through the gap.",
  },
  {
    q: "Give me a real price. Not a 'starting at' or 'it depends.'",
    a: "Fair. The beta price is $497 all-in — audit and full build included. After the three beta spots fill, standard pricing is $1,494. Same deliverables. Same guarantee. The price is the only difference.",
  },
  {
    q: "How do I know you won't lock me into a monthly subscription after I'm dependent on your system?",
    a: "You don't have to take my word for it — verify. Every automation is built inside tools you already own or that we deploy under your account. Every API key is yours. Every credential is yours. If you decide tomorrow you want nothing to do with Clockout, all the work we did keeps running. There's no kill switch, no 'license expired' popup, no data hostage. We don't charge for access to your own systems. This isn't a SaaS. It's a build.",
  },
  {
    q: "I've tried CRMs before. They just become expensive Rolodexes nobody updates. What makes your approach different?",
    a: "CRMs fail because they require input. Data entry is someone's job, and that someone is usually the field tech who hates paperwork. The automation approach works because it removes input. When a call comes in, it's logged automatically. When a tech finishes a job, a photo and a text update the ticket. When a quote goes out, a follow-up is scheduled automatically. Nobody updates anything. The system captures what's already happening. That's the fundamental difference: we stop asking people to be data entry clerks.",
  },
  {
    q: "I'm in Belvidere/Freeport/Loves Park. How does this work if you're remote?",
    a: "I'm based in Roscoe, so I'm already in your backyard. My territory covers the whole Rockford corridor — Roscoe, Rockford, Loves Park, Belvidere, Freeport, South Beloit, Janesville, the entire Northern Illinois / Southern Wisconsin region. If you want to sit down in person, that's an option. But most of the audit is done from the data: your call logs, CRM, dispatch software already tell the story. We review those remotely or in person, hop on a few calls to clarify workflows, then deliver the report. For builds, we connect to your tools, configure in staging, test, deploy. I'm happy to come to your shop if it helps. But if you'd rather I stay out of your way and just deliver results remotely, that works too.",
  },
  {
    q: "What does 'done-for-you' actually mean? Do you log into my computer?",
    a: "More or less, yes. With your permission and supervision, we access the tools you already use — CRM, dispatch, phone system, email — and configure automations directly. You watch. You approve. We train. By the end, you understand exactly what was built and how it works. If 'done-for-you' means 'someone disappears and comes back with a black box,' that's not how we operate. We're transparent about every connection, every workflow, every change.",
  },
  {
    q: "What if I don't like what you built?",
    a: "Then we fix it. The audit report serves as the blueprint — you approve the scope and price before any build work starts. If during the build something doesn't match what was agreed, we adjust at no cost. If after delivery you discover a gap we missed, we close it at no cost within 30 days. The audit-to-build workflow is designed to prevent mismatches. We scope together, build transparently, and adjust continuously.",
  },
];

function FAQPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pt-14 pb-16 md:pt-24 md:pb-24">
          <GuaranteeBadge />
          <h1 className="mt-6 font-display text-4xl md:text-7xl">
            FAQ
          </h1>
          <Lede>
            Honest answers to the questions trade owners ask before bringing in a partner.
            If something here doesn't sit right, that's a conversation worth having.
          </Lede>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group border-b border-stone-200 py-4"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-display transition-colors hover:text-ink/70">
                {faq.q}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="mt-2 text-base leading-relaxed text-ink/70">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <H2>Still have questions?</H2>
        <Lede>If I didn't cover what's actually bugging you, email me. I answer my own email.</Lede>
        <div className="mt-8">
          <CTAButton to="/contact">Get in touch</CTAButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
