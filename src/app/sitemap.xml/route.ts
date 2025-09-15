
export async function GET() {
  const baseURL = 'https://sadeim.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/blog',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
              <loc>${baseURL}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
              <priority>${route === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}