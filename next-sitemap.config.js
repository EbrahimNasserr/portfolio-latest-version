/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ebrahim-nasser.vercel.app',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*', '/server-sitemap-index.xml'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        additionalSitemaps: [],
    },
    // Custom transform function to add lastmod, changefreq, priority
    transform: async (config, path) => {
        // Custom priority and changefreq based on path
        let priority = 0.7;
        let changefreq = 'weekly';

        if (path === '/') {
            priority = 1.0;
            changefreq = 'daily';
        } else if (path === '/projects' || path === '/about') {
            priority = 0.9;
            changefreq = 'weekly';
        } else if (path === '/contact') {
            priority = 0.8;
            changefreq = 'monthly';
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
}

