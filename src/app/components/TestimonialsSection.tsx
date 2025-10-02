"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";

// SVG Icons for testimonials
const QuoteIcon = (): ReactElement => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
  </svg>
);

const StarIcon = (): ReactElement => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const MapPinIcon = (): ReactElement => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
  location: string;
  avatar: string;
  badge?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amala",
    company: "Thailand Tours",
    content: "Completely satisfied in early access itself. Looking forward to more features. The AI content generation has transformed how we create our tour descriptions and itineraries.",
    rating: 5,
    location: "Bangkok, Thailand",
    avatar: "A",
    badge: "Early Adopter"
  },
  {
    name: "Govind",
    company: "Himalayan Tours Planner",
    content: "Didn't trust it during early access at first, but after getting used to it, I found it provides easy access even for those who are not good at tech. The platform is incredibly user-friendly.",
    rating: 5,
    location: "Nepal",
    avatar: "G",
    badge: "Verified User"
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps): ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group"
    >
      {testimonial.badge && (
        <div className="absolute -top-3 right-6">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {testimonial.badge}
          </span>
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center text-2xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">
            {testimonial.avatar}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
              {testimonial.name}
            </h3>
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                <StarIcon key={starIndex} />
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-amber-400 text-sm mb-1">
            <span className="font-semibold">{testimonial.company}</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <MapPinIcon />
            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute -top-2 -left-2 text-amber-400/30">
          <QuoteIcon />
        </div>
        <blockquote className="text-gray-300 text-lg leading-relaxed pl-8 group-hover:text-white transition-colors duration-300 italic">
          "{testimonial.content}"
        </blockquote>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
        className="pt-6 border-t border-white/10"
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Verified Customer</span>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-3 h-3 rounded-full bg-green-400/60"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function TestimonialsSection(): ReactElement {
  return (
    <section 
      className="relative py-24 px-4 sm:px-8 overflow-hidden"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-1/3 w-96 h-96 bg-gradient-to-r from-green-400/6 to-emerald-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-12 bottom-1/3 w-[36rem] h-80 bg-gradient-to-l from-amber-500/6 to-yellow-600/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] bg-gradient-to-r from-blue-400/3 to-indigo-500/3 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute top-1/5 left-1/4 w-2 h-2 bg-green-400/40 rounded-full animate-ping" style={{animationDelay: '0s'}} />
        <div className="absolute bottom-1/5 right-1/4 w-1.5 h-1.5 bg-amber-400/50 rounded-full animate-ping" style={{animationDelay: '3s'}} />
        <div className="absolute top-4/5 left-3/5 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{animationDelay: '6s'}} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent">
              What Our Customers
            </span>
            <br />
            <span className="text-white">Are Saying</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted by travel professionals worldwide. See how Voyage Forge is transforming the travel industry with AI-powered solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/20 rounded-full text-green-200 font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Join 500+ travel businesses already using Voyage Forge
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <StarIcon />
              4.9/5 Average Rating
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Customer Satisfaction
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Money-back Guarantee
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h3>Customer Testimonials for Travel Industry Software</h3>
        <div itemScope itemType="https://schema.org/Review">
          <span itemProp="author">Amala from Thailand Tours</span>
          <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
            <span itemProp="ratingValue">5</span>
          </span>
          <span itemProp="reviewBody">Completely satisfied with AI travel content generation platform</span>
        </div>
        <div itemScope itemType="https://schema.org/Review">
          <span itemProp="author">Govind from Himalayan Tours Planner</span>
          <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
            <span itemProp="ratingValue">5</span>
          </span>
          <span itemProp="reviewBody">User-friendly travel management platform for non-technical users</span>
        </div>
        
        <h4>Travel Business Customer Success Stories</h4>
        <ul>
          <li>Thailand tour operators using AI content generation successfully</li>
          <li>Himalayan travel planners improving efficiency with automated tools</li>
          <li>Non-technical travel professionals easily adopting the platform</li>
          <li>Early access customers completely satisfied with features</li>
          <li>Travel agencies transforming their digital marketing approach</li>
          <li>Tour operators creating better itineraries with AI assistance</li>
        </ul>
      </div>
    </section>
  );
}