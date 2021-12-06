const users = require('./showcase.json');

module.exports = {
  title: 'IntelAGENT',
  tagline: 'OHIP Billling',
  url: 'http://www.intelagent.ca',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'akepecs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  titleDelimiter: '-',
  customFields: {
    users,
  },
  themeConfig: {   
    navbar: {
      title: 'IntelAGENT',
      logo: {
        alt: 'IntelAGENT Logo',
        src: 'img/IntelAGENT-logo.svg',
        href: 'https://www.intelagent.ca',
      },
      items: [

        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'http://www.health.gov.on.ca/en/pro/programs/ohip/bulletins/4000/bulletin_4000_mn.aspx',
          label: 'Bulletins',
          position: 'right',
        },
        {
          href: 'https://www.health.gov.on.ca/en/pro/programs/ohip/sob/physserv/sob_master20200306.pdf',
          label: 'Schedule of Benefits',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Installation',
              to: '/docs/',
            },
            {
              label: 'Designation',
              to: '/docs/getting-started/designation',
            },
            {
              label: 'MOH Group Codes',
              to: '/docs/getting-started/moh_group',
            },
          ],
        },
        {
          title: 'Pricing',
          items: [
            {
              label: 'Self-Service',
              href: '/docs/pricing/self-service',
            },
            {
              label: 'Full-Service',
              href: '/docs/pricing/full-service',
            },
            {
              label: 'Pay As You Go',
              href: '/docs/pricing/pay-as-you-go',
            },
          ],
        },
        {
          title: 'Features',
          items: [
            {
              label: 'Health Card Validation',
              href: '/docs/features/hcv',
            },
            {
              label: 'Quick Copy',
              to: '/docs/features/quick-copy',
            },
            {
              label: 'Favourties',
              to: '/docs/features/favourites',
            },

          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Product Comparison',
              href: '/docs/comparison',
            },
            {
              label: 'Payment',
              href: '/docs/faq/payment',
            },
            {
              label: 'Privacy',
              href: '/privacy',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IntelAGENT Billing`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Removes the Home Page
          routeBasePath: '/docs',

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
            trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-T2SJLRG', // GTM Container ID
      }
    ]
  ],
};
