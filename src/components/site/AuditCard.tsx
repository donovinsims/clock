import { CTAButton } from "./CTAButton";

export function AuditCard({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-8 md:p-10 ${
        dark ? "bg-ink text-bone border-ink" : "bg-card text-ink border-border"
      }`}
    >
      <div
        className="absolute right-0 top-0 h-40 w-40 -translate-y-10 translate-x-10 rounded-full bg-signal/40 blur-3xl"
        aria-hidden
      />
      <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <div className={`op-label ${dark ? "text-bone/60" : "text-clay"}`}>
            BETA OFFER — 3 SPOTS REMAINING
          </div>
          <h3 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
            Revenue Leak Audit + Full Implementation
          </h3>
          <p
            className={`mt-4 max-w-xl text-base md:text-lg ${dark ? "text-bone/75" : "text-muted-foreground"}`}
          >
            $497 all-in. Normally $1,494.
          </p>
          <ul className={`mt-6 grid gap-2 text-sm ${dark ? "text-bone/85" : "text-ink/80"}`}>
            <li className="flex items-start gap-2">
              <span className="op-label mt-0.5 text-signal">AUDIT</span>
              <span>Full workflow audit, leaks quantified in dollars. 48-hour report.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="op-label mt-0.5 text-signal">BUILD</span>
              <span>Complete automation build installed in your existing stack. 7 days.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="op-label mt-0.5 text-signal">HANDOVER</span>
              <span>Docs, access, training. You own everything outright.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="op-label mt-0.5 text-signal">EXCHANGE</span>
              <span>Before/after case study I can publish. One testimonial.</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <CTAButton to="/assessment" variant="primary">
            <span className="op-label">Claim a Beta Spot</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
