
import React, { useState } from 'react';
import { Cpu, Palette, Box, Search, PenTool, BarChart, Sparkles, RefreshCw, Loader2 } from 'lucide-react';
import { PageType } from '../App';
import { GoogleGenAI } from "@google/genai";

interface ServicesProps {
  onNavigate?: (page: PageType) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [generatedImages, setGeneratedImages] = useState<{ [key: string]: string }>({});
  const [loadingMap, setLoadingMap] = useState<{ [key: string]: boolean }>({});

  const generateAIImage = async (serviceId: string) => {
    setLoadingMap(prev => ({ ...prev, [serviceId]: true }));
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = serviceId === 'custom' 
        ? "Ultra-premium 3D render of a futuristic AI core with glowing orange neural pathways inside a translucent purple crystalline structure, cinematic macro shot, depth of field, high-tech laboratory aesthetic, neon orange accents, 8k resolution."
        : "Futuristic technology concept art, high-end corporate style, purple and orange color palette.";

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData) {
        const imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        setGeneratedImages(prev => ({ ...prev, [serviceId]: imageUrl }));
      }
    } catch (error) {
      console.error("Image generation failed:", error);
    } finally {
      setLoadingMap(prev => ({ ...prev, [serviceId]: false }));
    }
  };

  const services = [
    {
      id: 'consulting' as PageType,
      title: 'AI 咨询赋能',
      icon: <Search className="w-10 h-10 text-[#ff7e33]" />,
      description: '通过前期梳理企业业务流程与咨询服务，赋能创新决策和服务优化，提供 AI 转型+提效全景图。',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-[#ff7e33] to-[#ff4b1f]'
    },
    {
      id: 'custom' as PageType,
      title: 'AI 定制开发',
      icon: <PenTool className="w-10 h-10 text-[#a855f7]" />,
      description: '整合企业数据，定制专属 AI Agent 角色与知识库体系，构建深度耦合业务流的定制化工作站。',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 
      gradient: 'from-[#a855f7] to-[#6a11cb]',
      canGenerate: true
    },
    {
      id: 'saas' as PageType,
      title: 'AI SaaS 平台',
      icon: <BarChart className="w-10 h-10 text-[#00e5ff]" />,
      description: '面向创意密集型企业的专业平台，提供基于专家的 AI 决策梳理、可视化报告与 Agent 产品集成。',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-[#00c6ff] to-[#0072ff]'
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0f041a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-[#ff7e33] uppercase tracking-widest mb-6">Solution Matrix</div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">创意驱动的 AI 专家模型</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            致力于为创意需求的 B 端客户提供基于 <span className="text-white font-medium italic">A2A + MCP + ADK</span> 架构的深度创新方案。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onNavigate && onNavigate(service.id)}
              className="group glass-card rounded-[40px] overflow-hidden hover:border-[#ff7e33]/30 transition-all duration-700 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-72 relative overflow-hidden bg-black/40">
                {loadingMap[service.id] ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f041a] to-[#1a0b2e]">
                    <div className="relative">
                       <Loader2 className="w-12 h-12 text-[#ff7e33] animate-spin" />
                       <div className="absolute inset-0 blur-lg bg-[#ff7e33]/20 animate-pulse" />
                    </div>
                    <span className="mt-4 text-[10px] font-black text-[#ff7e33] uppercase tracking-[0.3em] animate-pulse">Neural Forge in Action...</span>
                  </div>
                ) : (
                  <>
                    <img 
                      src={generatedImages[service.id] || service.image} 
                      alt={service.title} 
                      className={`w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110 ${generatedImages[service.id] ? 'grayscale-0 opacity-100' : ''}`} 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f041a] via-transparent to-transparent opacity-90" />

                    {service.canGenerate && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // 阻止冒泡到卡片跳转逻辑
                          generateAIImage(service.id);
                        }}
                        className="absolute top-6 right-6 z-20 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-black text-white uppercase tracking-widest flex items-center space-x-2 hover:bg-[#ff7e33] hover:border-[#ff7e33] transition-all group/gen shadow-2xl active:scale-95"
                      >
                        <Sparkles size={14} className="group-hover/gen:rotate-12 transition-transform text-orange-400" />
                        <span>{generatedImages[service.id] ? 'RE-GENERATE' : 'GENERATE AI IMAGE'}</span>
                      </button>
                    )}
                    
                    {generatedImages[service.id] && (
                      <div className="absolute top-6 left-6 z-20 px-3 py-1.5 rounded-lg bg-[#ff7e33] text-[9px] font-black text-white uppercase tracking-widest shadow-[0_0_20px_rgba(255,126,51,0.5)]">
                        GEN_01: CUSTOM_FLOW
                      </div>
                    )}
                  </>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-10 mix-blend-overlay group-hover:opacity-30 transition-opacity`} />
              </div>

              <div className="p-10 -mt-16 relative z-10">
                <div className="flex items-center space-x-5 mb-6">
                  <div className="p-4 rounded-[20px] bg-black/60 border border-white/10 backdrop-blur-3xl group-hover:border-[#ff7e33]/50 group-hover:shadow-[0_0_30px_rgba(255,126,51,0.2)] transition-all">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter text-white drop-shadow-lg">{service.title}</h3>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-12 text-base font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                
                <div 
                  className="flex items-center space-x-4 text-white font-black group/btn tracking-widest text-[11px] uppercase"
                >
                  <span className="text-[#ff7e33] group-hover:text-white transition-colors">Explore Capacity</span>
                  <div className="relative flex items-center h-[1px] flex-grow max-w-[60px]">
                    <div className="absolute inset-0 bg-[#ff7e33] transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                    <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#ff7e33] blur-[2px] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
