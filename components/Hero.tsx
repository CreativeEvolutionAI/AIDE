
import React from 'react';
import { MessageSquare, Zap, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { LangType } from '../App';

interface HeroProps {
  onAction?: () => void;
  onSecondaryAction?: () => void;
  lang: LangType;
}

const Hero: React.FC<HeroProps> = ({ onAction, onSecondaryAction, lang }) => {
  const scrollToFirst = () => {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-48 pb-20 overflow-hidden px-6">
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
        
        <div className="relative flex flex-row flex-wrap items-center justify-center mb-10 gap-6 md:gap-10 group">
          <div className="absolute -inset-x-8 -inset-y-4 pointer-events-none border-x border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#ff7e33]" />
            <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-[#ff7e33]" />
            <div className="absolute top-0 right-0 w-4 h-[1px] bg-[#a855f7]" />
            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#a855f7]" />
          </div>

          <div className="transform transition-all duration-1000 group-hover:rotate-[360deg] group-hover:scale-110">
            <Logo size="lg" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white select-none filter drop-shadow-[0_0_40px_rgba(168,85,247,0.25)] text-center">
            {lang === 'zh' ? '创造' : 'CREATIVE'}<span className="text-fluid-gradient">{lang === 'zh' ? '进化' : 'EVOLUTION'}</span>
          </h1>
        </div>

        <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-1.5 rounded-full mb-8 backdrop-blur-xl group hover:border-[#ff7e33]/50 transition-colors">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 rounded-full bg-[#ff7e33] animate-ping opacity-75" />
            <div className="relative rounded-full bg-[#ff7e33] w-2 h-2" />
          </div>
          <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">Creative Agent Core Operational</span>
        </div>

        <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl">
          {lang === 'zh' ? 'AIDE+ 创意咨询服务' : 'AIDE+ CREATIVE CONSULTING'}
        </h2>

        {/* 增强型关键文案与粒子流影层 */}
        <div className="relative max-w-3xl mb-16 px-4 py-8">
          {/* 超强粒子光带 SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible mix-blend-screen" viewBox="0 0 800 160" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heavyTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="25%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffedd5" stopOpacity="1" />
                <stop offset="75%" stopColor="#ff7e33" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff7e33" stopOpacity="0" />
              </linearGradient>
              
              <filter id="megaGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur8" />
                <feGaussianBlur stdDeviation="15" result="blur15" />
                <feMerge>
                  <feMergeNode in="blur15" />
                  <feMergeNode in="blur8" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            <path d="M-100,100 Q200,20 400,80 T900,60" fill="none" stroke="url(#heavyTrailGradient)" strokeWidth="20" className="opacity-20 blur-3xl"><animate attributeName="stroke-dasharray" values="0,1000; 1000,0" dur="4s" repeatCount="indefinite" /></path>
            <path d="M-100,100 Q200,20 400,80 T900,60" fill="none" stroke="url(#heavyTrailGradient)" strokeWidth="4" filter="url(#megaGlow)" strokeDasharray="300 1000"><animate attributeName="stroke-dashoffset" from="1300" to="0" dur="3s" repeatCount="indefinite" /></path>
            <path d="M-100,100 Q200,20 400,80 T900,60" fill="none" stroke="white" strokeWidth="0.5" className="opacity-50" strokeDasharray="100 1200"><animate attributeName="stroke-dashoffset" from="1300" to="0" dur="2s" repeatCount="indefinite" /></path>

            {[...Array(15)].map((_, i) => (
              <g key={i}>
                <circle r={1.5 + Math.random() * 2} fill={i % 2 === 0 ? "#ff7e33" : "#a855f7"} filter="url(#megaGlow)">
                  <animateMotion path="M-100,100 Q200,20 400,80 T900,60" dur={`${2 + i * 0.3}s`} begin={`${i * 0.2}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </svg>

          <p className="relative z-10 text-base md:text-xl text-white/60 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {lang === 'zh' ? (
              <>重塑数字时代的生产力范式。我们通过定制化的 <span className="text-[#ff7e33] font-black border-b-2 border-[#ff7e33]/40 shadow-[0_0_20px_rgba(255,126,51,0.4)]">AI 专家智能体</span>，帮助创意密集型企业在复杂的业务流中实现<span className="text-white font-bold italic tracking-tight underline decoration-[#a855f7]/60 decoration-wavy decoration-2">跨越式增长</span>。</>
            ) : (
              <>Redefining the productivity paradigm for the digital age. We help creative enterprises achieve <span className="text-white font-bold italic underline decoration-[#a855f7]/60 decoration-wavy decoration-2">exponential growth</span> in complex workflows through customized <span className="text-[#ff7e33] font-black border-b-2 border-[#ff7e33]/40 shadow-[0_0_20px_rgba(255,126,51,0.4)]">AI Expert Agents</span>.</>
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-xl">
          <button 
            onClick={onAction}
            className="group relative flex items-center justify-center space-x-3 w-full sm:w-auto px-12 py-5 bg-[#ff5c00] text-white rounded-[24px] font-black text-lg overflow-hidden transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,92,0,0.5)] border border-[#ff7e33]/30 hover:border-[#ff7e33]/60"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span>{lang === 'zh' ? '立即启动' : 'GET STARTED'}</span>
            <Zap className="w-5 h-5 fill-current" />
          </button>
          
          <button 
            onClick={onSecondaryAction}
            className="group flex items-center justify-center space-x-3 w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white rounded-[24px] font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-3xl hover:border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          >
            <div className="w-10 h-10 rounded-full bg-[#ff7e33]/15 flex items-center justify-center text-[#ff7e33] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,126,51,0.2)]">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <span>{lang === 'zh' ? '立即联系' : 'CONTACT US'}</span>
          </button>
        </div>

        <button 
          onClick={scrollToFirst}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/60 transition-colors animate-bounce flex flex-col items-center gap-2"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
