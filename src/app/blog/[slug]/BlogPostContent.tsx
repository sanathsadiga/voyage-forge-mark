'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiClock, FiUser, FiTag, FiArrowLeft, FiShare2 } from 'react-icons/fi';
import { type BlogPost, getRelatedBlogPosts } from '../../../data/blogPosts';
import BannerSlider from './BannerSlider';
import RelatedPosts from './RelatedPosts';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const relatedPosts = getRelatedBlogPosts(post);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Parse content to render with proper formatting
  const renderContent = (content: string) => {
    // Split content by paragraphs and handle markdown-like formatting
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => {
      // Handle headers
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl md:text-5xl font-bold text-white mb-8 mt-12">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }
      
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl md:text-4xl font-bold text-white mb-6 mt-10">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      // Handle images
      if (paragraph.includes('![') && paragraph.includes('](')) {
        const match = paragraph.match(/!\[([^\]]*)\]\(([^)]+)\)/);
        if (match && match[1] && match[2]) {
          const [, alt, src] = match;
          return (
            <div key={index} className="my-8">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={400}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          );
        }
      }

      // Handle lists
      if (paragraph.includes('- **') || paragraph.includes('* **')) {
        const items = paragraph.split('\n').filter(item => item.trim().startsWith('-') || item.trim().startsWith('*'));
        return (
          <ul key={index} className="list-disc list-inside space-y-3 text-gray-300 mb-6 ml-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">
                {item.replace(/^[-*]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')}
              </li>
            ))}
          </ul>
        );
      }

      // Handle numbered lists
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split('\n').filter(item => /^\d+\./.test(item.trim()));
        return (
          <ol key={index} className="list-decimal list-inside space-y-3 text-gray-300 mb-6 ml-4">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">
                {item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')}
              </li>
            ))}
          </ol>
        );
      }

      // Handle blockquotes
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-amber-400 pl-6 my-6 italic text-gray-300 bg-slate-800/30 py-4 rounded-r-lg">
            {paragraph.replace('> ', '')}
          </blockquote>
        );
      }

      // Handle regular paragraphs
      if (paragraph.trim() && !paragraph.startsWith('#')) {
        return (
          <p 
            key={index} 
            className="text-gray-300 leading-relaxed mb-6 text-lg"
            dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                .replace(/`(.*?)`/g, '<code class="bg-slate-700 px-2 py-1 rounded text-amber-400 font-mono text-sm">$1</code>')
            }}
          />
        );
      }

      return null;
    });
  };

  return (
    <article className="relative">
      {/* Banner Slider */}
      {post.bannerImages && post.bannerImages.length > 0 && (
        <BannerSlider images={post.bannerImages} />
      )}

      {/* Article Content */}
      <div className="relative py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.nav>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-white font-semibold">{post.author.name}</div>
                    <div className="text-gray-400 text-sm">{post.author.bio}</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-12 bg-white/20" />

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {post.readTime} min read
                  </span>
                </div>
              </div>

              <button
                onClick={sharePost}
                className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25"
              >
                <FiShare2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-400 mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 hover:text-white px-3 py-1 rounded-full text-sm border border-white/10 transition-all duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.footer>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}
    </article>
  );
}