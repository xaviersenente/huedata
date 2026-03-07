// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://huedata.fr",
  output: "static",
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), markdoc(), keystatic(), sitemap()],
});
