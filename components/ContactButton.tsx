'use client'
import Link from 'next/link';
import { 
  MessageCircle, 
  Calendar 
} from 'lucide-react';

export default function ContactButton() {
  return (
    <div className="max-w-3xl mx-auto mt-12 sm:mt-14 md:mt-16 px-4 sm:px-6">
      <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border border-white/10 text-center relative overflow-hidden">
        <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-cyan-400 mx-auto mb-4 sm:mb-5 md:mb-6" />
        
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2 sm:mb-3 px-2">
          Still Have Questions?
        </h3>
        
        <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-7 md:mb-8 max-w-md mx-auto px-4">
          Can't find the answer you're looking for? Our team is ready to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <Link
            href="/contact"
            className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-all text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Contact Us
          </Link>

          <Link
            href="/qoute"
            className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-all text-sm sm:text-base"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  );
}