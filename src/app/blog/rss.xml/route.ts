import { getAllBlogPosts } from '../../../data/blogPosts'

export async function GET() {
  const baseUrl = 'https://voyageforge.com'
  const blogPosts = getAllBlogPosts()
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Voyage Forge Travel Blog</title>
    <description>Expert insights on travel technology, AI-powered marketing, and industry trends for travel professionals.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <managingEditor>team@voyageforge.com (Voyage Forge Team)</managingEditor>
    <webMaster>tech@voyageforge.com (Voyage Forge Tech Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/vo%20(2).png</url>
      <title>Voyage Forge</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author.name}</author>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('')}
      <content:encoded><![CDATA[
        <img src="${post.featuredImage}" alt="${post.title}" style="width: 100%; height: auto; margin-bottom: 20px;" />
        <p><strong>By ${post.author.name}</strong> • ${Math.ceil(post.readTime)} min read</p>
        <p>${post.excerpt}</p>
        <p><a href="${baseUrl}/blog/${post.slug}" target="_blank">Read the full article on Voyage Forge</a></p>
      ]]></content:encoded>
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}