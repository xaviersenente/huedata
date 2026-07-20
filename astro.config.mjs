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
  // Astro 7 a changé le défaut de `true` à `'jsx'` : les blancs entre
  // éléments inline sont supprimés selon les règles JSX, ce qui colle les
  // mots ("ont des<em>couleurs</em>" → "ont descouleurs"). On conserve le
  // comportement historique. Pour passer à 'jsx', il faudra insérer des
  // {" "} explicites à chaque frontière texte/élément inline.
  compressHTML: true,
  output: "static",
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), markdoc(), keystatic(), sitemap()],
});
