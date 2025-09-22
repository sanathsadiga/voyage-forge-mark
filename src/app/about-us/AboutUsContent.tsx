"use client";

import { motion } from "framer-motion";

// SVG Icons
const RocketIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const HeartIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const GlobeIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const AwardIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

interface ValueCard {
  icon: () => React.ReactElement;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
}

const values: ValueCard[] = [
  {
    icon: RocketIcon,
    title: "Innovation First",
    description: "We push the boundaries of what's possible in travel technology, constantly evolving to meet industry demands.",
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400"
  },
  {
    icon: HeartIcon,
    title: "Customer Success",
    description: "Your success is our mission. Every feature we build is designed to help travel businesses thrive and grow.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400"
  },
  {
    icon: GlobeIcon,
    title: "Global Impact",
    description: "Empowering travel businesses worldwide to create extraordinary experiences and connect cultures.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    icon: AwardIcon,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer support.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400"
  }
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sanath",
    role: "Founder & CEO",
    bio: "Former travel agency owner turned tech entrepreneur with 10+ years in the travel industry. Passionate about bridging the gap between technology and travel experiences.",
    expertise: ["Travel Industry", "Business Strategy", "Product Vision", "AI Innovation"],
    avatar: "S"
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Full-stack developer and AI specialist with expertise in building scalable travel technology solutions. Led engineering teams at major tech companies.",
    expertise: ["AI/ML", "System Architecture", "Travel Tech", "Team Leadership"],
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design & UX",
    bio: "Creating beautiful, intuitive digital experiences for over 12 years. Specialized in travel and hospitality interface design with a focus on conversion optimization.",
    expertise: ["UX/UI Design", "Conversion Optimization", "Travel Psychology", "Brand Strategy"],
    avatar: "MR"
  },
  {
    name: "Priya Patel",
    role: "VP of Customer Success",
    bio: "Former tour operator with deep understanding of travel business challenges. Ensures every customer achieves maximum value from our platform.",
    expertise: ["Customer Success", "Travel Operations", "Training", "Business Consulting"],
    avatar: "PP"
  }
];

export default function AboutUsContent() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 px-4 sm:px-8 pt-24 pb-20 overflow-hidden">
        {/* Enhanced background orbs and effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-12 -top-6 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-6 bottom-6 w-[32rem] h-80 bg-gradient-to-l from-purple-500/8 to-indigo-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-cyan-400/4 to-blue-500/4 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,237,74,0.08),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.06),transparent_50%)]" />
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-ping" style={{animationDelay: '0s'}} />
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 backdrop-blur-lg border border-amber-400/30 mb-6 text-amber-100 text-sm font-medium shadow-lg"
          >
            <svg className="w-3 h-3 mr-2 text-emerald-400 animate-pulse" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="4" />
            </svg>
            🚀 Trusted by 500+ Travel Businesses Worldwide
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-200 leading-tight tracking-tight mb-8"
          >
            Revolutionizing Travel
            <span className="block text-gradient bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Through Innovation
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-200/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We're on a mission to empower every travel business with 
            <span className="text-amber-200 font-medium"> AI-powered tools and cutting-edge technology</span> 
            that transform how you create content, manage customers, and grow your business.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "500+", label: "Travel Businesses" },
              { number: "50K+", label: "Content Pieces Generated" },
              { number: "4.9/5", label: "Customer Rating" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Mission & Vision Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/6 to-indigo-400/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute right-10 bottom-1/4 w-[32rem] h-80 bg-gradient-to-l from-amber-500/6 to-orange-600/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
                Our Story & Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded by travel industry veterans who experienced the pain points firsthand
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center">
                  <RocketIcon />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize professional travel marketing by providing AI-powered tools that level the playing field. 
                We believe every travel business, regardless of size or technical expertise, deserves access to 
                enterprise-grade content creation and marketing automation tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-indigo-500/20 border border-purple-400/30 flex items-center justify-center">
                  <GlobeIcon />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                A world where technology empowers travel businesses to focus on what they do best - creating 
                unforgettable experiences. We envision an ecosystem where AI handles the complexity of 
                digital marketing, allowing entrepreneurs to pursue their passion for travel.
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-3xl border border-white/10 bg-gradient-to-br ${value.gradient} backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={value.iconColor}>
                    <value.icon />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 top-1/3 w-96 h-96 bg-gradient-to-r from-emerald-400/6 to-teal-400/6 rounded-full blur-3xl animate-pulse" />
          <div className="absolute left-10 bottom-1/3 w-[36rem] h-80 bg-gradient-to-l from-rose-500/6 to-pink-600/6 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate travel and technology experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center text-2xl font-bold text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 font-medium mb-4">{member.role}</p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {member.bio}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 rounded-full text-amber-200 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-r from-amber-400/4 to-orange-500/4 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Travel Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of travel businesses already using Voyage Forge to automate their content creation, 
              streamline operations, and boost their online presence.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-12 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-lg rounded-2xl hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/30">
                Start Your Free Trial
              </button>
            </motion.div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}