'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinkClass = (path: string) =>
    `px-4 py-2 rounded-xl transition-all duration-300 ${
      pathname === path
        ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-white border border-cyan-400/30'
        : 'hover:bg-gradient-to-br hover:from-cyan-400/20 hover:via-purple-500/20 hover:to-violet-500/20 hover:text-white'
    }`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Projects', path: '/project' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'glass border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={navLinkClass(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/qoute"
              className="
                hidden md:inline-flex
                items-center justify-center
                px-5 sm:px-6 py-2 sm:py-2.5
                rounded-full
                font-semibold
                text-white text-sm sm:text-base
                bg-gradient-to-r from-cyan-500 to-purple-600
                border border-cyan-400/30
                transition-all duration-300
                hover:shadow-lg hover:shadow-cyan-500/25
                hover:scale-105
                active:scale-95
              "
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                relative
                w-10 h-10
                rounded-lg
                flex items-center justify-center
                transition-all
                hover:bg-gradient-to-br
                hover:from-cyan-400/20
                hover:via-purple-500/20
                hover:to-violet-500/20
                focus:outline-none
              "
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-2 pb-6 pt-2 space-y-2 border-t border-white/10 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  block px-4 py-3 rounded-xl text-base font-medium
                  transition-all duration-300
                  ${pathname === item.path
                    ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-white border border-cyan-400/30'
                    : 'text-gray-300 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:via-purple-500/20 hover:to-violet-500/20 hover:text-white'
                  }
                `}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              href="/qoute"
              className="
                block mt-4
                px-6 py-3
                rounded-full
                text-center
                font-semibold
                text-white
                bg-gradient-to-r from-cyan-500 to-purple-600
                border border-cyan-400/30
                transition-all duration-300
                hover:shadow-lg hover:shadow-cyan-500/25
                active:scale-95
              "
              onClick={handleLinkClick}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}