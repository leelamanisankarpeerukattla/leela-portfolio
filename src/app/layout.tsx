import type { Metadata, Viewport } from 'next';
import './globals.css';
import { profile } from '@/data/profile';

const siteUrl = profile.seo.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.seo.title,
    template: `%s | ${profile.name}`
  },
  description: profile.seo.description,
  keywords: [...profile.seo.keywords],
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: siteUrl,
    siteName: profile.name,
    images: [
      {
        url: profile.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} software engineer portfolio preview`
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    images: [profile.seo.ogImage]
  },
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060914'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: profile.seo.title,
    url: siteUrl,
    mainEntity: {
      '@type': 'Person',
      name: profile.name,
      alternateName: profile.displayName,
      jobTitle: profile.role,
      email: profile.email,
      url: siteUrl,
      sameAs: [profile.links.github, profile.links.linkedin],
      knowsAbout: profile.topSkills
    }
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
