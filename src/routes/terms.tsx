import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Clockout" },
      { name: "description", content: "Terms of service for Clockout." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Terms</Eyebrow>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight">Terms of service</h1>
        <div className="mt-12 max-w-3xl space-y-6 text-lg text-muted-foreground">
          {/* TODO: replace with reviewed legal copy */}
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            By using this site, you agree to these terms. The audit is a one-time $497 engagement
            delivered within 48 business hours. If the audit does not surface at least $10K in
            fixable leaks, you receive a full refund.
          </p>
          <p>
            Implementation engagements are scoped per project. Pricing starts at $997. Deliverables,
            timeline, and payment terms are documented in a written statement of work.
          </p>
          <p>
            You own the systems we build for you outright at handover. We retain no rights to your
            customer data and run no monthly subscription against the systems we ship.
          </p>
          <p>
            Content on this site is for general information only and is not legal, financial, or
            business advice.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
