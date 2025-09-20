import "./global.css";
import type { ReactNode } from "react"; // import type

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Voyage Forge",
              description: "AI-powered travel content creation platform for tour operators, travel agencies, and travel guides",
              url: "https://voyageforge.com",
              logo: "https://voyageforge.com/vo%20(2).png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English"
              },
              sameAs: [
                "https://twitter.com/voyageforge",
                "https://linkedin.com/company/voyageforge"
              ],
              offers: {
                "@type": "Offer",
                description: "AI-powered travel content creation platform",
                category: "SaaS Software"
              },
              applicationCategory: "Travel Technology",
              operatingSystem: "Web-based",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "2500"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
