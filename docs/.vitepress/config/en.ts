import { defineConfig } from 'vitepress';

export default defineConfig({
  description:
    'Turn your OpenAPI specification into a beautiful TypeScript client',
  lang: 'en-US',
  themeConfig: {
    sidebar: [
      {
        items: [
          { link: '/openapi-ts/get-started', text: 'Get Started' },
          { link: '/openapi-ts/configuration', text: 'Configuration' },
          {
            link: '/openapi-ts/clients',
            text: 'Clients <span class="soon">soon</span>',
          },
          { link: '/openapi-ts/interceptors', text: 'Interceptors' },
          {
            link: '/openapi-ts/integrations',
            text: 'Integrations <span class="soon">soon</span>',
          },
          {
            link: '/openapi-ts/tanstack-query',
            text: 'TanStack Query <span class="soon">soon</span>',
          },
          { link: '/openapi-ts/migrating', text: 'Migrating' },
        ],
        text: 'openapi-ts',
      },
      {
        items: [
          { link: '/about', text: 'Philosophy' },
          { link: '/contributing', text: 'Contributing' },
        ],
        text: '@hey-api',
      },
    ],
  },
});
