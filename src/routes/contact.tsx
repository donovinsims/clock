import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Clockout" },
      { name: "description", content: "Send us a note. We reply within one business day." },
      { property: "og:title", content: "Contact — Clockout" },
      { property: "og:description", content: "Send us a note. We reply within one business day." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight">Say hello.</h1>
        <Lede>Direct line to the team. We answer every note within one business day.</Lede>

        <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <form className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5">
            {/* TODO: wire to real form handler */}
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Name</span>
              <input className="w-full rounded-xl border border-input bg-background px-4 py-3" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Email</span>
              <input type="email" className="w-full rounded-xl border border-input bg-background px-4 py-3" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">What's on your mind?</span>
              <textarea rows={6} className="w-full rounded-xl border border-input bg-background px-4 py-3" />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone hover:bg-ink/85">
              Send →
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="eyebrow">Email</div>
              <p className="mt-3 text-lg font-display">{SITE.email}</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="eyebrow">Looking for a build?</div>
              <p className="mt-3 text-sm text-muted-foreground">Skip the form and book the Revenue Leak Audit. Fastest way to see if we're a fit.</p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}