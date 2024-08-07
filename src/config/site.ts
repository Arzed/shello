export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Shello",
  description: "Shello Company Profiles",
  mainNav: [
    {
      title: "About us",
      href: "/about-us",
    },
    {
      title: "Services",
      href: "/services",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};
