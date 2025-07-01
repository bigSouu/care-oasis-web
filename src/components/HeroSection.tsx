
import { Heart, Facebook, Instagram, Youtube, Twitter, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen clinic-gradient text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Shield className="h-6 w-6 text-white" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Award className="h-10 w-10 text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 animate-slide-in">
            {/* Professional Badge */}
            <div className="glass-effect rounded-full px-6 py-3 inline-flex items-center space-x-3 animate-scale-in">
              <Heart className="h-5 w-5 text-[#fffdd0] fill-current animate-pulse" />
              <span className="text-[#fffdd0] font-bold text-sm uppercase tracking-wider">NHIS Accredited Healthcare Provider</span>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-gradient bg-gradient-to-r from-white to-[#fffdd0] bg-clip-text text-transparent">
                  Kaachire
                </span>
                <span className="block text-5xl lg:text-6xl text-[#fffdd0] mt-2">
                  Medical Center
                </span>
              </h1>
              <p className="text-xl font-medium text-[#fffdd0]/90 mb-2">
                Quality Healthcare Services Since 2011
              </p>
            </div>

            {/* Professional Description */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-6">
                Providing high quality and accessible healthcare services to the Meduma community. 
                Your trusted partner in health with professional medical care and state-of-the-art facilities.
              </p>
              
              {/* Professional stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center glass-effect rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#fffdd0]">13+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center glass-effect rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#fffdd0]">22</div>
                  <div className="text-sm text-white/80">Medical Staff</div>
                </div>
                <div className="text-center glass-effect rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#fffdd0]">24/7</div>
                  <div className="text-sm text-white/80">Emergency Care</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button className="bg-[#fffdd0] hover:bg-white text-[#85211d] px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Book Appointment →
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#85211d] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Emergency Services
              </Button>
            </div>

            {/* Doctor Info */}
            <div className="glass-effect rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <p className="text-[#fffdd0] font-semibold mb-1">Medical Director</p>
              <p className="text-white text-lg font-bold">Dr. Ernest Anim Boateng</p>
              <p className="text-white/80 text-sm">MD, MPH - Board Certified</p>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffdd0]/20 to-transparent rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent rounded-3xl transform -rotate-3"></div>
              
              <img
                src="/lovable-uploads/43101139-05e6-4e6a-b133-9baefdf6b6c0.png"
                alt="Professional healthcare team at Kaachire Clinic"
                className="relative w-full h-auto max-w-2xl mx-auto rounded-3xl shadow-2xl animate-float"
              />
            </div>
            
            {/* Enhanced Social Media Icons */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
              <div className="glass-effect rounded-2xl p-4 space-y-4 animate-slide-in stagger-animation">
                <Facebook className="h-7 w-7 text-white hover:text-[#fffdd0] cursor-pointer transition-all duration-300 hover:scale-125" />
                <Instagram className="h-7 w-7 text-white hover:text-[#fffdd0] cursor-pointer transition-all duration-300 hover:scale-125" />
                <Youtube className="h-7 w-7 text-white hover:text-[#fffdd0] cursor-pointer transition-all duration-300 hover:scale-125" />
                <Twitter className="h-7 w-7 text-white hover:text-[#fffdd0] cursor-pointer transition-all duration-300 hover:scale-125" />
              </div>
            </div>

            {/* Professional badges */}
            <div className="absolute bottom-8 left-8 glass-effect rounded-2xl p-4 animate-pulse-slow">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#fffdd0]" />
                <div>
                  <p className="text-white font-semibold text-sm">NHIS Accredited</p>
                  <p className="text-white/80 text-xs">Certified Healthcare Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
