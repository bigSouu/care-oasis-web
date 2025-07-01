
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Heart, Shield, Star, Handshake, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative clinic-gradient text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
            <Activity className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="glass-effect rounded-full px-8 py-4 inline-flex items-center space-x-3 mb-8 animate-scale-in">
              <Award className="h-6 w-6 text-[#fffdd0]" />
              <span className="text-[#fffdd0] font-bold text-sm uppercase tracking-wider">Since 2011</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-slide-in">
              About <span className="text-[#fffdd0]">Kaachire Clinic</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Established in 2011, serving the Meduma community with quality healthcare services 
              and a commitment to excellence in patient care for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 stagger-animation">
            <div className="clinic-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f4c2c2] to-transparent rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <Heart className="h-16 w-16 text-[#f4c2c2] mb-6 animate-pulse-slow" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                To be a provider of high quality and accessible health care services, 
                that meets the needs of the communities we serve with compassion and excellence.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#f4c2c2]/10 to-transparent rounded-xl">
                <Heart className="h-8 w-8 text-[#85211d]" />
                <div>
                  <h3 className="font-bold text-gray-900">Community Care</h3>
                  <p className="text-gray-600 text-sm">Serving with dedication since 2011</p>
                </div>
              </div>
            </div>
            
            <div className="clinic-card p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#85211d] to-transparent rounded-full -translate-y-12 -translate-x-12 opacity-20"></div>
              <Award className="h-16 w-16 text-[#85211d] mb-6 animate-pulse-slow" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                To be chosen as our community's health care leader for its commitment 
                to excellence and its response to changing customer needs.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#85211d]/10 to-transparent rounded-xl">
                <Award className="h-8 w-8 text-[#85211d]" />
                <div>
                  <h3 className="font-bold text-gray-900">Excellence in Care</h3>
                  <p className="text-gray-600 text-sm">Leading healthcare innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do in our mission to provide exceptional healthcare</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 stagger-animation">
            {[
              { icon: Shield, title: "Trust", desc: "Building lasting relationships with patients through transparency", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Handshake, title: "Cooperation", desc: "Working together for better health outcomes", color: "text-green-600", bg: "bg-green-50" },
              { icon: Star, title: "Quality", desc: "Delivering excellence in every medical service", color: "text-yellow-600", bg: "bg-yellow-50" },
              { icon: Users, title: "Team Work", desc: "Collaborative approach to comprehensive healthcare", color: "text-purple-600", bg: "bg-purple-50" },
              { icon: Heart, title: "Respect", desc: "Treating every patient with dignity and compassion", color: "text-[#85211d]", bg: "bg-[#f4c2c2]/20" }
            ].map((value, index) => (
              <div key={index} className="clinic-card text-center p-8 group hover:scale-105 transition-all duration-300">
                <div className={`${value.bg} rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:animate-pulse`}>
                  <value.icon className={`h-12 w-12 ${value.color} mx-auto`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Stats */}
      <section className="py-20 clinic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 animate-float">
            <Users className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 left-20 animate-float" style={{ animationDelay: '3s' }}>
            <Clock className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Our Professional Team</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Dedicated healthcare professionals committed to your wellbeing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {[
              { number: "22", label: "Total Staff Members", icon: Users, color: "text-[#fffdd0]" },
              { number: "1", label: "Medical Doctor", icon: Award, color: "text-white" },
              { number: "7", label: "Qualified Nurses", icon: Heart, color: "text-[#fffdd0]" },
              { number: "4", label: "Management Team", icon: Shield, color: "text-white" }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-effect rounded-2xl p-8 group hover:scale-105 transition-all duration-300">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4 group-hover:animate-pulse`} />
                <div className="text-5xl font-bold text-[#fffdd0] mb-2 animate-pulse-slow">{stat.number}</div>
                <div className="text-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust Kaachire Clinic for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#f4c2c2] to-[#85211d] hover:from-[#85211d] hover:to-[#f4c2c2] text-white px-10 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              Book Your Appointment
            </Button>
            <Button variant="outline" className="border-2 border-[#85211d] text-[#85211d] hover:bg-[#85211d] hover:text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
