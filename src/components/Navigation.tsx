
import { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown, MapPin, User, LogOut, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./Logo";
import AuthDialog from "./AuthDialog";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const { user, signOut } = useAuth();
  
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
                  <Link to="/" className="text-gray-800 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center border-b-2 border-transparent hover:border-[#85211d]">
                    HOME <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                </div>
                <Link to="/about" className="text-gray-800 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-[#85211d]">ABOUT</Link>
                <div className="relative group">
                  <Link to="/services" className="text-gray-800 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center border-b-2 border-transparent hover:border-[#85211d]">
                    SERVICES <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                </div>
                <div className="relative group">
                  <Link to="/blog" className="text-gray-800 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center border-b-2 border-transparent hover:border-[#85211d]">
                    BLOG <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                  </Link>
                </div>
                <Link to="/contact" className="text-gray-800 hover:text-[#85211d] px-4 py-2 text-sm font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-[#85211d]">CONTACT</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/book-appointment">
                <Button className="bg-white text-[#85211d] border-2 border-[#85211d] hover:bg-[#85211d] hover:text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  BOOK APPOINTMENT →
                </Button>
              </Link>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-clinic-light hover:bg-clinic-light/80">
                      <User className="h-5 w-5 text-clinic-primary" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex flex-col space-y-1 p-2">
                      <p className="text-sm font-medium leading-none">{user.email}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        Welcome back!
                      </p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut} className="text-red-600 focus:text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  onClick={() => setAuthDialogOpen(true)}
                  variant="outline" 
                  className="border-clinic-primary text-clinic-primary hover:bg-clinic-primary hover:text-white"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              )}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 hover:text-[#85211d] transition-colors">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#f4c2c2] shadow-lg">
              <Link to="/" className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">HOME</Link>
              <Link to="/about" className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">ABOUT</Link>
              <Link to="/services" className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">SERVICES</Link>
              <Link to="/blog" className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">BLOG</Link>
              <Link to="/contact" className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#85211d] hover:bg-[#f4c2c2]/10 rounded-lg transition-all">CONTACT</Link>
              <div className="px-4 py-3 space-y-3">
                <Link to="/book-appointment">
                  <Button className="w-full bg-white text-[#85211d] border-2 border-[#85211d] hover:bg-[#85211d] hover:text-white font-bold py-3 rounded-full transition-all duration-300">BOOK APPOINTMENT</Button>
                </Link>
                {user ? (
                  <div className="space-y-2">
                    <div className="px-4 py-2 bg-clinic-light rounded-lg">
                      <p className="text-sm font-medium text-clinic-primary">{user.email}</p>
                      <p className="text-xs text-gray-600">Welcome back!</p>
                    </div>
                    <Button 
                      onClick={signOut} 
                      variant="outline" 
                      className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={() => setAuthDialogOpen(true)}
                    variant="outline" 
                    className="w-full border-clinic-primary text-clinic-primary hover:bg-clinic-primary hover:text-white"
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>}
      </nav>
      
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </>;
};

export default Navigation;
