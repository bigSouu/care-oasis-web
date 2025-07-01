
import { Heart, Users, Clock, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Clock, number: "13+", label: "Years of Excellence", color: "from-blue-500 to-blue-600" },
    { icon: Users, number: "22", label: "Medical Professionals", color: "from-green-500 to-green-600" },
    { icon: Heart, number: "24/7", label: "Emergency Services", color: "from-red-500 to-red-600" },
    { icon: Award, number: "100%", label: "NHIS Accredited", color: "from-purple-500 to-purple-600" }
  ];

  return (
    <section className="py-20 clinic-gradient text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Heart className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <Award className="h-12 w-12 text-white" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Trusted by the Meduma community for over a decade of quality healthcare services
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300">
                <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-[#fffdd0] mb-2 animate-pulse-slow">
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
