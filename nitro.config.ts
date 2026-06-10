import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  compatibilityDate: "2025-06-10",
  serveStatic: true,
  publicAssets: [
    {
      baseURL: "/",
      dir: "public",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    },
  ],
});
