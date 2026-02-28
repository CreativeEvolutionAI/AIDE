
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020005] py-16 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* 品牌标识 */}
          <div className="flex items-center space-x-4 group">
            <Logo size="sm" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none">AIDE+</span>
              <span className="text-[7px] text-[#ff7e33] font-bold tracking-[0.4em] uppercase opacity-60">Creative Hub</span>
            </div>
          </div>

          {/* 社交链接 */}
          <div className="flex items-center space-x-10">
             <a href="#" className="text-gray-600 hover:text-white transition-all transform hover:scale-110"><Twitter size={18} /></a>
             <a href="#" className="text-gray-600 hover:text-white transition-all transform hover:scale-110"><Linkedin size={18} /></a>
             <a href="#" className="text-gray-600 hover:text-white transition-all transform hover:scale-110"><Github size={18} /></a>
          </div>

          {/* 版权信息 - 已移除任何不必要的提示文字 */}
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.25em] text-center md:text-right leading-relaxed">
            © 2024-2025 AIDE+ Creative Consulting. <br className="md:hidden" /> 
            <span className="opacity-60">All Rights Reserved.</span>
          </div>
        </div>
        
        {/* 底部装饰线 */}
        <div className="mt-12 flex justify-center items-center space-x-6 opacity-20">
           <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
           <span className="text-[8px] text-white font-mono uppercase tracking-[0.5em] whitespace-nowrap">Global Innovation Node: Optimized</span>
           <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
