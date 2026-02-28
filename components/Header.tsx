
import React from 'react';
import { Menu, X, ChevronRight, Home, Globe } from 'lucide-react';
import Logo from './Logo';
import { PageType, LangType } from '../App';

interface HeaderProps {
  scrollY: number;
  isVisible: boolean; 
  activeSection: string;
  onNavigate?: (page: PageType) => void;
  onScrollToSection?: (sectionId: string) => void;
  lang: LangType;
  setLang: (lang: LangType) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  scrollY, 
  activeSection, 
  onNavigate, 
  onScrollToSection,
  lang,
  setLang
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { index: '01', name: lang === 'zh' ? '服务矩阵' : 'SOLUTIONS', sub: 'MATRIX', id: 'services-section' },
    { index: '02', name: lang === 'zh' ? '专家团队' : 'EXPERTS', sub: 'NETWORK', id: 'team-section' },
    { index: '03', name: lang === 'zh' ? '创新展示' : 'SHOWCASE', sub: 'VISUALS', id: 'showcase-section' },
    { index: '04', name: lang === 'zh' ? '实战案例' : 'CASES', sub: 'STUDIES', id: 'cases-section' },
    { index: '05', name: lang === 'zh' ? '教育培训' : 'ACADEMY', sub: 'WORKSHOP', id: 'edu-section' },
    { index: '06', name: lang === 'zh' ? '商业模式' : 'BUSINESS', sub: 'MODELS', id: 'business-model-section' },
    { index: '07', name: lang === 'zh' ? '合作伙伴' : 'PARTNERS', sub: 'ECOSYSTEM', id: 'partners-section' },
    { index: '08', name: lang === 'zh' ? '联系我们' : 'CONTACT', sub: 'CONNECT', id: 'contact-section' }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.('home');
    onScrollToSection?.('home');
    setIsMenuOpen(false);
  };

  const handleSectionClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToSection?.(id);
    setIsMenuOpen(false);
  };

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
      scrollY > 50 
        ? 'bg-[#0f041a]/40 backdrop-blur-3xl py-3 border-b border-white/5 shadow-2xl' 
        : 'bg-transparent py-8'
    }`}>
      <div className="w-full px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo Section - Left (Flex-1) */}
        <div className="flex-1 flex justify-start">
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#ff7e33] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              <Logo size="sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none group-hover:text-[#ff7e33] transition-colors">AIDE+</span>
              <span className="text-[7px] text-[#ff7e33] font-bold tracking-[0.3em] uppercase opacity-60">Creative Hub</span>
            </div>
          </div>
        </div>

        {/* 目录导览框 (Desktop) - Center (Flex-none / Auto) */}
        <nav className="hidden xl:flex items-center space-x-1 px-6 py-2 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] mx-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSectionClick(link.id, e)}
                className="px-4 py-1 flex flex-col items-center group/link transition-all"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`text-[9px] font-black font-mono transition-all duration-500 ${
                    isActive ? 'text-[#ff7e33] opacity-100' : 'text-white/10 opacity-40 group-hover/link:opacity-100 group-hover/link:text-white'
                  }`}>
                    {link.index}
                  </span>
                  <span className={`text-[12px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-500 ${
                    isActive ? 'text-[#ff7e33] translate-y-[-1px] drop-shadow-[0_0_8px_rgba(255,126,51,0.5)]' : 'text-white/40 group-hover/link:text-white'
                  }`}>
                    {link.name}
                  </span>
                </div>
                <span className={`text-[6px] font-black tracking-[0.3em] transition-colors duration-500 ${
                  isActive ? 'text-[#ff7e33]/90' : 'text-white/5 group-hover/link:text-[#ff7e33]/60'
                }`}>
                  {link.sub}
                </span>
                <div className={`h-[2px] bg-gradient-to-r from-[#ff7e33] to-[#ff5c00] transition-all duration-500 mt-1.5 shadow-[0_0_12px_rgba(255,126,51,0.8)] ${
                  isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover/link:w-full group-hover/link:opacity-40'
                }`} />
              </a>
            );
          })}
        </nav>

        {/* 状态与控制区 - Right (Flex-1) */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex items-center space-x-6 relative z-[120]">
            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-black/20 backdrop-blur-md border border-white/10 text-[10px] font-black text-white/40 hover:text-white hover:border-[#ff7e33]/40 transition-all uppercase tracking-widest group whitespace-nowrap min-w-[100px]"
            >
              <Globe size={12} className="group-hover:text-[#ff7e33] transition-colors" />
              <span>{lang === 'zh' ? 'EN / 中' : '中 / EN'}</span>
            </button>

            <button 
              onClick={handleLogoClick}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white/40 hover:text-[#ff7e33] hover:border-[#ff7e33]/30 backdrop-blur-xl transition-all ${activeSection === 'home' || activeSection === 'consulting' ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}
            >
              <Home size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
            </button>
            
            <div className="flex flex-col items-end border-l border-white/10 pl-6">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${activeSection === 'home' ? 'bg-white/10' : 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'}`} />
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Live_Node</span>
              </div>
              <span className="text-[9px] font-mono text-[#ff7e33]/60 mt-1 uppercase">
                {activeSection.replace('-section', '').toUpperCase() || 'STANDBY'}
              </span>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <button className="xl:hidden text-white p-2.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 transition-colors ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端抽屉 */}
      <div className={`xl:hidden fixed inset-0 bg-[#020005]/80 backdrop-blur-[64px] z-[110] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        
        <div className="flex justify-between items-center px-8 py-6 border-b border-white/10 bg-[#020005]/40">
          <div onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer">
            <Logo size="sm" />
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter">AIDE+</span>
              <span className="text-[6px] text-[#ff7e33] font-bold tracking-[0.4em] uppercase">Creative Hub</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLang}
              className="p-3 bg-white/5 rounded-full border border-white/10 text-white"
            >
              <Globe size={18} />
            </button>
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-3 bg-white/10 rounded-full border border-white/20 shadow-xl">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col px-6 py-8 space-y-3 overflow-y-auto h-[calc(100vh-100px)] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020005]/20 to-transparent pointer-events-none" />

          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`group relative flex items-center justify-between py-5 px-6 rounded-[28px] transition-all duration-500 border ${
                  isActive 
                    ? 'bg-white/[0.15] border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl' 
                    : 'bg-white/[0.04] border-white/5 hover:bg-white/[0.08] hover:border-white/10'
                }`}
                onClick={(e) => handleSectionClick(link.id, e)}
                style={{ 
                  transitionDelay: `${i * 30}ms`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(40px)',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                <div className="flex items-center space-x-5">
                  <span className={`text-[10px] font-black font-mono tracking-tighter transition-colors ${isActive ? 'text-[#ff7e33]' : 'text-white/20'}`}>
                    {link.index}
                  </span>
                  <div className="flex flex-col">
                    <span className={`text-2xl font-black tracking-tight transition-all duration-500 ${
                      isActive ? 'text-[#ff7e33] scale-105 origin-left' : 'text-white group-hover:text-[#ff7e33]'
                    }`}>
                      {link.name}
                    </span>
                    <span className={`text-[8px] font-bold uppercase tracking-[0.4em] mt-0.5 transition-colors ${
                      isActive ? 'text-[#ff7e33]/70' : 'text-white/20'
                    }`}>
                      {link.sub}
                    </span>
                  </div>
                </div>
                
                <div className={`p-2.5 rounded-full transition-all duration-500 ${isActive ? 'bg-[#ff7e33] text-white scale-110 rotate-90 shadow-[0_0_20px_rgba(255,126,51,0.6)]' : 'text-white/10'}`}>
                  <ChevronRight size={18} />
                </div>
              </a>
            );
          })}
          
          <div className="pt-12 pb-20 flex justify-center">
            <button 
              onClick={handleLogoClick}
              className="flex items-center space-x-3 px-12 py-5 rounded-3xl bg-gradient-to-r from-[#ff7e33] to-[#ff5c00] text-white font-black text-[12px] uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(255,92,0,0.4)] active:scale-95 transition-all"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
