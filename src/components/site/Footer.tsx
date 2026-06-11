import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-signal" aria-hidden />
              <span className="font-display text-3xl">Clockout</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-bone/70">
              Done-for-you automation for owner-led businesses. One-time builds. You own the system.
            </p>
            <p className="mt-3 text-xs text-bone/50">
              Roscoe, IL — Serving Northern Illinois & Southern Wisconsin
            </p>
          </div>
          <FooterCol title="Product">
            <Link to="/audit" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Audit
            </Link>
            <Link to="/pricing" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Pricing
            </Link>
            <Link to="/operator-os" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Operator OS
            </Link>
            <Link to="/services" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Services
            </Link>
          </FooterCol>
          <FooterCol title="Resources">
            <Link to="/blog" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Blog
            </Link>
            <Link to="/faq" className="block py-1 text-sm text-bone/70 hover:text-bone">
              FAQ
            </Link>
            <Link to="/contact" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Contact
            </Link>
            <Link to="/assessment" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Beta Access
            </Link>
          </FooterCol>
          <FooterCol title="Company">
            <Link to="/about" className="block py-1 text-sm text-bone/70 hover:text-bone">
              About
            </Link>
          </FooterCol>
          <FooterCol title="Legal">
            <Link to="/privacy" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Privacy
            </Link>
            <Link to="/terms" className="block py-1 text-sm text-bone/70 hover:text-bone">
              Terms
            </Link>
          </FooterCol>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-bone/15 pt-6 text-xs text-bone/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Clockout. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-bone">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-bone">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow text-bone/50">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
