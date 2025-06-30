
import { useState } from "react";
import { Phone, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
};

export default Navigation;
