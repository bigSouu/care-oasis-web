
import { Clock, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const EmergencyBanner = () => {
  return (
    <section className="bg-red-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-2 sm:mb-0">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-semibold">24/7 Emergency Services Available</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="flex items-center hover:text-red-200 transition-colors">
              <Phone className="h-4 w-4 mr-1" />
              <span className="font-bold">Emergency: 0558727124</span>
            </Link>
            <Link to="/contact" className="flex items-center hover:text-red-200 transition-colors">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Meduma, Ghana</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
