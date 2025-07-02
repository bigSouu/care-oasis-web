
import { Award, Shield, Users, Heart, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-[#f4c2c2] to-[#85211d] mr-4"></div>
                <span className="text-[#85211d] font-bold text-sm uppercase tracking-wider">About Our Clinic</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Kaachire <span className="text-gradient">Medical Center</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over 13 years, Kaachire Clinic has been a cornerstone of healthcare excellence in the Meduma community. 
                We combine professional medical expertise with compassionate care to deliver the best possible outcomes for our patients.
              </p>
            </div>
            
            <div className="space-y-6 mb-10 stagger-animation">
              {[
                { icon: Award, title: "NHIS Accredited Healthcare Facility", desc: "Certified quality assurance" },
                { icon: Shield, title: "Advanced Patient Safety Protocols", desc: "Your safety is our priority" },
                { icon: Users, title: "22+ Medical Professionals", desc: "Expert healthcare team" },
                { icon: Clock, title: "24/7 Emergency Services", desc: "Always here when you need us" }
              ].map((item, index) => (
                <div key={index} className="flex items-start group cursor-pointer">
                  <div className="bg-gradient-to-br from-[#f4c2c2] to-[#85211d] rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#85211d] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#f4c2c2] to-[#85211d] hover:from-[#85211d] hover:to-[#f4c2c2] text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </Button>
              <Button variant="outline" className="border-2 border-[#85211d] text-[#85211d] hover:bg-[#85211d] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Book Appointment
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#f4c2c2] to-transparent rounded-full opacity-50 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#85211d] to-transparent rounded-full opacity-30 animate-float"></div>
              
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop"
                alt="Medical team collaboration at Kaachire Medical Center"
                className="rounded-3xl shadow-2xl w-full h-auto clinic-card"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#85211d]">13+</div>
                      <div className="text-sm text-gray-700">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#85211d]">22</div>
                      <div className="text-sm text-gray-700">Staff</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 glass-effect rounded-full p-3 animate-pulse-slow">
                <Star className="h-6 w-6 text-[#f4c2c2] fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
