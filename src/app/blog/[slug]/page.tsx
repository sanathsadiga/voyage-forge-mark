import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostContent from './BlogPostContent';
import { getBlogPost, getAllBlogPosts } from '../../../data/blogPosts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Voyage Forge',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [
        {
          url: post.seo.ogImage || post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      locale: 'en_US',
      siteName: 'Voyage Forge',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      creator: '@voyageforge',
      images: [post.seo.ogImage || post.featuredImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://voyageforge.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Voyage Forge',
      logo: {
        '@type': 'ImageObject',
        url: 'https://voyageforge.com/logo.png',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://voyageforge.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    wordCount: post.content.split(' ').length,
    timeRequired: `PT${post.readTime}M`,
    articleSection: post.category,
    inLanguage: 'en-US',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://voyageforge.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://voyageforge.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://voyageforge.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950">
        <Header />
        <main className="pt-20">
          <BlogPostContent post={post} />
        </main>
        <Footer />
      </div>
    </>
  );
}