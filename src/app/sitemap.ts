import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.seo.siteUrl,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}
