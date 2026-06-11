import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Gift, Users } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Neural Matrix transformed our Shopify store completely. Our conversion rate increased by 150% within 3 months. Their team is exceptional and truly cares about our success!",
    author: "Sarah Johnson",
    role: "CEO & Founder",
    company: "FashionHub",
    avatarColor: "from-pink-500 to-rose-500",
    avatarInitials: "SJ"
  },
  {
    id: 2,
    text: "The custom app they built revolutionized our inventory management. Operational efficiency improved by 200%. I've never worked with a more dedicated team!",
    author: "Michael Chen",
    role: "CTO",
    company: "TechGear",
    avatarColor: "from-blue-500 to-cyan-500",
    avatarInitials: "MC"
  },
  {
    id: 3,
    text: "Incredible SEO results! Our organic traffic increased by 300% in just 4 months. Neural Matrix is hands down the best Shopify agency we've partnered with.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Bloom Cosmetics",
    avatarColor: "from-purple-500 to-indigo-500",
    avatarInitials: "ER"
  },
  {
    id: 4,
    text: "The store redesign doubled our mobile conversion rate. Their UI/UX expertise is unmatched. Our customers love the new shopping experience!",
    author: "David Kim",
    role: "Founder",
    company: "UrbanStyle",
    avatarColor: "from-orange-500 to-red-500",
    avatarInitials: "DK"
  },
];

const highlights = [
  "10+ Years of Shopify Excellence",
  "200+ Successful Projects Delivered",
  "300% Average Traffic Increase",
  "2.5x Higher Conversion Rates",
  "24/7 Expert Technical Support",
  "AI-Powered Smart Solutions",
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/30 to-gray-950" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 border border-white/10 mb-4 sm:mb-6">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-widest text-cyan-400">CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter px-2">
            Real Results from 
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Real Brands</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* LEFT: Highlights */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                Why Businesses Choose Neural Matrix
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {highlights.map((text, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 md:gap-4 group"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                      <span className="text-black text-base sm:text-lg md:text-xl font-bold">✓</span>
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition text-sm sm:text-base">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-center border border-white/10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400">98%</div>
                <div className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Client Retention</div>
              </div>
              <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-center border border-white/10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">4.9</div>
                <div className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Testimonial Carousel */}
          <div
            className="relative order-1 lg:order-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="glass border border-cyan-400/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 relative"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-t-2xl sm:rounded-t-3xl" />

                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400/60 mb-4 sm:mb-6 md:mb-8" />

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-slate-200 mb-8 sm:mb-10 md:mb-12 italic">
                  "{current.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${current.avatarColor} rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold shadow-lg`}>
                    {current.avatarInitials}
                  </div>
                  <div>
                    <div className="font-semibold text-lg sm:text-xl md:text-2xl text-white">{current.author}</div>
                    <div className="text-cyan-300 text-sm sm:text-base">{current.role}</div>
                    <div className="text-xs sm:text-sm text-slate-400">{current.company}</div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mt-5 sm:mt-6 md:mt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-5 sm:mt-6 md:mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 sm:h-3 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'bg-cyan-400 w-8 sm:w-10 md:w-12' 
                      : 'bg-white/30 hover:bg-white/50 w-2 sm:w-3'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="hidden sm:flex absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/70 backdrop-blur border border-white/10 rounded-full items-center justify-center hover:bg-cyan-400 hover:text-black transition-all"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="hidden sm:flex absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/70 backdrop-blur border border-white/10 rounded-full items-center justify-center hover:bg-cyan-400 hover:text-black transition-all"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}