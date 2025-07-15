// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    preset: "azure",
    azure: {
      config: {
        routes: [
          {
            route: "/admin*",
            rewrite: "/admin",
            allowedRoles: ["admin"]
          },
          {
            route: "/api/admin/*",
            methods: ["GET"],
            allowedRoles: ["admin"]
          },
          {
            route: "/login",
            rewrite: "/.auth/login/aad?post_login_redirect_uri=/admin",
          },
          {
            route: "/logout",
            rewrite: "/.auth/logout?post_logout_redirect_uri=https://nice-river-04f1f5000.5.azurestaticapps.net"
          },
          {
            route: "/index.html",
            redirect: "/"
          },
          {
            route: "/.auth/login/github",
            statusCode: 404
          }
        ],
        responseOverrides: {
          "401": {
            redirect: "/.auth/login/aad?post_login_redirect_uri=/admin",
            statusCode: 302
          },
          "403": {
            redirect: "/.auth/login/aad?post_login_redirect_uri=/admin",
            statusCode: 302
          }
        },
        platform: {
          apiRuntime: "node:18"
        }
        // navigationFallback: {
        //   rewrite: "/index.html",
        //   exclude: ["/images/*", "/css/*"]
        // }
      }
    },
    routeRules: {
      '/': { prerender: true }, // stale
      '/admin/**': { ssr: false },
    },
    prerender: {
      ignore: ['/api/**'] // Keep this as a good safety measure
    }
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-07-15",
})