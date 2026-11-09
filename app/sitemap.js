export default function sitemap() {
  const base = 'https://ironwoodcreativestudio.shop';
  const now = new Date();
  return [
    { url: base, lastModified: now, priority: 1 },
    { url: base + '/portfolio', lastModified: now, priority: 0.9 },
    { url: base + '/apple-of-my-eye', lastModified: now, priority: 0.8 },
    { url: base + '/shop', lastModified: now, priority: 0.7 },
  ];
}
