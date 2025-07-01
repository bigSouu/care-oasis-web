
import { ChevronRight, Stethoscope, Heart, Baby, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Basic Health Care",
      description: "Comprehensive primary healthcare services including consultations and preventive care",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Baby,
      title: "Maternal & Child Health",
      description: "Specialized care for mothers and children including prenatal and postnatal services",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: FlaskConical,
      title: "Laboratory Services",
      description: "Advanced diagnostic laboratory services for accurate medical testing",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Emergency Care",
      description: "24/7 emergency medical services with qualified healthcare professionals",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-[#f4c2c2] to-[#85211d] mr-4"></div>
            <span className="text-[#85211d] font-bold text-sm uppercase tracking-wider">Our Services</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#85211d] to-[#f4c2c2] ml-4"></div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Medical <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive healthcare services with state-of-the-art equipment, 
            professional medical expertise, and compassionate care for the Meduma community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {services.map((service, index) => (
            <Card key={index} className="clinic-card text-center p-8 group hover:scale-105 transition-all duration-500 border-0 shadow-xl">
              <CardHeader>
                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4 text-gray-900 group-hover:text-[#85211d] transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <Button variant="ghost" className="text-[#85211d] hover:text-white hover:bg-[#85211d] font-semibold rounded-full px-6 py-2 transition-all duration-300 group-hover:shadow-lg">
                  Learn More <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Medical Attention?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our experienced medical team is ready to provide you with quality healthcare services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#f4c2c2] to-[#85211d] hover:from-[#85211d] hover:to-[#f4c2c2] text-white px-10 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Book Appointment Now
              </Button>
              <Button variant="outline" className="border-2 border-[#85211d] text-[#85211d] hover:bg-[#85211d] hover:text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
