
import { useState } from "react";
import { Phone, Mail, Heart, Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-slate-800 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <span>Mon - Fri 8.00 am - 6.00 pm</span>
              </div>
              <div className="hidden md:block">
                <span>Welcome Meditics hospital and doctors appointment services</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+208-6666-0112</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center bg-blue-600 px-4 py-2 rounded">
                <Heart className="h-6 w-6 text-white mr-2" />
                <span className="text-lg font-bold text-white">Meditics</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <div className="relative group">
                  <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    HOME <ChevronDown className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <a href="#about" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">ABOUT</a>
                <div className="relative group">
                  <a href="#services" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    SERVICES <ChevronDown className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="relative group">
                  <a href="#pages" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    PAGES <ChevronDown className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="relative group">
                  <a href="#blog" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    BLOG <ChevronDown className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <a href="#contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">CONTACT</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-none">
                BOOK A APPOINTMENT →
              </Button>
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-600" />
              <button className="text-gray-600 hover:text-blue-600">
                <Menu className="h-6 w-6" />
              </button>
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
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">HOME</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600">ABOUT</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600">SERVICES</a>
              <a href="#pages" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600">PAGES</a>
              <a href="#blog" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600">BLOG</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600">CONTACT</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">BOOK A APPOINTMENT</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
