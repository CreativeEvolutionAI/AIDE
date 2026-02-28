
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutTeam from './components/AboutTeam';
import Showcase from './components/Showcase';
import Cases from './components/Cases';
import Education from './components/Education';
import Strategy from './components/Strategy';
import ValueProposition from './components/ValueProposition';
import BusinessModelSection from './components/BusinessModelSection';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage';
import LiquidSilkBackground from './components/LiquidSilkBackground';
import Logo from './components/Logo';

export type PageType = 
  | 'home' 
  | 'consulting' 
  | 'custom' 
  | 'saas' 
  | 'case-report' 
  | 'case-nav' 
  | 'booking' 
  | 'education-detail' 
  | 'business-detail'
  | 'ppt-detail'
  | 'neural-arch'
  | 'quantum-interface'
  | 'team-detail'
  | 'mentors-detail'
  | 'academic-detail'
  | 'industry-detail'
  | 'booking-success';

export type LangType = 'zh' | 'en';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activePage, setActivePage] = useState<PageType>('home');
  const [veilStatus, setVeilStatus] = useState<'idle' | 'in' | 'out'>('idle');
  const [activeSection, setActiveSection] = useState('home');
  // Set default language to English as requested
  const [lang, setLang] = useState<LangType>('en');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;

      if (activePage === 'home') {
        const sections = [
          'services-section', 
          'team-section', 
          'showcase-section', 
          'cases-section', 
          'edu-section', 
          'business-model-section', 
          'partners-section', 
          'contact-section'
        ];
        
        let current = 'home';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150) {
              current = id;
            }
          }
        }
        setActiveSection(current);
      } else {
        setActiveSection(activePage);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const navigateTo = (page: PageType) => {
    if (activePage === page && page !== 'home') return;
    setVeilStatus('in');
    setTimeout(() => {
      setActivePage(page);
      window.scrollTo(0, 0);
      setVeilStatus('out');
      setTimeout(() => setVeilStatus('idle'), 800);
    }, 600);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (activePage !== 'home') {
      setVeilStatus('in');
      setTimeout(() => {
        setActivePage('home');
        setVeilStatus('out');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
          setVeilStatus('idle');
        }, 100);
      }, 600);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020005] selection:bg-orange-500/30 overflow-x-hidden">
      <div className={`page-veil ${veilStatus === 'in' ? 'active' : ''} ${veilStatus === 'out' ? 'exit' : ''}`}>
        <div className="flex flex-col items-center">
          <Logo size="lg" />
          <div className="mt-8 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff7e33] animate-bounce" style={{animationDelay: '0s'}} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff7e33] animate-bounce" style={{animationDelay: '0.2s'}} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff7e33] animate-bounce" style={{animationDelay: '0.4s'}} />
          </div>
        </div>
      </div>

      <LiquidSilkBackground />

      <Header 
        scrollY={scrollY} 
        isVisible={true}
        activeSection={activeSection}
        onNavigate={navigateTo} 
        onScrollToSection={handleScrollToSection}
        lang={lang}
        setLang={setLang}
      />
      
      <main className="relative z-10">
        {activePage === 'home' ? (
          <>
            <div id="home">
              <Hero 
                lang={lang}
                onAction={() => navigateTo('consulting')} 
                onSecondaryAction={() => navigateTo('booking')} 
              />
            </div>
            <div id="services-section">
              <Services lang={lang} onNavigate={navigateTo} />
            </div>
            <div id="team-section">
              <AboutTeam lang={lang} onNavigate={navigateTo} />
            </div>
            <div id="showcase-section">
              <Showcase lang={lang} onNavigate={navigateTo} />
            </div>
            <div id="cases-section">
              <Cases lang={lang} onAction={navigateTo} />
            </div>
            <div id="edu-section">
              <Education lang={lang} onNavigate={navigateTo} />
            </div>
            <Strategy lang={lang} />
            <div id="value-section">
              <ValueProposition lang={lang} />
            </div>
            <div id="business-model-section">
              <BusinessModelSection lang={lang} onNavigate={navigateTo} />
            </div>
            <div id="partners-section">
              <Partners lang={lang} />
            </div>
            <div id="contact-section">
              <Contact lang={lang} onNavigate={navigateTo} />
            </div>
          </>
        ) : (
          <DetailPage lang={lang} type={activePage} onBack={() => navigateTo('home')} onNavigate={navigateTo} />
        )}
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
