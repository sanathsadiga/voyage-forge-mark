'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiCalendar, FiClock, FiTag, FiUser, FiArrowRight } from 'react-icons/fi';
import { getAllBlogPosts, getFeaturedBlogPosts, blogCategories, type BlogPost } from '../../data/blogPosts';

export default function BlogListingContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [allPosts, selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/6 to-orange-400/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-10 bottom-1/4 w-[32rem] h-80 bg-gradient-to-l from-purple-500/6 to-indigo-600/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Travel Industry
            </span>
            <br />
            <span className="text-white">Insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Discover the latest trends, strategies, and innovations shaping the future of travel. 
            Expert insights to help your travel business thrive in the digital age.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !searchQuery && selectedCategory === 'All' && (
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Featured Articles
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/10">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <FiCalendar className="w-4 h-4" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiClock className="w-4 h-4" />
                            {post.readTime} min read
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <span className="text-white font-medium">{post.author.name}</span>
                          </div>

                          <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all duration-300">
                            <span className="text-sm font-medium">Read More</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['All', ...blogCategories].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
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

                            <div className="flex flex-wrap gap-1">
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
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center items-center gap-2"
                >
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/50 transition-all duration-300"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold'
                          : 'bg-slate-800/50 border border-white/10 text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/50 transition-all duration-300"
                  >
                    Next
                  </button>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <FiSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">No Articles Found</h3>
              <p className="text-gray-300 mb-8">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setCurrentPage(1);
                }}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}