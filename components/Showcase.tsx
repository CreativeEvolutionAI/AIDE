
import React from 'react';
import { ExternalLink, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { PageType, LangType } from '../App';

interface ShowcaseProps {
  onNavigate?: (page: PageType) => void;
  lang: LangType;
}

const Showcase: React.FC<ShowcaseProps> = ({ onNavigate, lang }) => {
  const items = [
    {
      id: 'neural-arch' as PageType,
      title: "Neural Architecture",
      desc: lang === 'zh' ? "利用 AI 生成的空间算法，构建具有自我调节能力的未来数字办公环境。" : "Utilizing AI-generated spatial algorithms to build self-regulating digital work environments.",
      tag: "Spatial AI",
      customBg: (
        <div className="absolute inset-0 overflow-hidden bg-[#0a0212]">
          <div className="absolute top-0 left-0 w-full h-full opacity-60">
            <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-[#ff7e33] via-[#a855f7] to-[#00e5ff] blur-[80px] animate-[pulse_10s_ease-in-out_infinite]" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="none">
              <path d="M0,250 Q200,100 400,250 T800,250 V500 H0 Z" fill="#020005" opacity="0.8">
                <animate attributeName="d" values="M0,250 Q200,100 400,250 T800,250 V500 H0 Z; M0,250 Q200,400 400,250 T800,250 V500 H0 Z; M0,250 Q200,100 400,250 T800,250 V500 H0 Z" dur="15s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 'quantum-interface' as PageType,
      title: "Quantum Interface",
      desc: lang === 'zh' ? "打破传统交互界面的束缚，通过多模态智能体实现沉浸式的实时反馈系统。" : "Breaking traditional interface constraints through multimodal agents for immersive real-time feedback.",
      tag: "Interface Design",
      customBg: (
        <div className="absolute inset-0 bg-[#0a0212] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95] via-[#1e1b4b] to-[#020617]" />
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </div>
      )
    }
  ];

  return (
    <section id="showcase-section" className="py-32 relative overflow-hidden bg-[#05010d]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff7e33]/10 border border-[#ff7e33]/20 mb-6">
              <Sparkles size={12} className="text-[#ff7e33]" />
              <span className="text-[10px] font-bold text-[#ff7e33] uppercase tracking-widest">Visual Innovation</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
              {lang === 'zh' ? '探索' : 'EXPLORE'} <span className="text-fluid-gradient">{lang === 'zh' ? '智能美学' : 'AI AESTHETICS'}</span> {lang === 'zh' ? '的边界' : 'BOUNDARIES'}
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              {lang === 'zh'
                ? '我们不仅在于解决效率问题，更在于通过 AI 的创造力，为品牌塑造前所未有的感官冲击。'
                : 'We don\'t just solve for efficiency; we leverage AI creativity to shape unprecedented sensory impacts for brands.'}
            </p>
          </div>
          <div className="flex space-x-4">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">128+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Concepts</span>
             </div>
             <div className="w-[1px] h-12 bg-white/10" />
             <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">4K</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Output</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -inset-4 border border-white/5 rounded-[40px] pointer-events-none group-hover:border-[#ff7e33]/20 transition-colors duration-700" />
              <div 
                onClick={() => onNavigate && onNavigate(item.id)}
                className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-[#020005] shadow-2xl cursor-pointer border border-white/5 group-hover:border-white/10 transition-all"
              >
                {item.customBg}
                <div className="absolute top-6 left-6 flex space-x-2 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    {item.desc}
                  </p>
                </div>
                <button className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#ff7e33] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 shadow-[0_0_30px_rgba(255,126,51,0.5)] z-30">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/5 pt-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff7e33]">
              <Layers size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">{lang === 'zh' ? '多层智能叠加' : 'Layered Intelligence'}</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">Multi-Layer Intelligence</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a855f7]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">{lang === 'zh' ? '企业级稳定性' : 'Enterprise Grade'}</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">Stability & Security</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">{lang === 'zh' ? '创意发散引擎' : 'Creative Engine'}</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">Creative Divergence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
