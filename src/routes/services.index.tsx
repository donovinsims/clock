import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { Card } from "@/components/site/Card";
import { AuditCard } from "@/components/site/AuditCard";
import { VERTICALS } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Services</Eyebrow>
        <H2>
          Built for your industry.
          <br />
          Not a SaaS template.
        </H2>
        <Lede>
          Every vertical has its own leaks. The big guys solved these years ago. Now you can too.
        </Lede>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {VERTICALS.map((v) => (
            <Link
              key={v.slug}
              to="/services/$slug"
              params={{ slug: v.slug }}
              className="group flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              <Card className="flex flex-col justify-between p-8 hover:border-signal/40 hover:shadow-2xl">
                <div>
                  <div className="eyebrow">{v.name}</div>
                  <h3 className="card-title mt-4 text-2xl md:text-3xl">{v.short}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">{v.blurb}</p>
                </div>
                <div className="mt-8 text-sm font-medium text-ink/70 group-hover:text-signal">
                  See the {v.name} build →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="highlight">
        <AuditCard />
      </Section>
    </SiteLayout>
  );
}
