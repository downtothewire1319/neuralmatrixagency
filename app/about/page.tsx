'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Users, 
  Rocket, 
  Award, 
  Globe, 
  Coffee, 
  Heart, 
  Target, 
  Zap,
  CheckCircle,
  TrendingUp,
  Code2,
  ShoppingBag,
  Headphones,
  Shield,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Calendar as CalendarIcon
} from 'lucide-react';
import FreeConsultation from '@/components/FreeConsultation';

const AboutUs: React.FC = () => {
  const stats = [
    { value: "10+", label: "Years Experience", icon: CalendarIcon, color: "from-blue-500 to-cyan-500" },
    { value: "200+", label: "Projects Completed", icon: Code2, color: "from-purple-500 to-pink-500" },
    { value: "98%", label: "Client Satisfaction", icon: Heart, color: "from-pink-500 to-rose-500" },
    { value: "24/7", label: "Support Available", icon: Headphones, color: "from-green-500 to-emerald-500" }
  ];

  const values = [
    { title: "Innovation First", description: "We embrace cutting-edge technology to deliver exceptional results", icon: Zap, color: "from-blue-500 to-cyan-500" },
    { title: "Client Success", description: "Your success is our success. We're committed to your growth", icon: Target, color: "from-purple-500 to-pink-500" },
    { title: "Quality Assurance", description: "We never compromise on quality and attention to detail", icon: Shield, color: "from-green-500 to-emerald-500" },
    { title: "Global Excellence", description: "Serving clients worldwide with Shopify expertise", icon: Globe, color: "from-orange-500 to-red-500" }
  ];

  const team = [
    { name: "Alex Morgan", role: "CEO & Founder", experience: "12+ years in e-commerce", emoji: "👨‍💼", color: "from-blue-500 to-cyan-500" },
    { name: "Sarah Chen", role: "Lead Developer", experience: "8+ years Shopify expert", emoji: "👩‍💻", color: "from-purple-500 to-pink-500" },
    { name: "Michael Rodriguez", role: "UI/UX Director", experience: "10+ years design", emoji: "🎨", color: "from-orange-500 to-red-500" },
    { name: "Emily Watson", role: "SEO Specialist", experience: "7+ years marketing", emoji: "📈", color: "from-green-500 to-emerald-500" }
  ];

  const milestones = [
    { year: "2014", title: "Company Founded", description: "Started with a vision to transform e-commerce" },
    { year: "2016", title: "Shopify Partner", description: "Became official Shopify Partners" },
    { year: "2019", title: "100 Projects", description: "Reached 100 successful projects milestone" },
    { year: "2022", title: "Global Expansion", description: "Expanded services to international clients" },
    { year: "2024", title: "500+ Apps", description: "Developed over 500 custom Shopify apps" }
  ];

  return (
    <>
      <Navbar />
      <section className="relative pt-20 pb-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-[#0a0a0f]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container pt-4 md:pt-12  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 border border-white/10">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider text-cyan-400">ABOUT US</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
              We're on a Mission to{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform E-commerce
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto px-4">
              Neural Matrix is a leading Shopify agency dedicated to helping businesses thrive in the digital marketplace. 
              With over a decade of experience, we've helped 200+ clients achieve remarkable growth.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl glass border border-white/10 hover:border-cyan-400/30 transition-all hover:-translate-y-1"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-slate-400 leading-relaxed text-sm sm:text-base">
                <p>
                  Founded in 2014, Neural Matrix started with a simple yet powerful vision: 
                  to help businesses unlock their full potential through exceptional Shopify solutions.
                </p>
                <p>
                  What began as a small team of passionate developers has grown into a full-service 
                  Shopify agency with expertise across design, development, marketing, and app creation.
                </p>
                <p>
                  Today, we're proud to be trusted by over 200 businesses worldwide.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-2xl sm:rounded-3xl opacity-30 blur-lg"></div>
              <div className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">Our Mission</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Empower businesses through innovative e-commerce solutions</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm sm:text-base">
                  To democratize e-commerce success by providing world-class Shopify solutions 
                  that are accessible, scalable, and results-driven.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Core Values</h2>
              <p className="text-slate-400 text-sm sm:text-base">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl glass border border-white/10 hover:border-cyan-400/30 transition-all hover:-translate-y-2 group"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition`}>
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <FreeConsultation />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;