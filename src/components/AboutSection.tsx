
import { Award, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
