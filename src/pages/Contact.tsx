
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="clinic-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Kaachire Clinic</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our healthcare team. We're here to help you with 
              appointments, questions, and any healthcare needs you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 stagger-animation">
            {/* Contact Details */}
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#85211d] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Clinic Address</h3>
                    <p className="text-gray-600">
                      Abass Junction PLT 3 BLK D Meduma<br />
                      P.O. Box MJ 50 Mamponteng<br />
                      Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#85211d] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      Main Line: 0558727124<br />
                      Alternative: 0244647084
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#85211d] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      kaachreclinic2020@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-6 w-6 text-[#85211d] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Doctor in Charge</h3>
                    <p className="text-gray-600">
                      Dr. Ernest Anim Boateng MD, MPH
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#85211d] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Emergency Only<br />
                      <span className="text-[#85211d] font-semibold">24/7 Emergency Services Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect rounded-lg p-8 animate-scale-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-[#f4c2c2] rounded-md focus:ring-[#85211d] focus:border-[#85211d]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-[#f4c2c2] rounded-md focus:ring-[#85211d] focus:border-[#85211d]"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-[#f4c2c2] rounded-md focus:ring-[#85211d] focus:border-[#85211d]"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-[#f4c2c2] rounded-md focus:ring-[#85211d] focus:border-[#85211d]"
                    placeholder="+233 55 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Inquiry
                  </label>
                  <select className="w-full px-4 py-2 border border-[#f4c2c2] rounded-md focus:ring-[#85211d] focus:border-[#85211d]">
                    <option>General Inquiry</option>
                    <option>Appointment Request</option>
                    <option>Maternal Care</option>
                    <option>Child Health</option>
                    <option>Laboratory Services</option>
                    <option>Ultrasound Scan</option>
                    <option>Emergency Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-[#f4c2c2] rounded-md focus:ring-[#85211d] focus:border-[#85211d]"
                    placeholder="Please describe how we can help you..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#85211d] hover:bg-[#f4c2c2] hover:text-[#85211d] text-white transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-[#f4c2c2]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-lg text-gray-600">Need immediate assistance? Use these quick options</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <div className="clinic-card p-6 text-center">
              <Calendar className="h-12 w-12 text-[#85211d] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Appointment</h3>
              <p className="text-gray-600 mb-4">Schedule your visit with our healthcare professionals</p>
              <Button className="bg-[#85211d] hover:bg-[#f4c2c2] hover:text-[#85211d] transition-all duration-300">
                Book Now
              </Button>
            </div>
            <div className="clinic-card p-6 text-center">
              <Phone className="h-12 w-12 text-[#f4c2c2] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Clinic</h3>
              <p className="text-gray-600 mb-4">Speak directly with our medical staff</p>
              <Button className="bg-[#f4c2c2] hover:bg-[#85211d] text-[#85211d] hover:text-white transition-all duration-300">
                Call 0558727124
              </Button>
            </div>
            <div className="clinic-card p-6 text-center">
              <MessageSquare className="h-12 w-12 text-[#fffdd0] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Care</h3>
              <p className="text-gray-600 mb-4">24/7 emergency medical assistance</p>
              <Button className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                Emergency
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
