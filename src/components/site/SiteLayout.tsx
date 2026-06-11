import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ExitIntentOverlay } from "./ExitIntentOverlay";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ExitIntentOverlay />
    </div>
  );
}
