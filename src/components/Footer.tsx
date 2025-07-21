
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Award } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#9a2b27] text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-float">
          <Heart className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <Award className="h-12 w-12 text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 animate-fade-in">
            <div className="mb-6">
              <Logo size="large" animated={true} />
            </div>
            <p className="text-[#f4c2c2] text-lg leading-relaxed mb-6 max-w-md">
              Providing high quality and accessible healthcare services to the Meduma community since 2011. 
              Your trusted partner in health and wellness.
            </p>
            <div className="glass-effect rounded-2xl p-6 mb-6">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-[#fffdd0] mr-3" />
                <span className="font-bold text-[#fffdd0] text-lg">NHIS ACCREDITED</span>
              </div>
              <p className="text-[#f4c2c2] font-medium">Dr. Ernest Anim Boateng MD, MPH</p>
              <p className="text-white/80 text-sm">Board Certified Medical Director</p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                <div key={index} className="bg-[#f4c2c2]/20 hover:bg-[#fffdd0] p-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 group">
                  <Icon className="h-6 w-6 text-[#f4c2c2] group-hover:text-[#85211d]" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 text-[#fffdd0]">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Basic Health Care",
                "Maternal & Child Health",
                "Laboratory Services",
                "Ultrasound Scan",
                "Emergency Care"
              ].map((service, index) => (
                <li key={index} className="flex items-center group cursor-pointer">
                  <div className="w-2 h-2 bg-[#f4c2c2] rounded-full mr-3 group-hover:bg-[#fffdd0] transition-colors"></div>
                  <span className="text-[#f4c2c2] group-hover:text-white transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-6 text-[#fffdd0]">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start group cursor-pointer">
                <MapPin className="h-5 w-5 text-[#f4c2c2] mr-3 mt-1 group-hover:text-[#fffdd0] transition-colors" />
                <div>
                  <p className="text-[#f4c2c2] group-hover:text-white transition-colors">Abass Junction PLT 3 BLK D</p>
                  <p className="text-[#f4c2c2] group-hover:text-white transition-colors">Meduma, P.O. Box MJ 50</p>
                  <p className="text-[#f4c2c2] group-hover:text-white transition-colors">Mamponteng, Ghana</p>
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Phone className="h-5 w-5 text-[#f4c2c2] mr-3 group-hover:text-[#fffdd0] transition-colors" />
                <p className="text-[#f4c2c2] group-hover:text-white transition-colors font-medium">0558727124</p>
              </div>
              <div className="flex items-center group cursor-pointer">
                <Mail className="h-5 w-5 text-[#f4c2c2] mr-3 group-hover:text-[#fffdd0] transition-colors" />
                <p className="text-[#f4c2c2] group-hover:text-white transition-colors">kaachreclinic2020@gmail.com</p>
              </div>
            </div>
            
            {/* Emergency highlight */}
            <div className="mt-6 glass-effect rounded-xl p-4 border border-[#f4c2c2]/30">
              <p className="text-[#fffdd0] font-bold text-sm mb-1">24/7 Emergency Services</p>
              <p className="text-white/90 text-sm">Available round the clock for urgent medical care</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#f4c2c2]/30 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#f4c2c2] text-center md:text-left mb-4 md:mb-0">
              &copy; 2024 Kaachire Clinic. All rights reserved. | Quality Healthcare Services Since 2011
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-[#fffdd0] font-semibold">NHIS Accredited</span>
              <span className="text-[#f4c2c2]">•</span>
              <span className="text-[#f4c2c2]">Professional Healthcare Provider</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
