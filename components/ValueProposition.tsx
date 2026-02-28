
import React from 'react';
import { BarChart3, Clock, Users, Zap } from 'lucide-react';
import { LangType } from '../App';

interface ValuePropositionProps {
  lang: LangType;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ lang }) => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-[#ff7e33]" />,
      label: lang === 'zh' ? "节省人力" : "LABOR SAVINGS",
      value: "40%",
      desc: lang === 'zh' ? "自动化流程显著降低重复性工作量" : "Automated workflows significantly reduce repetitive tasks"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#a855f7]" />,
      label: lang === 'zh' ? "缩短周期" : "CYCLE REDUCTION",
      value: "60%",
      desc: lang === 'zh' ? "多Agent并行协作，极大提效交付速度" : "Multi-agent collaboration drastically speeds up delivery"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00c6ff]" />,
      label: lang === 'zh' ? "发散方案" : "CREATIVE OPTIONS",
      value: "200%+",
      desc: lang === 'zh' ? "基于大模型的多维创意路径生成" : "Multidimensional creative path generation via LLMs"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      label: lang === 'zh' ? "转化成功率" : "SUCCESS RATE",
      value: "MATCHED",
      desc: lang === 'zh' ? "AI生成的质量已与资深设计师同步" : "AI output quality aligns with senior designer standards"
    }
  ];

  return (
    <section id="value-section" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'zh' ? '产品验证与价值' : 'VALIDATION & VALUE'}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {lang === 'zh' 
              ? '我们不仅提供技术，更关注落地效果。通过设计方法工具 AI 自动化验证项目，我们在高端私人医疗、文旅、农业科技等 10+ 领域验证了 AIDE+ 的卓越表现。'
              : 'We focus on actionable outcomes. Through AI-automated validation, we have proven AIDE+ performance across 10+ sectors including Healthcare, Tourism, and Agri-Tech.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-start space-x-4 p-6 glass-card rounded-2xl">
              <div className="bg-[#ff7e33]/20 p-3 rounded-xl">
                <Zap className="text-[#ff7e33] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  {lang === 'zh' ? '执行提效：深度集成' : 'Efficiency: Deep Integration'}
                </h4>
                <p className="text-sm text-gray-500">
                  {lang === 'zh' ? '将传统长达数周的调研与大纲梳理缩短至分钟级。' : 'Shorten weeks of traditional research and outlines to minutes.'}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 glass-card rounded-2xl">
              <div className="bg-[#a855f7]/20 p-3 rounded-xl">
                <BarChart3 className="text-[#a855f7] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">
                  {lang === 'zh' ? '落地成果：可量化指标' : 'Outcomes: Measurable ROI'}
                </h4>
                <p className="text-sm text-gray-500">
                  {lang === 'zh' ? '发散方案数量翻倍，且保持极高的逻辑严密性与落地可行性。' : 'Double creative options while maintaining strict logic and feasibility.'}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 md:p-8 glass-card rounded-[32px] flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{v.value}</div>
                <div className="text-[#ff7e33] font-bold text-xs mb-3 tracking-widest uppercase">{v.label}</div>
                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
