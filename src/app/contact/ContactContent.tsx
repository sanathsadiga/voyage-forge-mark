"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ArrowRight, Users, Headphones, Calendar } from "lucide-react";
import { useState } from "react";

// Contact method icons matching your AboutUsContent pattern
const PhoneIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SupportIcon = (): React.ReactElement => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

interface ContactMethod {
  icon: () => React.ReactElement;
  title: string;
  description: string;
  detail: string;
  link: string;
  gradient: string;
  iconColor: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "Speak directly with our founder about your travel business needs and get personalized guidance.",
    detail: "+91 9483730167",
    link: "tel:+919483730167",
    gradient: "from-emerald-400/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    icon: EmailIcon,
    title: "Email Support",
    description: "Get detailed responses to your questions and technical inquiries within 24 hours.",
    detail: "founder@voyage-forge.com",
    link: "mailto:founder@voyage-forge.com",
    gradient: "from-blue-400/20 to-indigo-500/20",
    iconColor: "text-blue-400"
  },
  {
    icon: LocationIcon,
    title: "Our Location",
    description: "Based in the tech hub of India, serving global travel businesses across all time zones.",
    detail: "Bangalore, India",
    link: "#",
    gradient: "from-purple-400/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    icon: SupportIcon,
    title: "Business Hours",
    description: "Available to support your travel business growth during these hours, with emergency support available.",
    detail: "Mon-Fri: 9AM-6PM IST",
    link: "#",
    gradient: "from-amber-400/20 to-orange-500/20",
    iconColor: "text-amber-400"
  }
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again or contact us directly at founder@voyage-forge.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section - Matching AboutUsContent pattern exactly */}
      <main className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 px-4 sm:px-8 pt-24 pb-20 overflow-hidden">
        {/* Enhanced background orbs and effects - exact match */}
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
            💬 Get in Touch with Travel AI Experts
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-200 leading-tight tracking-tight mb-8"
          >
            Contact Us
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to transform your travel business with AI? Let's discuss how Voyage Forge can help you create stunning content and grow your business.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919483730167"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 hover:from-amber-500 hover:via-orange-500 hover:to-yellow-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact-form')}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </span>
            </motion.button>
          </motion.div>

          {/* Quick stats matching AboutUsContent */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "2,500+", label: "Travel Businesses" },
              { number: "24/7", label: "Support Available" },
              { number: "15min", label: "Response Time" },
              { number: "4.9/5", label: "Customer Rating" }
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

      {/* Contact Methods Section - Matching AboutUsContent pattern */}
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
                Multiple Ways to Connect
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose the communication method that works best for you. We're here to help your travel business succeed.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {contactMethods.slice(0, 2).map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} border border-${method.iconColor.replace('text-', '')}/30 flex items-center justify-center`}>
                    <div className={method.iconColor}>
                      <method.icon />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{method.title}</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {method.description}
                </p>
                {method.link !== '#' ? (
                  <a
                    href={method.link}
                    className={`text-2xl font-bold ${method.iconColor} hover:text-white transition-colors duration-300`}
                  >
                    {method.detail}
                  </a>
                ) : (
                  <span className={`text-2xl font-bold ${method.iconColor}`}>
                    {method.detail}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {contactMethods.slice(2, 4).map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} border border-${method.iconColor.replace('text-', '')}/30 flex items-center justify-center`}>
                    <div className={method.iconColor}>
                      <method.icon />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{method.title}</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {method.description}
                </p>
                {method.link !== '#' ? (
                  <a
                    href={method.link}
                    className={`text-2xl font-bold ${method.iconColor} hover:text-white transition-colors duration-300`}
                  >
                    {method.detail}
                  </a>
                ) : (
                  <span className={`text-2xl font-bold ${method.iconColor}`}>
                    {method.detail}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Matching AboutUsContent pattern */}
      <section id="contact-form" className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/6 to-teal-400/6 rounded-full blur-3xl animate-pulse" />
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
                Let's Start a Conversation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you're a tour operator, travel agency, or travel guide, we're here to help you leverage AI for creating compelling travel content that converts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Voyage Forge?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 border border-emerald-400/30 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Trusted by 2,500+ Travel Professionals</h4>
                    <p className="text-gray-300 leading-relaxed">Join successful travel businesses using our platform to create compelling content that converts visitors into customers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 border border-blue-400/30 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Free 30-Minute Consultation</h4>
                    <p className="text-gray-300 leading-relaxed">Get personalized advice for your travel business and discover how AI can transform your content strategy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-purple-400/30 rounded-xl flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">24/7 Expert Support</h4>
                    <p className="text-gray-300 leading-relaxed">Our travel industry experts are available round-the-clock to help you maximize your platform usage.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl p-8 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                    placeholder="Your Travel Company"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your travel business and how we can help you grow with AI-powered content creation..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`group w-full inline-flex items-center justify-center px-8 py-4 text-black font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl ${
                    isSubmitted 
                      ? 'bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 hover:from-emerald-500 hover:via-green-500 hover:to-teal-500 hover:shadow-emerald-500/25' 
                      : isSubmitting
                      ? 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 hover:from-amber-500 hover:via-orange-500 hover:to-yellow-500 hover:shadow-amber-500/25'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isSubmitted ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent Successfully!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Success message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-gradient-to-r from-emerald-400/20 to-green-400/20 border border-emerald-400/30 rounded-xl backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 text-emerald-200">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="flex-1">
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm text-emerald-300">We've received your message and will respond within 24 hours. Check your email for confirmation.</p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-3 py-1 bg-emerald-400/20 hover:bg-emerald-400/30 border border-emerald-400/30 rounded-lg text-emerald-200 text-sm font-medium transition-colors duration-200"
                      >
                        Send Another
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching AboutUsContent pattern */}
      <section className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-yellow-400/10 backdrop-blur-xl border-y border-amber-400/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-12 top-1/2 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute right-6 top-1/2 w-[32rem] h-80 bg-gradient-to-l from-purple-500/8 to-indigo-600/8 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent">
              Ready to Transform Your Travel Business?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join 2,500+ travel professionals creating stunning content with AI. Start your free trial today and see the difference our platform can make.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://app.voyage-forge.com/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 hover:from-amber-500 hover:via-orange-500 hover:to-yellow-500 text-black font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/pricing"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              View Pricing Plans
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}