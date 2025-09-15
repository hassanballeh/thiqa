// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = 'https://sadeim.com';

  // Basic pages
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}