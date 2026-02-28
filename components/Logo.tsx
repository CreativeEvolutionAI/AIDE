
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32 md:w-48 md:h-48'
  };

  // Adjust icon scale for different contexts
  const iconScale = {
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1
  };

  return (
    <div className={`${sizeClasses[size]} relative rounded-full flex items-center justify-center p-[1.5px] bg-gradient-to-br from-[#a855f7] to-[#ff7e33] shadow-[0_0_20px_rgba(168,85,247,0.2)] transform transition-transform group-hover:scale-105`}>
      <div className="w-full h-full rounded-full bg-[#0a0212] flex items-center justify-center overflow-hidden relative">
        {/* Inner Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
        
        <svg 
          viewBox="0 0 100 100" 
          className="relative z-10 w-[65%] h-[65%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoAGradient" x1="50" y1="20" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ff7e33" />
            </linearGradient>
          </defs>
          
          {/* Main 'A' Shape with Gradient */}
          <path 
            d="M50 20L85 85H68L50 50L32 85H15L50 20Z" 
            fill="url(#logoAGradient)" 
          />
          
          {/* Inner White Triangle */}
          <path 
            d="M50 58L60 78H40L50 58Z" 
            fill="white" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
