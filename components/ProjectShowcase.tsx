'use client';
import React, { useState } from 'react';
import { 
  Crown, 
  Cpu, 
  TrendingUp, 
  Palette, 
  Truck, 
  Heart, 
  Grid3X3, 
  RefreshCw, 
  Code2, 
  ArrowRight, 
  X, 
  Trophy 
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  results: string;
  icon: React.ElementType;
  tags: string[];
}

const ProjectShowcase: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Fashion Hub",
      category: "store-design",
      description: "Complete Shopify store redesign for a high-end fashion brand. Custom theme development with seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
      results: "+250% Revenue Growth",
      icon: Crown,
      tags: ["Store Design", "UI/UX", "Mobile Optimized"]
    },
    {
      id: 2,
      title: "TechGear Electronics",
      category: "app-development",
      description: "Custom inventory management app with real-time sync and automated order processing system.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
      results: "200+ hrs Saved/Month",
      icon: Cpu,
      tags: ["App Dev", "API Integration", "Automation"]
    },
    {
      id: 3,
      title: "Bloom Cosmetics",
      category: "seo-marketing",
      description: "Comprehensive SEO strategy that boosted organic traffic and search rankings dramatically.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
      results: "+300% Organic Traffic",
      icon: TrendingUp,
      tags: ["SEO", "Content Marketing", "Analytics"]
    },
    {
      id: 4,
      title: "UrbanStyle Store",
      category: "redesign",
      description: "Complete store makeover with modern UI/UX design and optimized mobile experience.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600",
      results: "2.5x Conversion Rate",
      icon: Palette,
      tags: ["Redesign", "UI/UX", "Mobile First"]
    },
    {
      id: 5,
      title: "HomeDecor Dropship",
      category: "dropshipping",
      description: "Full dropshipping store setup with supplier integration and automated fulfillment system.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600",
      results: "$2M+ Sales Generated",
      icon: Truck,
      tags: ["Dropshipping", "Automation", "Supplier Integration"]
    },
    {
      id: 6,
      title: "Fitness Pro App",
      category: "app-development",
      description: "Custom Shopify app for subscription management and member portal integration.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
      results: "500+ Active Users",
      icon: Heart,
      tags: ["App Dev", "Subscriptions", "API"]
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: Grid3X3 },
    { id: "store-design", name: "Store Design", icon: Palette },
    { id: "app-development", name: "App Development", icon: Code2 },
    { id: "redesign", name: "Redesign", icon: RefreshCw },
    { id: "dropshipping", name: "Dropshipping", icon: Truck },
    { id: "seo-marketing", name: "SEO & Marketing", icon: TrendingUp }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <span className="text-xs sm:text-sm font-medium tracking-wider text-blue-400">OUR WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Discover how we've helped businesses transform their Shopify stores and achieve remarkable growth
          </p>
        </div>

        {/* Category Filters - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <cat.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              <span className="hidden xs:inline">{cat.name}</span>
              <span className="xs:hidden">{cat.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-black/60 backdrop-blur-sm rounded-lg text-[10px] sm:text-xs text-white flex items-center gap-1">
                  <project.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                  <span className="hidden xs:inline">{project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                  <span className="xs:hidden">{project.category.split('-')[0]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition">
                    <project.icon className="text-blue-400 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-1.5 sm:px-2 py-0.5 bg-white/5 rounded-md text-[10px] sm:text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Result Badge */}
                <div className="flex items-center gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-white/10">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Trophy className="text-white w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-green-400">{project.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Responsive */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            View All Projects
          </button>
        </div>
      </div>

      {/* Modal - Project Details (Already responsive, keeping as is) */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-white/20 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition"
            >
              <X className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="h-56 sm:h-64 md:h-auto md:w-1/2">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Details */}
              <div className="p-5 sm:p-6 md:p-8 md:w-1/2">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <selectedProject.icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                  {selectedProject.description}
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 rounded-lg text-xs sm:text-sm text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Trophy className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm text-gray-300">Key Result:</span>
                    <span className="text-xs sm:text-sm font-bold text-green-400">{selectedProject.results}</span>
                  </div>
                </div>
                
                <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white text-sm sm:text-base font-medium hover:shadow-lg transition">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;