import {Metadata, Viewport} from "next";
import "./globals.css";
import SEOJsonLd from "@/components/seo/SEOJsonLd";
import SmoothScroll from "@/components/scroll/SmoothScroll";


export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#000000",
    colorScheme: "dark",
};


const title = "Jamie Calaku | Fullstack Engineer";
const description = "I’m a young full-stack developer from Darmstadt, Germany. I learn best by building, failing, fixing, and repeating the process. I’m curious about how things work under the hood and I enjoy turning vague ideas into real projects that I can actually be proud of.";

export const metadata: Metadata = {
    metadataBase: new URL("https://jamiecalaku.dev"),
    title: title,
    description: description,
    keywords: [
        "Jamie Calaku",
        "Full-Stack Engineer",
        "Web Development",
        "React",
        "TypeScript",
        "Java",
        "Backend Development",
        "Frontend Developer",
        "Portfolio Website",
    ],
    authors: [{ name: "Jamie Calaku", url: "https://jamiecalaku.dev" }],
    creator: "Jamie Calaku",
    publisher: "Jamie Calaku",
    openGraph: {
        type: "website",
        url: "https://jamiecalaku.dev",
        siteName: "Jamie Calaku",
        title: title,
        description: description,
        images: [
            {
                url: "https://jamiecalaku.dev/cover.jpg",
                width: 1200,
                height: 630,
                alt: "Preview Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: ["https://jamiecalaku.dev/cover.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    category: "Technology",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
            { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        ],
        apple: [
            { url: "/apple-icon.png", sizes: "180x180" },
        ],
        shortcut: [
            { url: "/favicon.ico" },
        ],
    },
    applicationName: title,
    verification: {
        me: ["mailto:contact@jamiecalaku.dev"],
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" translate={"no"}>
          <body className="">
              <SmoothScroll>
                  {children}

                  {/* SEOJsonLd */}
                  <SEOJsonLd/>
              </SmoothScroll>
          </body>
    </html>
  );
}
