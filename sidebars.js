module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
      'getting-started/doc1',
      'getting-started/doc2',
      'getting-started/doc3',
      ],
    },
    {
      type: "category",
      label: "Pricing",
      collapsed: true,
      items: ['pricing/overview','pricing/self-service','pricing/full-service','pricing/pay-as-you-go'],
    },
    {
      type: "category",
      label: "Features",
      collapsed: true,
      items: ['features/quick-copy','features/favourites','features/hcv','features/adding-referring-physician','features/resubmit-claims'],
    },
    {
      type: "category",
      label: "FAQ",
      collapsed: true,
      items: ['faq/delete-claim','faq/rmb'],
    },
    {
      type: "category",
      label: "COVID",
      collapsed: true,
      items: ['covid/sessional','covid/k-codes','covid/vaccine'],
    },
    {
      type: "doc",
      id: "comparison",
    },
  ]
};  
