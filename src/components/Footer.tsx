
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#85211d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-[#f4c2c2] mr-2" />
              <span className="text-xl font-bold">Kaachire Clinic</span>
            </div>
            <p className="text-[#f4c2c2]">
              Providing high quality and accessible healthcare services to the Meduma community since 2011.
            </p>
            <div className="mt-4 text-sm text-[#f4c2c2]">
              <p className="font-semibold text-white">NHIS ACCREDITED</p>
              <p>Dr. Ernest Anim Boateng MD, MPH</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-[#f4c2c2]">Basic Health Care</span></li>
              <li><span className="text-[#f4c2c2]">Maternal & Child Health</span></li>
              <li><span className="text-[#f4c2c2]">Laboratory Services</span></li>
              <li><span className="text-[#f4c2c2]">Ultrasound Scan</span></li>
              <li><span className="text-[#f4c2c2]">Emergency Care</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Values</h3>
            <ul className="space-y-2">
              <li><span className="text-[#f4c2c2]">Trust</span></li>
              <li><span className="text-[#f4c2c2]">Cooperation</span></li>
              <li><span className="text-[#f4c2c2]">Quality</span></li>
              <li><span className="text-[#f4c2c2]">Team Work</span></li>
              <li><span className="text-[#f4c2c2]">Respect</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-[#f4c2c2]">Abass Junction PLT 3 BLK D</p>
              <p className="text-[#f4c2c2]">Meduma, P.O. Box MJ 50</p>
              <p className="text-[#f4c2c2]">Mamponteng, Ghana</p>
              <p className="text-[#f4c2c2]">Tel: 0558727124</p>
              <p className="text-[#f4c2c2]">Email: kaachreclinic2020@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#f4c2c2]/30 mt-8 pt-8 text-center">
          <p className="text-[#f4c2c2]">&copy; 2024 Kaachire Clinic. All rights reserved. | Quality Healthcare Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
