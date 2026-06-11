import { useEffect, useState } from "react";
import { BetaCounter } from "./BetaCounter";
import { CTAButton } from "./CTAButton";

const STORAGE_KEY = "clockout-exit-intent-dismissed";

/**
 * Desktop-only exit-intent overlay. Fires once per session when the cursor
 * leaves the viewport (top edge). Shows scarcity + CTA → /audit.
 *
 * Design: clean card with backdrop blur, follows design system tokens.
 * Uses animate-in from tw-animate-css for a polished entrance.
 */
export function ExitIntentOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return;
      setShow(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    return () =>
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
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
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-clay hover:bg-ink/5 hover:text-ink transition-colors"
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

        <h3 className="card-title text-2xl tracking-tight">
          3 beta spots left at $497
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Full audit + full automation build. Written report in 48 hours.
          Normally <span className="font-medium text-ink line-through">$1,494</span>.
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
