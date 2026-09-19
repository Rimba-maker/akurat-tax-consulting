import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// GITHUB_ACTIONS is set only on the CI runner, so local dev/build/preview stay on "/".
const prod = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: prod ? "https://rimba-maker.github.io" : undefined,
  base: prod ? "/akurat-tax-consulting" : "/",
  compressHTML: true,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
