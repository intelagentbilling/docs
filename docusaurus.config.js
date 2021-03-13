module.exports = {
  title: 'IntelAGENT Documentation and Support',
  tagline: 'OHIP Billing Made Better',
  url: 'http://docs.intelagent.ca',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'akepecs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'GTM-T2SJLRG',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'IntelAGENT',
      logo: {
        alt: 'IntelAGENT Logo',
        src: 'img/IntelAGENT-logo.svg',
        href: 'https://www.intelagent.ca',
      },
      items: [
        {
          to: '/',
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
              to: '/',
            },
            {
              label: 'Designation',
              to: '/getting-started/doc2',
            },
          ],
        },
        {
          title: 'Pricing',
          items: [
            {
              label: 'Self-Service',
              href: '/pricing/self-service',
            },
            {
              label: 'Full-Service',
              href: '/pricing/full-service',
            },
            {
              label: 'Pay As You Go',
              href: '/pricing/pay-as-you-go',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Quick Copy',
              to: '/features/quick-copy',
            },
            {
              label: 'Health Card Validation',
              href: '/features/hcv',
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
          // Removes the Home Page
          routeBasePath: '/',

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
