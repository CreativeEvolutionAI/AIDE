
import React from 'react';
import { LangType } from '../App';

interface PartnersProps {
  lang: LangType;
}

const ecosystemPartners = [
  { name: "World AI Conference (WAIC)", tag: "AI Forum" },
  { name: "China-Britain AI Association (CBAIA)", tag: "Network" },
  { name: "Road to AGI Community", tag: "Community" },
  { name: "AIDE+ Ecosystem Hub", tag: "Core" },
  { name: "China-Britain Tech Summit", tag: "Summit" },
  { name: "Global AI Social Innovation", tag: "Innovation" },
  { name: "SparkX Incubator", tag: "Incubator" },
  { name: "CREO Future Creativity", tag: "Education" },
  { name: "Service+ Consulting", tag: "Partner" },
  { name: "CSDC Service Design", tag: "Industry" },
  { name: "Clive Grinyer Design", tag: "Global" },
  { name: "TusStar Tech Hub", tag: "Tech Hub" },
  { name: "Tsinghua University", tag: "Academic" },
  { name: "Tsinghua Future Scenario Lab", tag: "R&D" },
  { name: "Jiangnan University Design", tag: "Design" },
  { name: "JNJI Media Studio", tag: "Media" },
  { name: "CUC Arts", tag: "Arts" },
  { name: "UK Talent Association", tag: "Talents" }
];

const Partners: React.FC<PartnersProps> = ({ lang }) => {
  return (
    <section id="partners-section" className="py-32 bg-[#020005] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="w-12 h-px bg-[#a855f7] mb-8" />
          <h2 className="text-3xl font-black text-white tracking-[0.3em] uppercase mb-4">
            {lang === 'zh' ? '生态合作资源' : 'ECOSYSTEM PARTNERS'}
          </h2>
          <p className="text-gray-500 text-sm font-light uppercase tracking-widest">Global Resource Ecosystem</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ecosystemPartners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group aspect-square p-6 flex flex-col items-center justify-center text-center glass-card rounded-3xl border-white/5 hover:border-[#ff7e33]/30 hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff7e33]" />
              </div>
              <h4 className="text-white text-[10px] font-bold leading-tight mb-2 uppercase tracking-wide opacity-60 group-hover:opacity-100">
                {partner.name}
              </h4>
              <span className="text-[#a855f7] text-[8px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-32 space-y-12 opacity-40">
           <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
              <span>Cultural Tourism</span>
              <span className="text-[#ff7e33]">/</span>
              <span>Smart Mobility</span>
              <span className="text-[#ff7e33]">/</span>
              <span>Real Estate</span>
              <span className="text-[#ff7e33]">/</span>
              <span>Entertainment</span>
              <span className="text-[#ff7e33]">/</span>
              <span>Public Health</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
