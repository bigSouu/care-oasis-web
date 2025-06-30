
import { useState } from "react";
import { Phone, MapPin, Clock, Star, Shield, Heart, Users, Award, ChevronRight, Menu, X, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Emergency Care",
      description: "24/7 emergency services with state-of-the-art trauma center",
      icon: Heart,
    },
    {
      title: "Cardiology",
      description: "Comprehensive heart care with advanced cardiac procedures",
      icon: Heart,
    },
    {
      title: "Orthopedics",
      description: "Expert bone, joint, and spine treatment and surgery",
      icon: Shield,
    },
    {
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents",
      icon: Users,
    },
  ];

  const stats = [
    { number: "50,000+", label: "Patients Served" },
    { number: "200+", label: "Medical Professionals" },
    { number: "15+", label: "Specialties" },
    { number: "24/7", label: "Emergency Care" },
  ];

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Chief of Cardiology",
      experience: "15+ years experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Emergency Medicine",
      experience: "12+ years experience", 
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Specialist",
      experience: "10+ years experience",
      image: "https://images.unsplash.com/photo-1594824020863-8df14f823ff7?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Heart className="h-8 w-8 text-primary mr-2" />
                <span className="text-xl font-bold text-gray-900">MediCare Hospital</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#home" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#doctors" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Doctors</a>
                <a href="#about" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-1" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Emergency</Button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">Home</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">Services</a>
              <a href="#doctors" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">Doctors</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Emergency: (555) 123-4567</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Updated to match the image */}
      <section id="home" className="relative min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded"></div>
          <div className="absolute top-32 left-32 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded"></div>
          <div className="absolute top-20 right-20 w-12 h-12 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-20 h-20 border border-white/20 rounded"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              {/* Heart Icon and Tagline */}
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-green-400" />
                <span className="text-green-400 font-medium text-sm uppercase tracking-wide">WISH YOUR HAPPY LIFE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Preserve Your Health
                <span className="block">And Happiness.</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                We connect you with trusted doctors and healthcare professionals who care about your 
                well-being as much as you do. Whether you need a routine checkup, specialist 
                consultation, or emergency care, we make it easy, fast, and secure.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Discover More <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Wave Pattern */}
              <div className="pt-8">
                <svg width="80" height="20" viewBox="0 0 80 20" className="text-blue-400">
                  <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Doctors Image */}
            <div className="relative">
              <img
                src="/lovable-uploads/443eed69-f943-4ada-b5d2-3d693497a4d8.png"
                alt="Professional doctors - male doctor with glasses and female doctor with stethoscopes"
                className="w-full h-auto max-w-2xl mx-auto"
              />
              
              {/* Social Media Icons */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-white/10 backdrop-blur-sm rounded-l-lg p-3">
                <Facebook className="h-6 w-6 text-white hover:text-blue-300 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-white hover:text-pink-300 cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-white hover:text-red-300 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-white hover:text-blue-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-2 sm:mb-0">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-semibold">24/7 Emergency Services Available</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span className="font-bold">Emergency: (555) 911-HELP</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>123 Medical Center Dr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive healthcare services with cutting-edge technology and compassionate care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="medical-card text-center p-6">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 text-primary hover:text-primary">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
            <p className="text-xl text-gray-600">
              Board-certified physicians committed to providing exceptional patient care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="medical-card text-center">
                <CardHeader>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{doctor.experience}</p>
                  <div className="flex justify-center items-center text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About MediCare Hospital</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 50 years, MediCare Hospital has been a cornerstone of healthcare excellence in our community. We combine advanced medical technology with compassionate care to deliver the best possible outcomes for our patients.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700">JCI Accredited Healthcare Facility</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700">Advanced Patient Safety Protocols</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <span className="text-gray-700">200+ Medical Professionals</span>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Learn More About Us
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop"
                alt="Medical team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-primary mr-2" />
                <span className="text-xl font-bold">MediCare Hospital</span>
              </div>
              <p className="text-gray-400">
                Providing exceptional healthcare with compassion and excellence since 1973.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#doctors" className="text-gray-400 hover:text-white transition-colors">Doctors</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Emergency Care</span></li>
                <li><span className="text-gray-400">Cardiology</span></li>
                <li><span className="text-gray-400">Orthopedics</span></li>
                <li><span className="text-gray-400">Pediatrics</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-gray-400">123 Medical Center Drive</p>
                <p className="text-gray-400">Healthcare City, HC 12345</p>
                <p className="text-gray-400">(555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 MediCare Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
