
import React from 'react';
import { Code, Terminal, Braces, GitBranch } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'code' | 'terminal' | 'brackets' | 'git';
}

const Logo = ({ className = '', size = 'md', variant = 'default' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16'
  };

  const renderLogo = () => {
    switch (variant) {
      case 'code':
        return (
          <div className="flex items-center gap-1.5">
            <Code className="text-mtechOrange h-5 w-5" />
            <div className="font-bold text-mtechNavy text-2xl flex items-center">
              <span className="text-mtechOrange">M</span>
              <span>Tech</span>
            </div>
            <Code className="text-mtechNavy h-5 w-5" />
            <div className="text-xs uppercase tracking-widest absolute -bottom-1 right-0 text-mtechGray-700">
              Corp
            </div>
          </div>
        );
      case 'terminal':
        return (
          <div className="flex items-center gap-1.5">
            <Terminal className="text-mtechOrange h-5 w-5" />
            <div className="font-bold text-mtechNavy text-2xl flex items-center">
              <span className="text-mtechOrange">M</span>
              <span>Tech</span>
            </div>
            <div className="text-xs uppercase tracking-widest absolute -bottom-1 right-0 text-mtechGray-700">
              Corp
            </div>
          </div>
        );
      case 'brackets':
        return (
          <div className="flex items-center">
            <Braces className="text-mtechOrange h-5 w-5 mr-1" />
            <div className="font-bold text-mtechNavy text-2xl flex items-center">
              <span className="text-mtechOrange">M</span>
              <span>Tech</span>
            </div>
            <div className="text-xs uppercase tracking-widest absolute -bottom-1 right-0 text-mtechGray-700">
              Corp
            </div>
          </div>
        );
      case 'git':
        return (
          <div className="flex items-center">
            <GitBranch className="text-mtechOrange h-5 w-5 mr-1" />
            <div className="font-bold text-mtechNavy text-2xl flex items-center">
              <span className="text-mtechOrange">M</span>
              <span>Tech</span>
            </div>
            <div className="text-xs uppercase tracking-widest absolute -bottom-1 right-0 text-mtechGray-700">
              Corp
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center">
            <div className="font-mono font-bold text-mtechNavy text-2xl flex items-center">
              <span className="text-mtechOrange">&lt;</span>
              <span className="text-mtechOrange">M</span>
              <span>Tech</span>
              <span className="text-mtechOrange">/&gt;</span>
            </div>
            <div className="text-xs uppercase tracking-widest absolute -bottom-1 right-0 text-mtechGray-700">
              Corp
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          {renderLogo()}
        </div>
      </div>
    </div>
  );
};

export default Logo;
