import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://phichaya.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin/', '/_next/'],
            },
            {
                userAgent: ['GPTBot', 'CCBot', 'PerplexityBot', 'Google-Extended', 'Anthropic-AI'],
                allow: '/',
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
