
import React from 'react';
import { ArrowUpRight, Cpu, BookOpen, Map, Users, Globe, Database } from 'lucide-react';
import { PageType } from '../App';

const cases = [
  {
    id: 'case-report' as PageType,
    title: '《2026全球AI创造力发展报告》智能体',
    category: '学术研究',
    description: '由 AIDE+ 团队与智谱平台合作完成，将报告转化为具备思维逻辑的“智库”角色。基于 15 年间 4436 个案例分析，由来自 19 个国家的 119 位专家共同完成。',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    icon: <BookOpen size={20} />,
    tags: ['智谱合作', '4436案例', '全球专家'],
    stats: "预计2025年秋季联合发布",
    details: [
      { label: "参与专家", value: "119位" },
      { label: "覆盖城市", value: "49个" },
      { label: "研究基础", value: "4436案例" }
    ],
    support: "新华网 / 国声智库 / 清华大学智能产业研究院"
  },
  {
    id: 'case-nav' as PageType,
    title: 'AIDE+ 导览智能体：展览与未来人物对话',
    category: '文旅导览',
    description: '专为文旅场景设计的 AI 导览系统。提供全深度的展品解读、沉浸式互动、多模态接口以及可定制化硬件外观。',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=800',
    icon: <Map size={20} />,
    tags: ['北京设计周', '中英峰会', '沉浸式交互'],
    stats: "多模态实时响应",
    details: [
      { label: "应用场景", value: "博物馆/展厅" },
      { label: "核心技术", value: "NLP/实时定位" },
      { label: "功能", value: "路线规划/数据分析" }
    ],
    support: "清华大学美术学院 / 北京国际设计周"
  }
];

interface CasesProps {
  onAction?: (id: PageType) => void;
}

const Cases: React.FC<CasesProps> = ({ onAction }) => {
  return (
    <section id="cases" className="py-32 bg-[#05010d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff7e33]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-20 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 w-fit">
            <Database size={12} className="text-[#a855f7]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Empirical Validation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
            书籍、学术报告<br/><span className="text-fluid-gradient">转化为 AI 智能体</span>
          </h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl">
            我们致力于将沉睡的数据与文献唤醒，通过 AI 报告中精美的图文保留，同时又让“Ta”化身为智库一样的角色，从创造力角度答疑解惑。
          </p>
        </div>

        <div className="space-y-32">
          {cases.map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual Side */}
                <div className="lg:col-span-7 relative order-2 lg:order-1">
                  <div className="absolute -inset-4 border border-white/5 rounded-[40px] pointer-events-none group-hover:border-[#ff7e33]/20 transition-all duration-700" />
                  <div className="relative aspect-video rounded-[32px] overflow-hidden bg-black shadow-2xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05010d] via-transparent to-transparent" />
                    
                    {/* Floating Data Tags */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="flex gap-4">
                        {item.details.map((d, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-white text-xl font-black">{d.value}</span>
                            <span className="text-gray-500 text-[8px] uppercase tracking-widest">{d.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff7e33]">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black text-[#ff7e33] uppercase tracking-[0.2em]">{item.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-6 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-base font-light mb-8 leading-relaxed italic">
                    {item.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-[#a855f7]/10 border border-[#a855f7]/20 text-[10px] text-[#a855f7] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                      支持单位: <span className="text-white ml-2">{item.support}</span>
                    </p>
                  </div>

                  <button 
                    onClick={() => onAction && onAction(item.id)}
                    className="flex items-center space-x-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-xs uppercase tracking-widest hover:bg-[#ff7e33] hover:border-[#ff7e33] transition-all group/btn"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
