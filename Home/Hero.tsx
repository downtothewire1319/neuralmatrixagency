'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Truck, Code2, TrendingUp, Zap, Search, Palette } from 'lucide-react';
import Link from 'next/link';
import { MessageCircle, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0f] overflow-hidden pt-20">
      {/* Background Grid + Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent" />

      <div className="container mx-auto px-4 pb-12 pt-4 md:pb-16 md:pt-8 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-medium text-cyan-400">Premium Shopify Agency • 10+ Years Experience</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight sm:leading-none mb-4 sm:mb-6">
            Transform Your Shopify Store<br className="hidden sm:block" />
            Into a <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Revenue Powerhouse</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-lg">
            We craft high-converting Shopify stores, build custom apps, and implement data-driven strategies. 
            From dropshipping to enterprise growth — we help you scale.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
            {['Modern UI/UX', 'Custom Apps', 'Store Optimization', 'SEO', 'Dropshipping'].map((tag) => (
              <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full text-slate-300">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/quote"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-2xl text-base sm:text-lg hover:scale-105 transition-all"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Launch Your Store
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-white/30 hover:border-white/60 rounded-2xl font-medium text-base sm:text-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-x-8 sm:gap-y-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-yellow-400">★</span> 4.9/5 Rating
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-emerald-400">✔</span> 200+ Projects
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-amber-400">🏆</span> Shopify Experts
            </div>
          </div>
        </motion.div>

        {/* Right Expertise Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 md:mt-0"
        >
          <div className="glass border border-cyan-400/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl shadow-cyan-500/10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Our Expertise</h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Palette, label: "Store Design", desc: "Modern UI/UX" },
                { icon: TrendingUp, label: "Redesign", desc: "Store Makeover" },
                { icon: Truck, label: "Dropshipping", desc: "Full Setup" },
                { icon: Code2, label: "Custom Apps", desc: "Development" },
                { icon: Zap, label: "Optimization", desc: "Performance" },
                { icon: Search, label: "SEO", desc: "Rank Higher" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 transition">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg">{item.label}</h4>
                  <p className="text-xs sm:text-sm text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400">300%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Avg. Traffic Boost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">2.5x</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">50+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Custom Apps</div>
              </div>
            </div>

            {/* Free Audit Badge - Responsive position */}
            <div className="absolute -bottom-3 right-4 sm:-bottom-4 sm:right-6 md:right-8 bg-gradient-to-r from-purple-600 to-cyan-500 text-black text-xs sm:text-sm font-medium px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-1 sm:gap-2">
              <span>14-Day Free Audit</span>
              <span className="text-[10px] sm:text-xs bg-black/20 px-1.5 sm:px-2 py-0.5 rounded-full">No commitment</span>
            </div>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
}