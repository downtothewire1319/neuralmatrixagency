'use client';
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, Lock, CalendarDays, Users, Globe, CheckCircle, Loader2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  teamSize: string;
  budget: string;
  message: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    timezone: 'EST',
    teamSize: '',
    budget: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const serviceTypes = [
    "Shopify Store Design & Development",
    "Store Redesign & Optimization",
    "Shopify App Development",
    "Dropshipping Store Setup",
    "SEO & Digital Marketing",
    "Conversion Rate Optimization",
    "Custom Feature Development",
    "Consultation Call"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const timezones = [
    "EST (Eastern Time)",
    "CST (Central Time)",
    "MST (Mountain Time)",
    "PST (Pacific Time)",
    "GMT (London)",
    "CET (Central Europe)",
    "IST (India)",
    "AEST (Australia)"
  ];

  const teamSizes = [
    "Just me",
    "2-5 people",
    "6-20 people",
    "21-50 people",
    "50+ people"
  ];

  const budgets = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet"
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }
    
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred date";
    }
    
    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a preferred time";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Booking submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        timezone: 'EST',
        teamSize: '',
        budget: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
          <div className="text-center py-12 px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="text-white w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Thank you for scheduling a consultation with us!
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mb-6">
              We've sent a confirmation email with calendar invite and meeting details.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="relative pt-24 pb-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container pt-4 md:pt-12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 border border-white/10">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider text-blue-400">BOOK A CONSULTATION</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
                Schedule a{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Free Consultation
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                Let's discuss your project and how we can help grow your business
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left Side - Info Cards */}
              <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">30-Minute Session</h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Get expert advice tailored to your business needs
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">Expert Team</h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Talk directly with our Shopify experts
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">Virtual Meeting</h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Connect via Zoom, Google Meet, or phone call
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-500/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-xs sm:text-sm text-white">100% Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-xs sm:text-sm text-white">No Obligation</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Booking Form */}
              <div className="lg:col-span-2 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-30 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    Book Your Consultation
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-lg sm:rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg sm:rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors`}
                            placeholder="hello@example.com"
                          />
                        </div>
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                        Service Interested In <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border ${errors.serviceType ? 'border-red-500' : 'border-white/10'} rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors`}
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service} className="bg-gray-800">
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && <p className="text-red-400 text-xs mt-1">{errors.serviceType}</p>}
                    </div>

                    {/* Date & Time Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Preferred Date <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={today}
                            max={maxDateStr}
                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/5 border ${errors.preferredDate ? 'border-red-500' : 'border-white/10'} rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors`}
                          />
                        </div>
                        {errors.preferredDate && <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Preferred Time <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/5 border ${errors.preferredTime ? 'border-red-500' : 'border-white/10'} rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors`}
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time} className="bg-gray-800">
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.preferredTime && <p className="text-red-400 text-xs mt-1">{errors.preferredTime}</p>}
                      </div>
                    </div>

                    {/* Timezone & Team Size Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Timezone
                        </label>
                        <select
                          name="timezone"
                          value={formData.timezone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          {timezones.map((tz) => (
                            <option key={tz} value={tz} className="bg-gray-800">
                              {tz}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                          Team Size
                        </label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select team size</option>
                          {teamSizes.map((size) => (
                            <option key={size} value={size} className="bg-gray-800">
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget} className="bg-gray-800">
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                        Additional Information
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-blue-500 transition-colors resize-none"
                          placeholder="Tell us more about your project..."
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                          Schedule Consultation
                        </>
                      )}
                    </button>

                    {/* Trust Text */}
                    <p className="text-center text-[10px] sm:text-xs text-gray-500 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                      Your information is safe with us. We'll never share your data.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookingForm;