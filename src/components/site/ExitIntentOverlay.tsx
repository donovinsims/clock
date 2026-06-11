import { useEffect, useState } from "react";
import { BetaCounter } from "./BetaCounter";
import { CTAButton } from "./CTAButton";

const STORAGE_KEY = "clockout-exit-intent-dismissed";

/**
 * Exit-intent overlay with mobile triggers.
 *
 * Psychology:
 * — Anchoring: "$1,494" shown before "$497" — contrast makes it a steal
 * — Loss aversion: "Lock In $497" frames inaction as a loss
 * — Scarcity: BetaCounter provides social proof + limited quantity
 *
 * Triggers (once/session via sessionStorage):
 * — Desktop: cursor leaves viewport top edge (existing)
 * — Homepage: scroll past 65% of page height
 * — Pricing: 12 seconds on page
 */
export function ExitIntentOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const isMobile = window.innerWidth < 768;
    const path = window.location.pathname;

    const fire = () => {
      setShow(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    /* ── Desktop: cursor leaves top edge ── */
    if (!isMobile) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY > 0) return;
        fire();
      };
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    }

    /* ── Homepage mobile: scroll past 65% ── */
    if (path === "/") {
      const handleScroll = () => {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrolled = window.scrollY;
        const percent = scrolled / (docHeight - winHeight);
        if (percent > 0.65) fire();
      };
      window.addEventListener("scroll", handleScroll, { once: true });
    }

    /* ── Pricing page: 12 seconds ── */
    if (path.startsWith("/pricing") || path.startsWith("/services")) {
      const timeout = setTimeout(fire, 12_000);
      return () => {
        clearTimeout(timeout);
        document.documentElement.removeEventListener("mouseleave", fire);
      };
    }

    return () => {
      document.documentElement.removeEventListener("mouseleave", fire);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center animate-in fade-in duration-150 bg-ink/15 backdrop-blur-sm">
      {/* Click backdrop to dismiss */}
      <button
        type="button"
        className="absolute inset-0"
        onClick={() => setShow(false)}
        aria-label="Close"
      />

      <div className="relative mx-4 w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          type="button"
          onClick={() => setShow(false)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-clay hover:bg-ink/5 hover:text-ink transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Anchoring: full price first, lock-in price with urgency */}
        <h3 className="card-title text-2xl tracking-tight">
          Lock In <span className="text-signal">$497</span> Before
          This Goes to{" "}
          <span className="line-through decoration-1">$1,494</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Full audit + full automation build. Written report in 48 hours.
          You own everything — no subscriptions, no licenses.
        </p>

        <div className="mt-5">
          <BetaCounter />
        </div>

        <div className="mt-6">
          <CTAButton to="/audit" className="w-full">
            <span className="op-label">Reserve Beta Access</span>
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setShow(false)}
          className="mt-4 w-full text-center text-xs text-clay hover:text-ink transition-colors"
        >
          No thanks — I'll keep leaking revenue
        </button>
      </div>
    </div>
  );
}
