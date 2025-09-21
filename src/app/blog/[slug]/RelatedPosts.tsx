'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { type BlogPost } from '../../../data/blogPosts';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Related Articles
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore more insights and strategies to grow your travel business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {post.readTime} min
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span className="text-white text-sm font-medium">{post.author.name}</span>
                      </div>

                      <div className="flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all duration-300">
                        <span className="text-sm font-medium">Read</span>
                        <FiArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300 hover:scale-105"
          >
            View All Articles
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}