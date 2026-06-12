import { useEffect, useRef, useState } from "react";
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
 * — Desktop: fires on mouseleave (cursor exits the viewport from top)
 * — Homepage: fires on scroll past 600px (once)
 * — Pricing & Services pages: fires after 12 seconds
 *
 * Accessibility:
 * — role="dialog" + aria-modal="true" announces the overlay as a modal
 * — Focus trap cycles Tab/Shift+Tab within the dialog
 * — Focus returns to trigger element on dismiss
 */
export function ExitIntentOverlay() {
  const [show, setShow] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Already dismissed this session — skip registration entirely
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const cleanups: (() => void)[] = [];
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const path = window.location.pathname;

    const fire = () => {
      // Guard: ignore if already dismissed this session
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setShow(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    // Desktop: mouseleave exit intent on the document
    if (!isMobile) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) fire();
      };
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
      cleanups.push(() => document.documentElement.removeEventListener("mouseleave", handleMouseLeave));
    }

    // Homepage: scroll-based trigger (only once via { once: true })
    if (path === "/") {
      const handleScroll = () => {
        if (window.scrollY > 600) fire();
      };
      window.addEventListener("scroll", handleScroll, { once: true });
      // { once: true } handles cleanup — no need to push
    }

    // Pricing & Services: delayed trigger
    if (path.startsWith("/pricing") || path.startsWith("/services")) {
      const id = setTimeout(fire, 12_000);
      cleanups.push(() => clearTimeout(id));
    }

    return () => { cleanups.forEach((fn) => fn()); };
  }, []);

  // Focus trap: when overlay opens, trap focus inside dialog
  useEffect(() => {
    if (!show || !dialogRef.current) return;
    const dialog = dialogRef.current;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableEls = dialog.querySelectorAll<HTMLElement>(focusableSelector);
    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];

    // Move focus to first focusable element in dialog
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusInside = dialog.contains(document.activeElement);
      if (e.shiftKey) {
        if (!focusInside || document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (!focusInside || document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [show]);

  const handleDismiss = () => {
    setShow(false);
    // Restore focus to element that triggered the overlay
    requestAnimationFrame(() => {
      previousFocusRef.current?.focus();
    });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center animate-in fade-in duration-150 bg-ink/15 backdrop-blur-sm">
      {/* Click backdrop to dismiss */}
      <button
        type="button"
        className="absolute inset-0"
        onClick={handleDismiss}
        aria-label="Close"
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Lock in beta pricing"
        className="relative mx-4 w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-clay hover:bg-ink/5 hover:text-ink transition-colors"
          aria-label="Close dialog"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Anchoring: full price first, lock-in price with urgency */}
        <h3 className="card-title">
          Lock In <span className="text-signal">$497</span> Before
          This Goes to{" "}
          <span className="line-through decoration-1">$1,494</span>
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
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
          onClick={handleDismiss}
          className="mt-4 w-full text-center text-xs text-clay hover:text-ink transition-colors"
        >
          No thanks — I'll keep leaking revenue
        </button>
      </div>
    </div>
  );
}
