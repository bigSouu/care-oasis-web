
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Stethoscope, Baby, Heart, Eye, FlaskConical, Zap, Activity, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Basic Health Care Services",
      description: "Comprehensive primary healthcare services for all ages including routine checkups and preventive care.",
      features: ["General Consultations", "Health Screenings", "Preventive Care", "Chronic Disease Management"]
    },
    {
      icon: Baby,
      title: "Maternal and Child Health Services",
      description: "Specialized care for mothers and children including prenatal, delivery, and postnatal services.",
      features: ["Prenatal Care", "Safe Delivery", "Postnatal Care", "Child Health Monitoring"]
    },
    {
      icon: Heart,
      title: "Antenatal and Postnatal Care",
      description: "Expert care for expectant mothers and newborns ensuring healthy pregnancies and safe deliveries.",
      features: ["Pregnancy Monitoring", "Nutritional Counseling", "Birth Planning", "Newborn Care"]
    },
    {
      icon: Stethoscope,
      title: "General O.P.D. Services",
      description: "Outpatient department services providing comprehensive medical consultations and treatments.",
      features: ["Medical Consultations", "Health Assessments", "Minor Procedures", "Medical Referrals"]
    },
    {
      icon: Eye,
      title: "Dispensary Services",
      description: "Professional pharmaceutical services ensuring proper medication management and patient counseling.",
      features: ["Prescription Dispensing", "Medication Counseling", "Drug Information", "Health Products"]
    },
    {
      icon: FlaskConical,
      title: "Laboratory Services",
      description: "Advanced diagnostic laboratory services for accurate medical testing and health assessments.",
      features: ["Blood Tests", "Urine Analysis", "Medical Diagnostics", "Health Screenings"]
    },
    {
      icon: Zap,
      title: "Ultrasound Scan",
      description: "State-of-the-art ultrasound imaging services for diagnostic and monitoring purposes.",
      features: ["Pregnancy Scans", "Abdominal Scans", "Diagnostic Imaging", "Health Monitoring"]
    },
    {
      icon: Activity,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with qualified healthcare professionals.",
      features: ["Emergency Response", "Critical Care", "Medical Emergencies", "24/7 Availability"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="clinic-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Healthcare Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by our qualified medical professionals 
              with state-of-the-art equipment and compassionate care.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="glass-effect text-[#fffdd0] px-6 py-3 rounded-lg font-semibold">
                <span className="block text-sm">Doctor in Charge</span>
                <span className="text-lg">Dr. Ernest Anim Boateng MD, MPH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-[#fffdd0] text-[#85211d] px-4 py-2 rounded-full font-semibold mb-4">
              NHIS ACCREDITED
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Healthcare Services</h2>
            <p className="text-lg text-gray-600">We accept National Health Insurance Scheme (NHIS) for your convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {services.map((service, index) => (
              <div key={index} className="clinic-card overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-[#f4c2c2]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-[#85211d] mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="h-2 w-2 bg-[#85211d] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#85211d] hover:bg-[#f4c2c2] hover:text-[#85211d] transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-[#f4c2c2]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="clinic-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-600">
                  Abass Junction PLT 3 BLK D Meduma<br />
                  P.O. Box MJ 50 Mamponteng
                </p>
              </div>
              <div className="clinic-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Details</h3>
                <p className="text-gray-600">
                  <strong>Phone:</strong> 0558727124<br />
                  <strong>Email:</strong> kaachreclinic2020@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
