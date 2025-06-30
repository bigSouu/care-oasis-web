
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Calendar, Users, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pages = () => {
  const pageLinks = [
    {
      icon: Calendar,
      title: "Appointments",
      description: "Schedule, reschedule, or cancel your medical appointments online.",
      link: "Book Now"
    },
    {
      icon: Users,
      title: "Find a Doctor",
      description: "Search our directory of experienced healthcare professionals.",
      link: "Search Doctors"
    },
    {
      icon: MapPin,
      title: "Locations",
      description: "Find our hospital locations and get directions.",
      link: "View Locations"
    },
    {
      icon: FileText,
      title: "Patient Portal",
      description: "Access your medical records, test results, and billing information.",
      link: "Login Portal"
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "24/7 emergency services and urgent care information.",
      link: "Emergency Info"
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Get in touch with our patient support team.",
      link: "Contact Now"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Hospital Pages</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Quick access to all our hospital services, resources, and patient tools. 
              Everything you need for your healthcare journey.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-lg text-gray-600">Navigate to the most commonly used hospital pages</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageLinks.map((page, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <page.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{page.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{page.description}</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  {page.link}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Insurance and Billing Information</li>
                <li>• Pre-admission Instructions</li>
                <li>• Visitor Guidelines</li>
                <li>• Patient Rights and Responsibilities</li>
                <li>• Discharge Planning</li>
                <li>• Medical Records Request</li>
              </ul>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                View All Resources
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hospital Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Hospital Hours and Policies</li>
                <li>• Parking and Transportation</li>
                <li>• Cafeteria and Gift Shop</li>
                <li>• Wi-Fi and Technology Services</li>
                <li>• Volunteer Opportunities</li>
                <li>• Career Opportunities</li>
              </ul>
              <Button className="mt-6 bg-green-600 hover:bg-green-700">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pages;
