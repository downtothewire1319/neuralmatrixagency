import Link from 'next/link';
import { 
  Rocket, 
  CalendarCheck 
} from 'lucide-react';

const FreeConsultation = () => {
  return (
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
      <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10">
        <Rocket className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-cyan-400 mx-auto mb-4 sm:mb-5 md:mb-6" />
        
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
          Ready to Launch Your Dream Store?
        </h3>
        
        <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-7 md:mb-8 max-w-md mx-auto px-4">
          Let's create a Shopify store that drives real business growth
        </p>
        
        <Link 
          href="/qoute"
          className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold rounded-xl sm:rounded-2xl hover:scale-105 transition text-sm sm:text-base"
        >
          <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          Schedule Free Consultation
        </Link>
      </div>
    </div>
  );
};

export default FreeConsultation;