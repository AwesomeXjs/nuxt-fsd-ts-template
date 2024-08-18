import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  alias: {
    "@": resolve(`${__dirname}/client`, ""),
  },
  dir: {
    layouts: "client/shared/ui/layouts",
    plugins: "client/shared/lib/plugins",
    middleware: "client/shared/lib/middleware",
    app: "client/app",
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "client/shared/lib/composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "client/shared/lib/composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "client/shared/lib/composables/**",
    ],
  },
  components: [{ path: "~/client/shared/ui/components", extensions: ["vue"] }],
  css: ["@/app/config/scss/_style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/app/config/scss/_variables.scss";',
        },
      },
    },
  },
});
