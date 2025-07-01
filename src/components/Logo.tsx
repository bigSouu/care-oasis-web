
import { Heart, Activity } from "lucide-react";

const Logo = ({ size = "normal", animated = true }: { size?: "small" | "normal" | "large", animated?: boolean }) => {
  const sizeClasses = {
    small: "h-8 w-8",
    normal: "h-10 w-10", 
    large: "h-16 w-16"
  };

  const textSizeClasses = {
    small: "text-lg",
    normal: "text-2xl",
    large: "text-4xl"
  };

  return (
    <div className={`flex items-center space-x-3 ${animated ? 'group' : ''}`}>
      <div className={`relative ${animated ? 'group-hover:animate-pulse-slow' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4c2c2] to-[#85211d] rounded-full blur-sm opacity-75"></div>
        <div className="relative bg-white rounded-full p-2 shadow-lg">
          <Heart className={`${sizeClasses[size]} text-[#85211d] fill-current ${animated ? 'group-hover:animate-pulse' : ''}`} />
          <Activity className={`absolute top-1 right-1 h-4 w-4 text-[#f4c2c2] ${animated ? 'animate-pulse' : ''}`} />
        </div>
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
