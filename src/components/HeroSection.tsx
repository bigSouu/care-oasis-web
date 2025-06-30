
import { Heart, ChevronRight, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded"></div>
        <div className="absolute top-32 left-32 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded"></div>
        <div className="absolute top-20 right-20 w-12 h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 border border-white/20 rounded"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            {/* Heart Icon and Tagline */}
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-green-400" />
              <span className="text-green-400 font-medium text-sm uppercase tracking-wide">WISH YOUR HAPPY LIFE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Preserve Your Health
              <span className="block">And Happiness.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
              We connect you with trusted doctors and healthcare professionals who care about your 
              well-being as much as you do. Whether you need a routine checkup, specialist 
              consultation, or emergency care, we make it easy, fast, and secure.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Discover More <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Wave Pattern */}
            <div className="pt-8">
              <svg width="80" height="20" viewBox="0 0 80 20" className="text-blue-400">
                <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Doctors Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/443eed69-f943-4ada-b5d2-3d693497a4d8.png"
              alt="Professional doctors - male doctor with glasses and female doctor with stethoscopes"
              className="w-full h-auto max-w-2xl mx-auto"
            />
            
            {/* Social Media Icons */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-white/10 backdrop-blur-sm rounded-l-lg p-3">
              <Facebook className="h-6 w-6 text-white hover:text-blue-300 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-white hover:text-pink-300 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-white hover:text-red-300 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-white hover:text-blue-300 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
