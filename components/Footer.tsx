import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Facebook,
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ChevronRight,
  Shield,
  Award,
  Globe
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "CeoClaw", href: "https://ceoclaw.io/" },
    { name: "Gang Sheet Pro", href: "https://gangsheet.pro/" },
    { name: "Upload Pro", href: "https://apps.shopify.com/file-uploder-pro" },
    { name: "Maya Phone", href: "https://mayaphone.com/" },
    { name: "MayaHelp", href: "https://mayahelp.ai/" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-[#333]" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-[#1877F2]" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1 - Logo & About */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <Brain className="w-8 h-8 text-blue-500 group-hover:text-purple-500 transition-all duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Neural Matrix
                  </span>
                  <p className="text-[10px] text-gray-500">Premium Shopify Agency</p>
                </div>
              </Link>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming e-commerce businesses with AI-powered Shopify solutions and cutting-edge technology since 2014.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] text-gray-400">SSL Secure</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg">
                  <Award className="w-3 h-3 text-yellow-500" />
                  <span className="text-[10px] text-gray-400">Shopify Partner</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg">
                  <Globe className="w-3 h-3 text-blue-500" />
                  <span className="text-[10px] text-gray-400">Global Agency</span>
                </div>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
                Other Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
                Get in Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Us</p>
                    <a href="mailto:hello@neuralmatrix.com" className="text-sm text-gray-400 hover:text-white transition">
                      hello@neuralmatrix.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <Phone className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Us</p>
                    <a href="tel:+15551234567" className="text-sm text-gray-400 hover:text-white transition">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                
                
               
              </div>
            </div>
          </div>
        </div>

       

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} Neural Matrix. All rights reserved.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-white transition">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="/terms" className="text-gray-500 hover:text-white transition">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="/cookies" className="text-gray-500 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;