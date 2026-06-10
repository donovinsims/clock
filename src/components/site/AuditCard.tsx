import { OFFER } from "@/lib/site";
import { CTAButton } from "./CTAButton";

export function AuditCard({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-8 md:p-12 ${
        dark ? "bg-ink text-bone border-ink" : "bg-card text-ink border-border"
      }`}
    >
      <div
        className="absolute right-0 top-0 h-40 w-40 -translate-y-10 translate-x-10 rounded-full bg-signal/40 blur-3xl"
        aria-hidden
      />
      <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <div className={`op-label text-[0.7rem] ${dark ? "text-bone/60" : "text-clay"}`}>
            The offer
          </div>
          <h3 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
            {OFFER.audit.name}
          </h3>
          <p
            className={`mt-4 max-w-xl text-base md:text-lg ${dark ? "text-bone/75" : "text-muted-foreground"}`}
          >
            {OFFER.audit.outcome} {OFFER.audit.guarantee}
          </p>
          <ul className={`mt-6 grid gap-2 text-sm ${dark ? "text-bone/85" : "text-ink/80"}`}>
            <li className="flex items-baseline gap-2">
              <span className="op-label text-[0.65rem] text-signal">FLAT</span>
              <span>{OFFER.audit.price}, no retainer</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="op-label text-[0.65rem] text-signal">SHIPS</span>
              <span>{OFFER.audit.turnaround}</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="op-label text-[0.65rem] text-signal">SAFE</span>
              <span>Refund if we don&apos;t find $10K in fixable leaks</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <CTAButton to="/assessment" variant={dark ? "primary" : "primary"}>
            <span className="op-label text-[0.7rem]">Book the $497 audit</span>
          </CTAButton>
          <span className={`op-label text-[0.65rem] ${dark ? "text-bone/50" : "text-clay"}`}>
            48-hour turnaround · $497
          </span>
        </div>
      </div>
    </div>
  );
}
