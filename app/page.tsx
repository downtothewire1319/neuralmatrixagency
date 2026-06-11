'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Hero from '@/Home/Hero';
import Testimonial from '@/Home/Testimonial';
import ProjectShowcase from '@/components/ProjectShowcase';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/Home/ContactForm';
import Service from '@/Home/Service';


export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <Hero />


      <Service />
      <ProjectShowcase />
      <Testimonial />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  );
}