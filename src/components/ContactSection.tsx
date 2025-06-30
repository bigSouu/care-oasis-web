
import { Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">
            Get in touch with us for appointments, questions, or emergency care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 text-center p-6">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-white">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">General: (555) 123-4567</p>
              <p className="text-red-400 font-semibold">Emergency: (555) 911-HELP</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 text-center p-6">
            <CardHeader>
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-white">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">123 Medical Center Drive</p>
              <p className="text-gray-300">Healthcare City, HC 12345</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-gray-700 text-center p-6">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-white">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Emergency: 24/7</p>
              <p className="text-gray-300">General: Mon-Fri 8AM-6PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
