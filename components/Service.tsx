'use client';
import React, { useState } from 'react';
import { 
  ShoppingCart, 
  RefreshCw, 
  Palette, 
  Code2, 
  Puzzle, 
  Truck, 
  Headphones, 
  TrendingUp, 
  Search, 
  Megaphone, 
  Rocket 
} from 'lucide-react';
import Link from 'next/link';
import FreeConsultation from './FreeConsultation';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  popular?: boolean;
  slug?: string;
}

const Service: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const services: Service[] = [
    {
      id: 1,
      title: "Shopify Store Design & Development",
      description: "Custom, high-converting Shopify stores built with best practices and cutting-edge design that drives sales.",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "Fast Loading", "Custom Themes", "Mobile Optimized"],
      popular: true,
      slug: "shopify-store-design"
    },
    {
      id: 2,
      title: "Store Redesign & Optimization",
      description: "Transform your existing store with modern design and performance optimization for better conversions.",
      icon: RefreshCw,
      color: "from-purple-500 to-pink-500",
      features: ["UX Audit", "Performance Boost", "Modern UI", "Faster Checkout"],
      slug: "store-redesign"
    },
    {
      id: 3,
      title: "Branding & Brand Identity",
      description: "Distinctive brand identities that resonate with your target audience and stand out from competitors.",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      slug: "branding"
    },
    {
      id: 4,
      title: "Shopify App Development",
      description: "Custom Shopify apps that extend functionality and streamline your business operations.",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
      features: ["Private Apps", "Public Apps", "API Integration", "Custom Features"],
      slug: "app-development"
    },
    {
      id: 5,
      title: "Custom Feature Development",
      description: "Tailored solutions for unique business requirements and complex workflows.",
      icon: Puzzle,
      color: "from-orange-500 to-red-500",
      features: ["Custom Checkout", "Inventory Management", "B2B Features", "Automation"],
      slug: "custom-features"
    },
    {
      id: 6,
      title: "Dropshipping Store Setup",
      description: "End-to-end dropshipping store setup with supplier integration and automated fulfillment.",
      icon: Truck,
      color: "from-cyan-500 to-blue-500",
      features: ["Supplier Integration", "Auto Order Processing", "Inventory Sync", "Profit Tracking"],
      slug: "dropshipping-store"
    },
    {
      id: 7,
      title: "Store Maintenance & Support",
      description: "Ongoing maintenance, security updates, and 24/7 technical support for peace of mind.",
      icon: Headphones,
      color: "from-indigo-500 to-purple-500",
      features: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Emergency Support"],
      slug: "maintenance-support"
    },
    {
      id: 8,
      title: "Conversion Rate Optimization",
      description: "Data-driven strategies to maximize your store's conversion potential and revenue.",
      icon: TrendingUp,
      color: "from-red-500 to-pink-500",
      features: ["A/B Testing", "UX Optimization", "Analytics Setup", "Funnel Analysis"],
      slug: "conversion-optimization"
    },
    {
      id: 9,
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO and marketing strategies to drive traffic and boost sales.",
      icon: Search,
      color: "from-yellow-500 to-orange-500",
      features: ["SEO Audit", "Keyword Strategy", "Content Marketing", "Social Media"],
      slug: "seo-marketing"
    },
    {
      id: 10,
      title: "Marketing & Ads Promotion",
      description: "Strategic marketing and promotion of your existing Shopify apps to reach more users.",
      icon: Megaphone,
      color: "from-teal-500 to-green-500",
      features: ["App Store SEO", "User Acquisition", "Review Management", "Analytics"],
      slug: "ads-promotion" 
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "design", name: "Design & Branding" },
    { id: "development", name: "Development" },
    { id: "marketing", name: "Marketing & SEO" },
    { id: "support", name: "Support & Maintenance" }
  ];

  const getCategoryId = (title: string): string => {
    if (title.includes("Design") || title.includes("Branding") || title.includes("Redesign")) return "design";
    if (title.includes("Development") || title.includes("App") || title.includes("Feature") || title.includes("SaaS")) return "development";
    if (title.includes("SEO") || title.includes("Marketing") || title.includes("Conversion") || title.includes("Promotion")) return "marketing";
    if (title.includes("Maintenance") || title.includes("Support")) return "support";
    return "all";
  };

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => getCategoryId(service.title) === activeCategory);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container pt-12 md:pt-12  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wider text-blue-400">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shopify Solutions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            End-to-end services to build, grow, and scale your Shopify business
          </p>
        </div>

        {/* Category Filters (Tabs) - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredServices.map((service) => (
            <Link 
              key={service.id} 
              href={`/services/${service.slug}`}
              className="group block"
            >
              <div
                className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 cursor-pointer h-full"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    {service.popular && (
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-yellow-500/20 text-yellow-400 text-[10px] sm:text-xs rounded-full border border-yellow-500/30 font-medium">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/5 rounded-md text-[10px] sm:text-xs text-gray-400">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-400 mt-5 sm:mt-6 md:mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More →
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="pt-4 sm:pt-6 md:pt-8 text-center">
          <FreeConsultation />
        </div>
      </div>
    </section>
  );
};

export default Service;