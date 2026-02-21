import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "Shadcn ui",
    "Sass",
    "Fast ",
    "Simple ",
    "Easy",
    "Cloud Native",
  ],
  authors: [
    {
      name: "VideoFly",
    },
  ],
  creator: "VideoFly",
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
