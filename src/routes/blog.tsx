import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow, H2, Lede } from "@/components/site/Section";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field notes — Clockout" },
      {
        name: "description",
        content: "Practical writing on automation, AI, and running an owner-led business better.",
      },
      { property: "og:title", content: "Field notes — Clockout" },
      {
        property: "og:description",
        content: "Practical writing on automation, AI, and running an owner-led business better.",
      },
      { property: "og:url", content: fullUrl("/blog") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/blog") }],
  }),
  component: Blog,
});

// TODO: replace with real CMS posts
type Post = { title: string; tag: string; read: string; date: string; slug?: string };

const POSTS: Post[] = [
  {
    title: "Quote-to-Close: Fixing the Handoff That's Costing You Jobs",
    tag: "FIELD SERVICE OPERATIONS",
    read: "6 min",
    date: "June 10, 2026",
    slug: "quote-to-close",
  },
  {
    title: "The five-call rule: why most service businesses lose 40% of their leads",
    tag: "LEAD RESPONSE",
    read: "6 min",
    date: "Coming soon",
  },
  {
    title: "Owning your stack: flat fee, full ownership",
    tag: "PHILOSOPHY",
    read: "4 min",
    date: "Coming soon",
  },
  {
    title: "What an Operator OS does on a Tuesday morning",
    tag: "OPERATOR OS",
    read: "5 min",
    date: "Coming soon",
  },
];

function Blog() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Field notes</Eyebrow>
        <h1 className="font-display text-4xl md:text-7xl">Plain writing for people who run things.</h1>
        <Lede>
          No thought leadership. No 12-step listicles. Just what we've seen, what we've built, and
          what's working right now.
        </Lede>

        <div className="mt-16 divide-y divide-border">
          {POSTS.map((p) => {
            const inner = (
              <div className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-baseline group">
                <div>
                  <div className="eyebrow">{p.tag}</div>
                  <h3 className="card-title mt-3">{p.title}</h3>
                </div>
                <div className="text-sm text-muted-foreground">
                  {p.read}{p.date !== "Coming soon" ? ` · ${p.date}` : ""}
                </div>
              </div>
            );
            return p.slug ? (
              <Link key={p.title} to="/blog/$slug" params={{ slug: p.slug }}>
                {inner}
              </Link>
            ) : (
              <article key={p.title}>{inner}</article>
            );
          })}
        </div>
      </Section>
    </SiteLayout>
  );
}
