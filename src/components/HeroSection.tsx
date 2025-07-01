
import { Heart, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white overflow-hidden">
      {/* Background medical pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30h30v30H30V30zm15 15h15v15H45V45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            {/* Heart Icon and Tagline */}
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-white fill-current" />
              <span className="text-white font-medium text-sm uppercase tracking-wide">HIGH QUALITY ACCESSIBLE HEALTHCARE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Kaachire Clinic
              <span className="block text-4xl lg:text-5xl">Quality Healthcare Services</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-pink-100 leading-relaxed max-w-lg">
              To be a provider of high quality and accessible health care services, that meets the 
              needs of the communities we serve. Your trusted healthcare partner in Meduma.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-none">
                Book Appointment →
              </Button>
            </div>
          </div>

          {/* Doctors Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/43101139-05e6-4e6a-b133-9baefdf6b6c0.png"
              alt="Professional healthcare team at Kaachire Clinic"
              className="w-full h-auto max-w-2xl mx-auto"
            />
            
            {/* Social Media Icons */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-white/10 backdrop-blur-sm rounded-l-lg p-3">
              <Facebook className="h-6 w-6 text-white hover:text-pink-200 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-white hover:text-pink-200 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-white hover:text-pink-200 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-white hover:text-pink-200 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
