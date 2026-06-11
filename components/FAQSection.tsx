'use client';
import React, { useState } from 'react';
import { 
  Clock, 
  Headphones, 
  DollarSign, 
  TrendingUp, 
  Palette, 
  Truck, 
  MessageCircle, 
  Calendar 
} from 'lucide-react';
import Link from 'next/link';
import ContactButton from './ContactButton';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "How long does it take to build a Shopify store?",
      answer: "The timeline depends on the complexity of your project. A basic store can be ready in 2-4 weeks, while a custom store with advanced features may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
      icon: Clock
    },
    {
      id: 2,
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes! We offer flexible maintenance plans including 24/7 monitoring, regular updates, security patches, and emergency support. Our support team is always available to help with any issues.",
      icon: Headphones
    },
    {
      id: 3,
      question: "How much does Shopify app development cost?",
      answer: "App development costs vary based on complexity, features, and integrations. Simple apps start at $5,000, while complex enterprise solutions can range from $15,000 to $50,000+. Contact us for a custom quote.",
      icon: DollarSign
    },
    {
      id: 4,
      question: "Can you help with SEO and marketing?",
      answer: "Absolutely! We offer comprehensive SEO services including audit, keyword research, on-page optimization, content strategy, and performance tracking. Our SEO packages are tailored to your specific goals.",
      icon: TrendingUp
    },
    {
      id: 5,
      question: "What's included in store redesign service?",
      answer: "Our redesign service includes UX audit, competitor analysis, custom design, mobile optimization, speed optimization, improved navigation, and checkout flow optimization. We ensure your new design converts better.",
      icon: Palette
    },
    {
      id: 6,
      question: "Do you offer dropshipping store setup?",
      answer: "Yes! We provide complete dropshipping store setup including supplier integration, automated order processing, inventory synchronization, and profit tracking. We'll help you choose the best suppliers.",
      icon: Truck
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/30 to-gray-950" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-20 right-20 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 border border-white/10">
            <span className="text-cyan-400 text-xs sm:text-sm">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 sm:mb-4 px-2">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-4">
            Find answers to common questions about our services and process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.id}
              className="group glass rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-400/30"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-4 sm:p-5 md:p-6 flex items-center justify-between gap-3 sm:gap-4"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-1">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-cyan-400 transition pr-2">
                    {faq.question}
                  </h3>
                </div>

                <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <span className="text-base sm:text-lg md:text-xl">↓</span>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48' : 'max-h-0'}`}>
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6">
                  <div className="pl-10 sm:pl-12 md:pl-14">
                    <div className="w-6 h-0.5 sm:w-7 sm:h-0.5 md:w-8 md:h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mb-2 sm:mb-3" />
                    <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;