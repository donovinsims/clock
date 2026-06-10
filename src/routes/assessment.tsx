import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, Lede } from "@/components/site/Section";
import { OFFER } from "@/lib/site";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Book the Revenue Leak Audit — Clockout" },
      {
        name: "description",
        content:
          "$497. 48-hour report. Refund if we don't find $10K in fixable leaks. Book your Revenue Leak Audit.",
      },
      { property: "og:title", content: "Book the Revenue Leak Audit — Clockout" },
      {
        property: "og:description",
        content: "$497. 48-hour report. Refund if we don't find $10K in fixable leaks.",
      },
      { property: "og:url", content: "/assessment" },
    ],
    links: [{ rel: "canonical", href: "/assessment" }],
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
        <Eyebrow>The Revenue Leak Audit</Eyebrow>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight">
          $497. 48 hours.
          <br />
          Refunded if we can&apos;t find $10K.
        </h1>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/5 px-3 py-1 font-mono text-xs tracking-wider text-signal uppercase">
            ✓ Guaranteed
          </span>
        </div>
        <Lede>
          Tell us about your business. We&apos;ll run a structured audit of your funnel, ops, and
          follow-up. You&apos;ll get a written report with quantified leaks and the exact fixes —
          yours to keep, with or without us.
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
              <div className="op-label text-[0.7rem] text-clay">What you get</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>— A 48-hour written report</li>
                <li>— Quantified leaks in dollars</li>
                <li>— Prioritized fix list</li>
                <li>— Loom walkthrough from our team</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="op-label text-[0.7rem] text-clay">The deal</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-[0.65rem] text-signal">$497</span>
                  <span>flat — no retainer, ever</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-[0.65rem] text-signal">48 HRS</span>
                  <span>written report turnaround</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-[0.65rem] text-signal">YOURS</span>
                  <span>you own every fix we find</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
