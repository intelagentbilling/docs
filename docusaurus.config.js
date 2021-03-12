module.exports = {
  title: 'IntelAGENT Documentation and Support',
  tagline: 'OHIP Billing Made Better',
  url: 'https://akepecs.github.io/docs',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'akepecs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IntelAGENT',
      logo: {
        alt: 'IntelAGENT Logo',
        src: 'img/IntelAGENT-logo.svg',
        href: 'https://www.intelagent.ca',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
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
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs/',
            },
            {
              label: 'Designation',
              to: 'docs/getting-started/doc2',
            },
          ],
        },
        {
          title: 'Pricing',
          items: [
            {
              label: 'Self-Service',
              href: 'docs/pricing/self-service',
            },
            {
              label: 'Full-Service',
              href: 'docs/pricing/full-service',
            },
            {
              label: 'Pay As You Go',
              href: 'docs/pricing/pay-as-you-go',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Quick Copy',
              to: 'docs/features/quick-copy',
            },
            {
              label: 'Health Card Validation',
              href: 'docs/features/hcv',
            },
          ],
        },
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
      },
    ],
  ],
};
