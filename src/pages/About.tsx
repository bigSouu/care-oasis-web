
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Heart, Shield, Star, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Kaachire Clinic</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Established in 2011, serving the Meduma community with quality healthcare services 
              and a commitment to excellence in patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-pink-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                To be a provider of high quality and accessible health care services, 
                that meets the needs of the communities we serve.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <Heart className="h-12 w-12 text-pink-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Care</h3>
                    <p className="text-gray-600">Serving our community with dedication</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                To be chosen as our community's health care leader for its commitment 
                to excellence and its response to changing customer needs.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <Award className="h-12 w-12 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Excellence in Care</h3>
                    <p className="text-gray-600">Leading healthcare innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Shield, title: "Trust", desc: "Building lasting relationships with patients", color: "text-blue-600" },
              { icon: Handshake, title: "Cooperation", desc: "Working together for better outcomes", color: "text-green-600" },
              { icon: Star, title: "Quality", desc: "Delivering excellence in every service", color: "text-yellow-600" },
              { icon: Users, title: "Team Work", desc: "Collaborative approach to healthcare", color: "text-purple-600" },
              { icon: Heart, title: "Respect", desc: "Treating every patient with dignity", color: "text-pink-600" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <value.icon className={`h-12 w-12 ${value.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Professional Team</h2>
            <p className="text-lg text-gray-600">Dedicated healthcare professionals serving you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">22</div>
              <div className="text-gray-700 font-medium">Total Staff Members</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-700 font-medium">Medical Doctor</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">7</div>
              <div className="text-gray-700 font-medium">Qualified Nurses</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-700 font-medium">Management Team</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
