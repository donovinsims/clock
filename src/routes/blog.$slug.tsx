import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { BLOG_CONTENT, PUBLISHED_SLUGS } from "@/lib/blog-content";
import { fullUrl } from "@/lib/seo";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (!PUBLISHED_SLUGS.has(params.slug)) throw notFound();
    const content = BLOG_CONTENT[params.slug];
    if (!content) throw notFound();
    return { content, slug: params.slug };
  },
  head: ({ params }) => {
    const title = ARTICLE_META[params.slug]?.title ?? "Article";
    const desc = ARTICLE_META[params.slug]?.description ?? "";
    return {
      meta: [
        { title: `${title} — Clockout` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Clockout` },
        { property: "og:description", content: desc },
        { property: "og:url", content: fullUrl(`/blog/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: fullUrl(`/blog/${params.slug}`) }],
    };
  },
  component: BlogArticle,
});

const ARTICLE_META: Record<string, { title: string; description: string; date: string }> = {
  "quote-to-close": {
    title: "Quote-to-Close: Fixing the Handoff That's Costing You Jobs",
    description:
      "The quote-to-close handoff is the most fragile moment in the sales cycle. Here's how to fix it so your close rate goes up without adding a single salesperson.",
    date: "June 10, 2026",
  },
};

function BlogArticle() {
  const { content, slug } = Route.useLoaderData();
  const meta = ARTICLE_META[slug];

  return (
    <SiteLayout>
      <main className="mx-auto max-w-prose px-4 py-24">
        <Link
          to="/blog"
          className="group mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to articles
        </Link>

        <article>
          <header className="mb-10">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-signal">
              FIELD SERVICE OPERATIONS
            </p>
            <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
              {meta.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={meta.date}>{meta.date}</time>
              <span className="inline-block h-1 w-1 rounded-full bg-clay" />
              <span>6 min read</span>
            </div>
          </header>

          <div className="prose-custom max-w-none space-y-5 text-base leading-relaxed text-foreground/80 [&_.lead]:text-lg [&_.lead]:text-foreground/90 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground [&_p]:leading-relaxed [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-signal/40 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-foreground/70 [&_cite]:mt-3 [&_cite]:block [&_cite]:text-sm [&_cite]:not-italic [&_cite]:text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          <hr className="my-16 border-border" />

          <div className="flex flex-col gap-6 rounded-xl border border-signal/20 bg-signal/5 p-8">
            <p className="font-display text-xl text-foreground">
              Ready to fix your quote-to-close handoff?
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Clockout gives you a structured proposal process that keeps deals moving.
              See how it works for your business.
            </p>
            <div>
              <CTAButton to="/assessment">Get Your Ops Score</CTAButton>
            </div>
          </div>
        </article>
      </main>
    </SiteLayout>
  );
}
