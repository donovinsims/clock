import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Clockout" },
      { name: "description", content: "How Clockout handles your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">Privacy policy</h1>
        <div className="prose prose-lg mt-12 max-w-3xl text-foreground">
          {/* TODO: replace with reviewed legal copy */}
          <p className="text-lg text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
          <h2 className="mt-10 font-display text-3xl">What we collect</h2>
          <p className="text-muted-foreground">We collect the information you give us through forms (name, email, company, what you tell us about your business) and basic anonymous analytics about how this site is used.</p>
          <h2 className="mt-8 font-display text-3xl">How we use it</h2>
          <p className="text-muted-foreground">To answer you, deliver work you've paid for, and improve our service. We don't sell your data.</p>
          <h2 className="mt-8 font-display text-3xl">How we store it</h2>
          <p className="text-muted-foreground">In standard SaaS tools we use to run Clockout, with reasonable security practices.</p>
          <h2 className="mt-8 font-display text-3xl">Your rights</h2>
          <p className="text-muted-foreground">Email us anytime to access, correct, or delete your data.</p>
        </div>
      </Section>
    </SiteLayout>
  );
}