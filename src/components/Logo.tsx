
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          <div className="font-bold text-mtechNavy text-2xl flex items-center">
            <span className="text-mtechOrange">M</span>
            <span>Tech</span>
          </div>
          <div className="text-xs uppercase tracking-widest absolute -bottom-1 right-0 text-mtechGray-700">
            Corp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
