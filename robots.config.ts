import type { RobotsTxtOptions } from 'astro-robots-txt';

const robotsConfig: RobotsTxtOptions = {
  policy: [
    {
      userAgent: '*',
      disallow: '/',
      // Once prod ready, set disallow to ''
      // disallow: ''
    },
  ],
  sitemapBaseFileName: 'sitemap-index', // default generated sitemap name, don't touch
  transform(content) {
    const commentsList = ['Some text before main content', 'Second line', 'Third line'];
    const comments = commentsList.map((item) => `# ${item}.`).join('\n');
    return `${comments}\n\n${content}`;
  },
};

export default robotsConfig;
