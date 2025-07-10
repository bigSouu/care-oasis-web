import { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <>
      {/* Top bar with contact info */}
      <div className="bg-[#85211d] text-white py-3 text-sm animate-slide-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center group">
                <span className="mr-2 group-hover:animate-bounce">🕒</span>
                <span>Mon - Fri 8.00 am - 6.00 pm</span>
              </div>
              <div className="hidden md:flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Meduma, Ghana - Quality Healthcare Since 2011</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center hover:text-[#fffdd0] transition-colors cursor-pointer">
                <Mail className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">kaachreclinic2020@gmail.com</span>
              </div>
              <div className="flex items-center hover:text-[#fffdd0] transition-colors cursor-pointer">
                <Phone className="h-4 w-4 mr-2" />
                <span>0558727124</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg border-b-2 border-[#f4c2c2] sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="transition-transform hover:scale-105 duration-300">
                <Logo animated={true} />
              </Link>
              <div className="hidden md:ml-12 md:flex md:space-x-8">
                <div className="relative group">
                  <Link to="/" className="text-gray-700 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center border-b-2 border-transparent hover:border-[#f4c2c2]">
                    HOME <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                </div>
                <Link to="/about" className="text-gray-600 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-[#f4c2c2]">ABOUT</Link>
                <div className="relative group">
                  <Link to="/services" className="text-gray-600 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center border-b-2 border-transparent hover:border-[#f4c2c2]">
                    SERVICES <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                </div>
                <div className="relative group">
                  <Link to="/pages" className="text-gray-600 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center border-b-2 border-transparent hover:border-[#f4c2c2]">
                    PAGES <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                </div>
                <div className="relative group">
                  <Link to="/blog" className="text-gray-600 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center border-b-2 border-transparent hover:border-[#f4c2c2]">
                    BLOG <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                </div>
                <Link to="/contact" className="text-gray-600 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-[#f4c2c2]">CONTACT</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/book-appointment">
                <Button className="bg-gradient-to-r from-[#fffdd0] to-[#f4c2c2] hover:from-[#f4c2c2] hover:to-[#fffdd0] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-red-900 hover:bg-red-800 text-red-950">
                  BOOK APPOINTMENT →
                </Button>
              </Link>
              <Search className="h-6 w-6 text-gray-600 cursor-pointer hover:text-[#85211d] transition-colors hover:scale-110 transform duration-200" />
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 hover:text-[#85211d] transition-colors">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#f4c2c2] shadow-lg">
              <Link to="/" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">HOME</Link>
              <Link to="/about" className="block px-4 py-3 text-base font-semibold text-gray-600 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">ABOUT</Link>
              <Link to="/services" className="block px-4 py-3 text-base font-semibold text-gray-600 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">SERVICES</Link>
              <Link to="/pages" className="block px-4 py-3 text-base font-semibold text-gray-600 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">PAGES</Link>
              <Link to="/blog" className="block px-4 py-3 text-base font-semibold text-gray-600 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">BLOG</Link>
              <Link to="/contact" className="block px-4 py-3 text-base font-semibold text-gray-600 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">CONTACT</Link>
              <div className="px-4 py-3">
                <Link to="/book-appointment">
                  <Button className="w-full bg-gradient-to-r from-[#fffdd0] to-[#f4c2c2] text-[#85211d] font-bold py-3 rounded-full">BOOK APPOINTMENT</Button>
                </Link>
              </div>
            </div>
          </div>}
      </nav>
    </>;
};
export default Navigation;