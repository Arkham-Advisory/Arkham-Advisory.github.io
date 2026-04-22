import { brandAssets } from "./assets";

export const siteConfig = {
  name: "Arkham Advisory",
  url: "https://arkham-advisory.com",
  description:
    "Senior advisory for organisations making consequential decisions in data, AI, and transformation.",
  email: "hello@arkham-advisory.com",
  arkhamTimesUrl: "https://arkham-times.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Advisory", href: "/advisory/" },
    { label: "About", href: "/about/" },
    { label: "Writing", href: "/writing/" },
    { label: "Contact", href: "/contact/" },
  ],
  assets: brandAssets,
} as const;
