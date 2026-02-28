
import React from 'react';
import { Briefcase, GraduationCap, Laptop, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PageType } from '../App';

interface EducationProps {
  onNavigate?: (page: PageType) => void;
}

const Education: React.FC<EducationProps> = ({ onNavigate }) => {
  const workshops = [
    {
      type: "企业 AI 工作坊",
      goal: "推动企业 AI 转型，实现业务流程智能化与降本增效",
      modules: ["AI Agent 诊断与场景分析", "业务流程优化与智能体开发"],
      result: "决策者：明确 AI 战略路径；业务部门：提升效率 30%+",
      icon: <Briefcase className="text-[#ff7e33]" />
    },
    {
      type: "高校 AI 工作坊",
      goal: "培养跨学科 AI 实战能力，连接学术研究与产业需求",
      modules: ["AI Agent 基础理论", "行业课题实战 (如文旅/医疗)"],
      result: "学生：完成可落地的智能体项目；教师：推动产学研合作",
      icon: <GraduationCap className="text-[#a855f7]" />
    },
    {
      type: "青少年 AI 工作坊",
      goal: "激发创造力与科技素养，培养未来 AI 开发人员",
      modules: ["AI 通识与伦理教育", "智能体搭建 (对话/游戏 AI)"],
      result: "学生：掌握基础 AI 技能；学校：打造科技特色课程",
      icon: <Sparkles className="text-cyan-400" />
    }
  ];

  const courses = [
    { cat: "AI 商业场景创新", items: ["AI 与 UX 驱动商业创新 (20年专家)", "AI 融合业务场景的分析诊断 (咨询专家)"] },
    { cat: "AI 产品与用户体验设计", items: ["AI 生成 UI 界面实战课程 (资深大厂设计师)", "大厂交互体验设计实践 (资深大厂设计师)"] },
    { cat: "AI 图像、视频创作", items: ["AI 图像生成从基础到进阶 (ComfyUI专家)", "AI 视频生成从基础到进阶 (一线从业者)"] },
    { cat: "AI 技术应用开发", items: ["AI 编程实战：大模型应用开发 (Google 工程师)", "AI 智能体工作流开发 (Autogen/Dify/Coze 专家)"] }
  ];

  return (
    <section className="py-32 bg-[#020005] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            AI Agent 搭建教学培训<br/>
            <span className="text-fluid-gradient">共创工作坊赋能各领域创新</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-light">
            通过深度实战，我们将 AI 技术的种子播撒在不同土壤，从企业战略到青少年启蒙。
          </p>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {workshops.map((w, idx) => (
            <div 
              key={idx} 
              onClick={() => onNavigate && onNavigate('education-detail')}
              className="glass-card p-10 rounded-[40px] border-white/5 flex flex-col hover:border-[#ff7e33]/20 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {w.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{w.type}</h3>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">{w.goal}</p>
              
              <div className="space-y-4 mb-8 flex-grow">
                {w.modules.map((m, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#ff7e33] mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-300 font-medium">{m}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center space-x-2 text-[#a855f7] mb-2">
                  <TrendingUp size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Expected Outcome</span>
                </div>
                <p className="text-[11px] text-gray-400 italic leading-relaxed">{w.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Training Courses Grid */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">AI 培训课程矩阵</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-12">
                由资深行业专家、Google 工程师及大厂设计师联合打造，涵盖从商业逻辑到技术落地的全链路闭环。
              </p>
              <div className="flex space-x-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
                  <span className="text-2xl font-black text-white">20+</span>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest">Industry Years</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
                  <span className="text-2xl font-black text-white">100%</span>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest">Practical Content</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {courses.map((c, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                  <h4 className="text-[#ff7e33] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{c.cat}</h4>
                  <ul className="space-y-3">
                    {c.items.map((item, i) => (
                      <li key={i} className="text-white text-sm font-bold flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
