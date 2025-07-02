
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
            <div className="glass-effect rounded-full px-6 py-3 inline-flex items-center space-x-3 animate-scale-in bg-white/20 backdrop-blur-md border border-white/30">
              <Heart className="h-5 w-5 text-white fill-current animate-pulse" />
              <span className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-lg">NHIS Accredited Healthcare Provider</span>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-white drop-shadow-2xl">
                  Kaachire
                </span>
                <span className="block text-5xl lg:text-6xl text-white mt-2 drop-shadow-2xl">
                  Medical Center
                </span>
              </h1>
              <p className="text-xl font-medium text-white/95 mb-2 drop-shadow-lg">
                Quality Healthcare Services Since 2011
              </p>
            </div>

            {/* Professional Description */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg text-white/95 leading-relaxed max-w-xl mb-6 drop-shadow-md bg-black/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                Providing high quality and accessible healthcare services to the Meduma community. 
                Your trusted partner in health with professional medical care and state-of-the-art facilities.
              </p>
              
              {/* Professional stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">13+</div>
                  <div className="text-sm text-white/90 drop-shadow-sm">Years Experience</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">22</div>
                  <div className="text-sm text-white/90 drop-shadow-sm">Medical Staff</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">24/7</div>
                  <div className="text-sm text-white/90 drop-shadow-sm">Emergency Care</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button className="bg-white hover:bg-white/90 text-[#85211d] px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Book Appointment →
              </Button>
              <Button variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#85211d] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Emergency Services
              </Button>
            </div>

            {/* Doctor Info */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 animate-fade-in border border-white/30" style={{ animationDelay: '1.2s' }}>
              <p className="text-white font-semibold mb-1 drop-shadow-sm">Medical Director</p>
              <p className="text-white text-lg font-bold drop-shadow-sm">Dr. Ernest Anim Boateng</p>
              <p className="text-white/90 text-sm drop-shadow-sm">MD, MPH - Board Certified</p>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent rounded-3xl transform -rotate-3"></div>
              
              <img
                src="/lovable-uploads/43101139-05e6-4e6a-b133-9baefdf6b6c0.png"
                alt="Professional healthcare team at Kaachire Clinic"
                className="relative w-full h-auto max-w-2xl mx-auto rounded-3xl shadow-2xl animate-float"
              />
            </div>
            
            {/* Enhanced Social Media Icons */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 space-y-4 animate-slide-in stagger-animation border border-white/30">
                <Facebook className="h-7 w-7 text-white hover:text-white/80 cursor-pointer transition-all duration-300 hover:scale-125 drop-shadow-lg" />
                <Instagram className="h-7 w-7 text-white hover:text-white/80 cursor-pointer transition-all duration-300 hover:scale-125 drop-shadow-lg" />
                <Youtube className="h-7 w-7 text-white hover:text-white/80 cursor-pointer transition-all duration-300 hover:scale-125 drop-shadow-lg" />
                <Twitter className="h-7 w-7 text-white hover:text-white/80 cursor-pointer transition-all duration-300 hover:scale-125 drop-shadow-lg" />
              </div>
            </div>

            {/* Professional badges */}
            <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md rounded-2xl p-4 animate-pulse-slow border border-white/30">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-white drop-shadow-lg" />
                <div>
                  <p className="text-white font-semibold text-sm drop-shadow-sm">NHIS Accredited</p>
                  <p className="text-white/90 text-xs drop-shadow-sm">Certified Healthcare Provider</p>
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
