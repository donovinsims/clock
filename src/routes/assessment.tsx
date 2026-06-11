import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, Lede } from "@/components/site/Section";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { OFFER } from "@/lib/site";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Revenue Leak Audit — Reserve Beta Access | Clockout" },
      {
        name: "description",
        content:
          "$497 all-in for a full revenue leak audit + implementation build. 3 beta spots available. 10 hrs/week back in 30 days or I keep working.",
      },
      { property: "og:title", content: "Revenue Leak Audit — Reserve Beta Access | Clockout" },
      {
        property: "og:description",
        content: "$497 all-in for a full revenue leak audit + implementation build. 3 beta spots. 10 hrs/week back in 30 days or I keep working. Free.",
      },
      { property: "og:url", content: fullUrl("/assessment") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/assessment") }],
  }),
  component: Assessment,
});

const TALLY_SRC =
  "https://tally.so/embed/RGVJ1J?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

function Assessment() {
  // Load Tally's embed script so the iframe auto-resizes to content height.
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://tally.so/widgets/embed.js"]',
    );
    const load = () => {
      // @ts-expect-error injected by Tally
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    };
    if (existing) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.async = true;
    s.onload = load;
    document.body.appendChild(s);
  }, []);

  return (
    <SiteLayout>
      <Section>
        <Eyebrow>BETA OFFER — 3 SPOTS REMAINING</Eyebrow>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight">
          $497 all-in.
          <br />
          Audit + full implementation.
        </h1>
        <div className="mt-4">
          <GuaranteeBadge />
        </div>
        <Lede>
          Tell us about your business. We&apos;ll run a structured audit of your funnel, ops, and
          follow-up. You&apos;ll get a written report with quantified leaks — and the full
          automation build installed in your stack. Audit, build, handover. Normally $1,494.
        </Lede>

        <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Tally form — dynamic height via data-tally-src + embed script */}
          <div className="rounded-3xl border border-border bg-card p-4 md:p-6">
            <iframe
              data-tally-src={TALLY_SRC}
              loading="lazy"
              width="100%"
              height="280"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Revenue Leak Audit intake"
              style={{ background: "transparent", border: 0, display: "block" }}
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="op-label text-clay">What you get</div>
              <ul className="mt-4 space-y-3 text-base">
                <li>— Full audit: every leak quantified in dollars (48 hrs)</li>
                <li>— Complete automation build installed in your stack (7 days)</li>
                <li>— Docs, training, access — you own everything outright</li>
                <li>— Before/after case study I can publish</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="op-label text-clay">The deal</div>
              <ul className="mt-4 space-y-3 text-base">
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-signal">$497</span>
                  <span>all-in (normally $1,494)</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-signal">3 SPOTS</span>
                  <span>beta pricing — next is $1,494</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-signal">30 DAYS</span>
                  <span>or 10 hrs/week back, free</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
