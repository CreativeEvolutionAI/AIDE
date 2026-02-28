
import React from 'react';
import { Check } from 'lucide-react';
import { PageType, LangType } from '../App';

interface BusinessModelSectionProps {
  onNavigate?: (page: PageType) => void;
  lang: LangType;
}

const BusinessModelSection: React.FC<BusinessModelSectionProps> = ({ onNavigate, lang }) => {
  const models = [
    {
      title: lang === 'zh' ? "交付方案 (对内)" : "INTERNAL DELIVERY",
      price: "£500-20,000",
      features: lang === 'zh' ? [
        "对内AI自动化流程",
        "对外交付咨询、报告结果",
        "按结果付费模式",
        "文旅/制造行业深度适配"
      ] : [
        "Internal AI automation",
        "Consulting & report delivery",
        "Pay-on-results model",
        "Tourism & Manufacturing focus"
      ],
      target: lang === 'zh' ? "想要融合AI的企业" : "AI-Ready Enterprises",
      margin: "60% Margin",
      count: "20+ Targeted Clients"
    },
    {
      title: lang === 'zh' ? "企业AI解决方案 (对企业)" : "ENTERPRISE SOLUTIONS",
      price: "£1,000-30,000",
      features: lang === 'zh' ? [
        "基于已有功能深度开发",
        "交付定制化AI产品",
        "按项目里程碑付费",
        "独立服务器托管支持"
      ] : [
        "Deep custom development",
        "Tailored AI products",
        "Milestone-based billing",
        "Private hosting support"
      ],
      target: lang === 'zh' ? "落地提效型企业" : "High-Growth Firms",
      margin: "70% Margin",
      count: "10+ Core Partners",
      popular: true
    },
    {
      title: lang === 'zh' ? "SaaS平台应用 (对用户)" : "SAAS SUBSCRIPTION",
      price: "£99/mo",
      features: lang === 'zh' ? [
        "企业用户订阅制",
        "历史学习工具集成",
        "本地服务器托管",
        "20+ 设计师协同能力"
      ] : [
        "User subscription model",
        "Historical learning tools",
        "Local server hosting",
        "20+ Designer collab suite"
      ],
      target: lang === 'zh' ? "独立设计师/小团队" : "Studios & Designers",
      margin: "80% Margin",
      count: "1000+ Active Users"
    }
  ];

  return (
    <section id="business-model-section" className="py-24 bg-[#0f041a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'zh' ? '商业运营模式' : 'BUSINESS MODELS'}
          </h2>
          <p className="text-gray-400 text-lg">
            {lang === 'zh' ? '满足不同规模企业的全场景 AI 转型需求' : 'Flexible AI transformation tiers for every scale'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, idx) => (
            <div 
              key={idx} 
              className={`relative p-0.5 rounded-[32px] transition-all duration-500 transform hover:-translate-y-2 ${model.popular ? 'bg-gradient-to-tr from-[#ff7e33] to-[#a855f7]' : 'bg-white/10'}`}
            >
              <div className="bg-[#1a0b2e] rounded-[30px] p-8 h-full flex flex-col">
                {model.popular && (
                  <span className="absolute top-4 right-4 bg-[#ff7e33] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {lang === 'zh' ? '最受推荐' : 'RECOMMENDED'}
                  </span>
                )}
                <h3 className="text-lg font-bold mb-2">{model.title}</h3>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-2xl font-black text-white">{model.price}</span>
                  <span className="text-gray-500 text-xs">/ plan</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {model.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                      <Check className="text-[#ff7e33] w-4 h-4 flex-shrink-0" />
                      <span className="font-light">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-500 uppercase">{lang === 'zh' ? '目标受众' : 'AUDIENCE'}</span>
                    <span className="text-white font-medium">{model.target}</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-500 uppercase">{lang === 'zh' ? '利润率' : 'MARGIN'}</span>
                    <span className="text-green-400 font-bold">{model.margin}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate && onNavigate('business-detail')}
                  className={`mt-8 w-full py-3 rounded-xl font-bold text-sm transition-all ${model.popular ? 'bg-[#ff7e33] text-white' : 'bg-white/5 text-white hover:bg-white/10'}`}
                >
                  {lang === 'zh' ? '立即咨询' : 'ENQUIRE NOW'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
