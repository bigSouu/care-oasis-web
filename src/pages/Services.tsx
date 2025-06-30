
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Stethoscope, Brain, Heart, Eye, Bone, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and prevention of cardiovascular diseases.",
      features: ["ECG & Echo", "Cardiac Catheterization", "Heart Surgery", "Preventive Care"]
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert care for neurological conditions affecting the brain, spine, and nervous system.",
      features: ["Brain Imaging", "Stroke Care", "Epilepsy Treatment", "Memory Disorders"]
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Treatment of musculoskeletal conditions including bones, joints, muscles, and ligaments.",
      features: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Trauma Care"]
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to complex surgical procedures.",
      features: ["Cataract Surgery", "Retinal Care", "Glaucoma Treatment", "LASIK"]
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and critical care capabilities.",
      features: ["Trauma Center", "Critical Care", "Ambulance Service", "Emergency Surgery"]
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary healthcare services for adults including preventive care and chronic disease management.",
      features: ["Annual Checkups", "Chronic Care", "Preventive Medicine", "Health Screenings"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by expert medical professionals 
              using state-of-the-art technology and compassionate care.
            </p>
            <Button className="mt-8 bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
