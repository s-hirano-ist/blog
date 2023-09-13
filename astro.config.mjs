import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react({
      include: ["**/react/*"],
    }),
    sitemap(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
