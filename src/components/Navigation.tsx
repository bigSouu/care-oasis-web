
import { useState } from "react";
import { Phone, Mail, Heart, Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-[#85211d] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <span className="mr-2">📅</span>
                <span>Mon - Fri 8.00 am - 6.00 pm</span>
              </div>
              <div className="hidden md:block">
                <span>Welcome to Kaachire Clinic - Quality Healthcare Services</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>kaachreclinic2020@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>0558727124</span>
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
              <Link to="/">
                <div className="flex-shrink-0 flex items-center bg-[#f4c2c2] px-4 py-2 rounded">
                  <Heart className="h-6 w-6 text-[#85211d] mr-2" />
                  <span className="text-lg font-bold text-[#85211d]">Kaachire Clinic</span>
                </div>
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <div className="relative group">
                  <Link to="/" className="text-gray-900 hover:text-[#85211d] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    HOME <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <Link to="/about" className="text-gray-500 hover:text-[#85211d] px-3 py-2 text-sm font-medium transition-colors">ABOUT</Link>
                <div className="relative group">
                  <Link to="/services" className="text-gray-500 hover:text-[#85211d] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    SERVICES <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="relative group">
                  <Link to="/pages" className="text-gray-500 hover:text-[#85211d] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    PAGES <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="relative group">
                  <Link to="/blog" className="text-gray-500 hover:text-[#85211d] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    BLOG <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <Link to="/contact" className="text-gray-500 hover:text-[#85211d] px-3 py-2 text-sm font-medium transition-colors">CONTACT</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-[#fffdd0] hover:bg-[#fffdd0]/90 text-[#85211d] px-6 py-2 rounded-none">
                BOOK APPOINTMENT →
              </Button>
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-[#85211d]" />
              <button className="text-gray-600 hover:text-[#85211d]">
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
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#85211d]">HOME</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[#85211d]">ABOUT</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[#85211d]">SERVICES</Link>
              <Link to="/pages" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[#85211d]">PAGES</Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[#85211d]">BLOG</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[#85211d]">CONTACT</Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#fffdd0] hover:bg-[#fffdd0]/90 text-[#85211d]">BOOK APPOINTMENT</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
