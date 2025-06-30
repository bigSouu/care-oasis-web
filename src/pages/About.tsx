
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Meditics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading healthcare provider dedicated to delivering exceptional medical care 
              with compassion, innovation, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide comprehensive, patient-centered healthcare services that promote 
                healing, wellness, and quality of life for individuals and families in our community.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Compassionate Care</h3>
                  <p className="text-gray-600">Every patient receives personalized attention</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading healthcare institution recognized for clinical excellence, 
                innovative treatments, and outstanding patient experience.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-12 w-12 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Excellence in Care</h3>
                  <p className="text-gray-600">Committed to the highest standards</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Patient First", desc: "Every decision centers on patient well-being" },
              { icon: Shield, title: "Safety", desc: "Maintaining the highest safety standards" },
              { icon: Heart, title: "Compassion", desc: "Treating every patient with empathy and care" },
              { icon: Award, title: "Excellence", desc: "Striving for perfection in all we do" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
