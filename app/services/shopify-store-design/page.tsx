'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Smartphone, 
  TrendingUp, 
  Zap, 
  Palette, 
  Users, 
  Search, 
  Compass, 
  ShieldCheck, 
  Lightbulb, 
  Compass as CompassIcon, 
  Paintbrush, 
  Code2, 
  TestTube, 
    CheckCircle,
  Rocket, 
  CalendarCheck 
} from 'lucide-react';
import FreeConsultation from '@/components/FreeConsultation'; 

const ShopifyStoreDesign: React.FC = () => {
  const features = [
    {
      title: "Custom Responsive Design",
      description: "Fully responsive stores that look perfect on all devices - desktop, tablet, and mobile.",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Conversion-Focused Layout",
      description: "Strategic design elements optimized to maximize conversions and sales.",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Fast Loading Performance",
      description: "Optimized code and assets for lightning-fast page load speeds.",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Custom Theme Development",
      description: "Unique, bespoke themes tailored to your brand identity.",
      icon: Palette,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile-First Approach",
      description: "Designed for mobile users first, ensuring seamless experience on smartphones.",
      icon: Users,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "SEO Optimized Structure",
      description: "Clean code and semantic HTML for better search engine rankings.",
      icon: Search,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "User-Friendly Navigation",
      description: "Intuitive menus and product categorization for easy browsing.",
      icon: Compass,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Secure Payment Integration",
      description: "Integration with secure payment gateways including Shopify Payments, Stripe, PayPal.",
      icon: ShieldCheck,
      color: "from-red-500 to-pink-500"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We learn about your brand, goals, and target audience", icon: Lightbulb },
    { step: "02", title: "Planning", description: "Strategic planning and wireframing your store layout", icon: CompassIcon },
    { step: "03", title: "Design", description: "Creative design with your brand identity", icon: Paintbrush },
    { step: "04", title: "Development", description: "Building your store with clean, optimized code", icon: Code2 },
    { step: "05", title: "Testing", description: "Rigorous testing across all devices and browsers", icon: TestTube },
    { step: "06", title: "Launch", description: "Deployment and post-launch support", icon: Rocket }
  ];

  const benefits = [
    "200% Average ROI increase",
    "50% Faster load times",
    "30% Higher conversion rates",
    "24/7 Post-launch support",
    "Free 30-day maintenance",
    "SEO-ready structure"
  ];

  return (
    <>
      <Navbar />
      <section className="relative py-24 md:py-28 overflow-hidden bg-[#0a0a0f]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/10">
              <span className="text-sm font-medium tracking-wider text-cyan-400">SHOPIFY STORE DESIGN</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Professional{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shopify Store Design
              </span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Create a stunning, high-converting Shopify store that reflects your brand and drives sales
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center justify-center">
            {/* Left Side - Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What's Included in Our Design Service
              </h2>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                    <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                      <feature.icon className="w-5 h-5 text-black" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-3xl opacity-30 blur-lg"></div>
              <div className="relative glass rounded-3xl p-8 border border-white/10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="mt-10 block w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-2xl text-center hover:scale-105 transition-all"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
              <p className="text-slate-400">A proven 6-step approach to deliver exceptional results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all group"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition">
                    <step.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <FreeConsultation />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopifyStoreDesign;