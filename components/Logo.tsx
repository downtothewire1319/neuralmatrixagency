'use client';

import Link from 'next/link';
import { Brain } from 'lucide-react';

export default function Logo() {
  return (
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
  );
}