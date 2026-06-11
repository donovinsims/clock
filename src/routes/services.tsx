import { createFileRoute, Outlet } from "@tanstack/react-router";
import { fullUrl } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Clockout" },
      {
        name: "description",
        content:
          "Industry-specific automation builds for HVAC, roofing, plumbing, electrical, landscaping, cleaning, property management, and real estate.",
      },
      { property: "og:title", content: "Services — Clockout" },
      {
        property: "og:description",
        content: "Industry-specific automation builds for owner-led service businesses.",
      },
      { property: "og:url", content: fullUrl("/services") },
    ],
    links: [{ rel: "canonical", href: fullUrl("/services") }],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
