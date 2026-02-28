
import React from 'react';
import { Mail, Phone, MessageSquare, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { PageType } from '../App';

interface ContactProps {
  onNavigate?: (page: PageType) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#020005]">
      {/* 背景光效与高级感纹理 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a855f7]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ff7e33]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff7e33]/10 border border-[#ff7e33]/20 mb-8">
                <ShieldCheck size={12} className="text-[#ff7e33]" />
                <span className="text-[10px] font-black text-[#ff7e33] uppercase tracking-[0.2em]">Contact & Collaboration</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                准备好开启<br /><span className="text-fluid-gradient">AI 进化之旅</span>了吗？
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-md">
                无论是企业转型咨询、定制化 Agent 开发，还是创意工作坊合作，我们的专家团队都已准备就绪。
              </p>
              
              <div className="space-y-8">
                <div className="group flex items-center space-x-6 p-6 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#ff7e33]/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff7e33]/10 flex items-center justify-center text-[#ff7e33] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,126,51,0.1)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">商务邮箱</p>
                    <a href="mailto:Aide2070@163.com" className="text-xl md:text-2xl font-black text-white hover:text-[#ff7e33] transition-colors">
                      Aide2070@163.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center space-x-6 p-6 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">联系电话</p>
                    <a href="tel:18101138139" className="text-xl md:text-2xl font-black text-white hover:text-[#a855f7] transition-colors">
                      18101138139
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group/card">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff7e33] to-[#a855f7] rounded-[48px] blur opacity-10 group-hover/card:opacity-30 transition duration-1000"></div>
              <div className="relative glass-card p-10 md:p-12 rounded-[48px] border-white/10 overflow-hidden">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#ff7e33]/20 flex items-center justify-center text-[#ff7e33]">
                    <User size={20} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">创始人快捷联络</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-10 leading-relaxed font-light">
                  扫描下方二维码或点击按钮，直接与 AIDE+ 创始人进行深度业务沟通与飞书协作。
                </p>
                
                <div className="aspect-square w-48 mx-auto mb-10 bg-white/[0.03] rounded-3xl border border-white/5 flex items-center justify-center relative group/qr overflow-hidden shadow-inner">
                  <img 
                    src="/lark-qr.png" 
                    alt="Lark Feishu Connect QR Code" 
                    className="w-full h-full object-cover p-2 bg-white rounded-3xl opacity-90 group-hover/qr:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://gfin8743sy.feishu.cn/docx/Y1FSdUj4mo0ef2xekO3cl8msnsD?from=from_copylink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#fbbf24] text-black rounded-[24px] font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center space-x-3 shadow-[0_10px_20px_rgba(251,191,36,0.2)] hover:shadow-[0_15px_30px_rgba(251,191,36,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 border border-white/10"
                  >
                    <span>企业业务详细介绍</span>
                    <ArrowRight size={18} />
                  </a>

                  <button 
                    onClick={() => onNavigate && onNavigate('booking')}
                    className="w-full py-5 bg-gradient-to-r from-[#ff5c00] to-[#ff7e33] text-white rounded-[24px] font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center space-x-3 shadow-[0_20px_40px_rgba(255,92,0,0.25)] hover:shadow-[0_25px_50px_rgba(255,92,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 border border-white/10"
                  >
                    <span>点击详细咨询</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-black">
                    Secure_Connection_Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
