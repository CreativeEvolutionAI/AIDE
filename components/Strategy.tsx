
import React from 'react';
import { Target, Shield, Zap, RefreshCw, BarChart3, Database } from 'lucide-react';

const Strategy: React.FC = () => {
  const pillars = [
    {
      title: "市场定位精准",
      subtitle: "细分市场 & 潜在客户",
      desc: "目前市场上产品还没有完全满足这一细分市场的用户需求，我们积累了潜在的客户资源。",
      icon: <Target className="text-[#ff7e33]" />,
      partners: ["Service+ 咨询", "厦门彩虹设计网", "Clive Grinyer", "OULIN 欧琳"]
    },
    {
      title: "咨询、设计领域经验",
      subtitle: "专业工具 & 数据 & 资源",
      desc: "团队在咨询、创新、设计有专业的分析工具、项目数据和人脉资源，对创意流程和交互体验有深刻理解。",
      icon: <Shield className="text-[#a855f7]" />,
      features: ["专业分析工具", "海量项目数据", "深刻交互理解"]
    },
    {
      title: "独有技术创新",
      subtitle: "大模型架构经验",
      desc: "专注探索近百种 RAG 策略，对于不同用户知识库和需求的 Retrieval 效率，具有大语言模型应用前后端的开发经验。",
      icon: <Database className="text-cyan-400" />,
      tag: "Deep RAG Strategy"
    },
    {
      title: "产品与时俱进",
      subtitle: "技术迭代 & 用户粘性",
      desc: "产品随着技术发展不会被淘汰，数据库随着使用不断进化，越来越懂用户的思考，形成高用户粘性和迁移成本。",
      icon: <RefreshCw className="text-green-400" />,
      stats: "USE -> LEARN -> DELIVER"
    }
  ];

  return (
    <section className="py-32 bg-[#05010d] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff7e33]/10 border border-[#ff7e33]/20 mb-6">
            <Zap size={12} className="text-[#ff7e33]" />
            <span className="text-[10px] font-bold text-[#ff7e33] uppercase tracking-widest">Our Defendable Market Position</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">竞争优势 & <span className="text-fluid-gradient">市场护城河</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[48px] border-white/5 hover:border-white/10 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#ff7e33]/20 transition-colors">
                    {React.cloneElement(p.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white leading-none mb-2">{p.title}</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{p.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-10 font-light">
                  {p.desc}
                </p>
              </div>

              {p.partners && (
                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                  {p.partners.map((partner, i) => (
                    <span key={i} className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{partner}</span>
                  ))}
                </div>
              )}
              
              {p.tag && (
                <div className="inline-flex items-center space-x-2 pt-8 border-t border-white/5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{p.tag}</span>
                </div>
              )}

              {p.stats && (
                <div className="text-[10px] font-black text-green-400 uppercase tracking-widest pt-8 border-t border-white/5">
                  {p.stats}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
