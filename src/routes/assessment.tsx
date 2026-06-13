import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, Lede } from "@/components/site/Section";
import { GuaranteeBadge } from "@/components/site/GuaranteeBadge";
import { fullUrl } from "@/lib/seo";
import { ArrowRight, Search, Wrench, BookOpen, BarChart3 } from "lucide-react";

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
      ;(window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally?.loadEmbeds();
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
        <h1 className="font-display text-4xl md:text-7xl">
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

        {/* Process progress */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs">
          <div className="flex flex-col items-center gap-1">
            <span className="rounded-full bg-signal/10 px-3 py-1 font-mono text-signal">AUDIT</span>
            <span className="text-ink/50">48 hrs</span>
          </div>
          <ArrowRight className="mt-5 h-3 w-3 text-ink/20" />
          <div className="flex flex-col items-center gap-1">
            <span className="rounded-full bg-signal/10 px-3 py-1 font-mono text-signal">BUILD</span>
            <span className="text-ink/50">7 days</span>
          </div>
          <ArrowRight className="mt-5 h-3 w-3 text-ink/20" />
          <div className="flex flex-col items-center gap-1">
            <span className="rounded-full bg-signal/10 px-3 py-1 font-mono text-signal">HANDOVER</span>
            <span className="text-ink/50">full ownership</span>
          </div>
        </div>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Tally form — signal-tinted container draws eye to the conversion action */}
          <div className="rounded-3xl border border-signal/20 bg-card p-4 md:p-6">
            <iframe
              data-tally-src={TALLY_SRC}
              loading="lazy"
              width="100%"
              height="600"
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
              <ul className="mt-5 space-y-4 text-base">
                <li className="flex items-start gap-3">
                  <Search className="mt-0.5 h-4 w-4 shrink-0 text-signal/70" aria-hidden="true" />
                  Full audit: every leak quantified in dollars
                </li>
                <li className="flex items-start gap-3">
                  <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-signal/70" aria-hidden="true" />
                  Complete automation build installed in your stack
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-signal/70" aria-hidden="true" />
                  Docs, training, access — you own everything outright
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-signal/70" aria-hidden="true" />
                  Before/after case study I can publish
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-signal/20 bg-signal/5 p-8">
              <div className="op-label text-signal">The deal</div>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-5xl tracking-tight text-signal">$497</span>
                <span className="text-sm text-ink/40 line-through">$1,494</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-signal">3 SPOTS</span>
                  <span className="text-ink/60">at beta pricing</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="op-label text-signal">30 DAYS</span>
                  <span className="text-ink/60">or 10 hrs/week back, free</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
