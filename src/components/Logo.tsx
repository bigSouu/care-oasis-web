
import { Heart, Activity } from "lucide-react";

const Logo = ({ size = "normal", animated = true }: { size?: "small" | "normal" | "large", animated?: boolean }) => {
  const sizeClasses = {
    small: "h-8 w-8",
    normal: "h-10 w-10", 
    large: "h-16 w-16"
  };

  const imgSizeClasses = {
    small: "h-8",
    normal: "h-12", 
    large: "h-20"
  };

  const textSizeClasses = {
    small: "text-lg",
    normal: "text-2xl",
    large: "text-4xl"
  };

  return (
    <div className={`flex items-center space-x-3 ${animated ? 'group' : ''}`}>
      <div className={`relative ${animated ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}>
        <img 
          src="/lovable-uploads/9518e27e-4134-4214-8343-fd324e83fdb9.png" 
          alt="Kaachire Clinic Logo" 
          className={`${imgSizeClasses[size]} w-auto object-contain ${animated ? 'group-hover:animate-pulse-slow' : ''}`}
        />
      </div>
      <div className="flex flex-col">
        <span className={`${textSizeClasses[size]} font-bold text-gradient leading-tight`}>
          Kaachire
        </span>
        <span className={`${size === 'small' ? 'text-xs' : 'text-sm'} text-[#85211d] font-medium opacity-80`}>
          Medical Center
        </span>
      </div>
    </div>
  );
};

export default Logo;
