
import React from 'react';
import { Globe, GraduationCap, Users, Award } from 'lucide-react';
import { PageType } from '../App';

interface AboutTeamProps {
  onNavigate?: (page: PageType) => void;
}

const AboutTeam: React.FC<AboutTeamProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020005]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20 mb-6">
              <Globe size={12} className="text-[#a855f7]" />
              <span className="text-[10px] font-bold text-[#a855f7] uppercase tracking-widest">Global Innovation Network</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
              由设计师与开发者组成的<br/>
              <span className="text-fluid-gradient">跨学科国际团队</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              AIDE+ 成员来自 <span className="text-white font-medium">清华大学、英国皇家艺术学院 (RCA)、帝国理工学院</span> 等海内外顶尖高校，以及顶尖互联网大厂。
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
              我们拥有多年世界 500 强企业的数字化咨询经验，积累了对创意流程、交互体验以及 AI 专家模型工具的深度理解，致力于为 B 端客户提供下一代智能解决方案。
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div 
                onClick={() => onNavigate?.('team-detail')}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff7e33]/30 transition-all group cursor-pointer"
              >
                <Users className="text-[#ff7e33] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-1">核心执行团队</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Core Execution Team</p>
              </div>
              <div 
                onClick={() => onNavigate?.('mentors-detail')}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a855f7]/30 transition-all group cursor-pointer"
              >
                <Award className="text-[#a855f7] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-1">资深顾问团</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Industry Mentors</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-[#ff7e33]/10 blur-[100px] rounded-full" />
            <div className="relative glass-card rounded-[40px] p-8 border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-gray-500">ORIGIN: CN / UK / EU</span>
              </div>
              
              <div className="space-y-8">
                {/* 学术共建 - 可点击 */}
                <div 
                  onClick={() => onNavigate?.('academic-detail')}
                  className="flex items-center space-x-6 group cursor-pointer p-4 rounded-3xl transition-all hover:bg-white/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#ff7e33]/20 transition-all group-hover:shadow-[0_0_20px_rgba(255,126,51,0.2)]">
                    <GraduationCap className="text-white w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h5 className="text-white font-bold">学术共建</h5>
                      <span className="text-[8px] text-white/20 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
                    </div>
                    <p className="text-gray-500 text-sm">与华威大学、清华美院等高校深度合作，推动 AI 创意思维教学实践。</p>
                  </div>
                </div>
                
                {/* 行业纵深 - 可点击 */}
                <div 
                  onClick={() => onNavigate?.('industry-detail')}
                  className="flex items-center space-x-6 group cursor-pointer p-4 rounded-3xl transition-all hover:bg-white/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#a855f7]/20 transition-all group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                    <Globe className="text-white w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h5 className="text-white font-bold">行业纵深</h5>
                      <span className="text-[8px] text-white/20 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Insights</span>
                    </div>
                    <p className="text-gray-500 text-sm">聚焦服务设计、科创咨询与教育行业，赋能 500 强企业数字化转型。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
