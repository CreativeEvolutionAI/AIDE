
import React, { useState } from 'react';
import { 
  ArrowLeft, Sparkles, Zap, Search, PenTool, BarChart, 
  ShieldCheck, Layers, Cpu, Globe, BookOpen, Map, 
  Database, Info, Calendar, MessageSquare, Briefcase, 
  GraduationCap, TrendingUp, DollarSign, Users, FileText, Monitor, Share2,
  Clock, Award, Star, CheckCircle2, ChevronRight, User, Mail, Phone, Activity,
  Target, Rocket, Microscope
} from 'lucide-react';
import { PageType } from '../App';

interface DetailPageProps {
  type: PageType;
  onBack: () => void;
  onNavigate?: (page: PageType) => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ type, onBack, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: ''
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const getInitials = (name: string) => {
    if (/[a-zA-Z]/.test(name)) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    return name.slice(0, 2);
  };

  const teamData = {
    domesticCore: [
      { name: "Aoran Sun", title: "创始人 - AI产品经理", desc: "中英人工智能协会研究员, 皇家艺术学院 服务设计 硕士, 世界500强合作设计咨询经验" },
      { name: "Zichuan Zhang", title: "商业交付负责人", desc: "10年服务设计咨询顾问, 连续获得中国服务设计优秀项目, 服务上百家服务行业企业" },
      { name: "Wenjingyu", title: "UX 设计师", desc: "拥有艺术设计学位和7年B端SaaS UX设计经验, 擅长用户中心设计 and 数据驱动的产品优化" },
      { name: "Xiao Zheng", title: "技术开发", desc: "Google 软件工程师, 有多年后端开发 and 数据pipeline搭建经验" },
      { name: "Johnson", title: "算法工程师", desc: "全栈算法工程师, 10年NLP方向工作经验, 擅长多模态, 大模型 and Agent的结合" }
    ],
    ukMembers: [
      { name: "Pingfan Wang", title: "AI 技术负责人", desc: "英国大学计算机助理教授, 主讲数据分析、AI以及云计算, AI科普博主全网浏览2亿次" },
      { name: "Yuxin Peng", title: "产品策略", desc: "帝国理工 AI与工程设计博士在读, 皇家艺术学院交互设计 硕士, 英国艺术公司前端工程师经验" },
      { name: "Yeting Jin", title: "市场战略", desc: "帝国理工 化学工程博士在读, 曾在BCG和Strategy&从事管理和战略咨询工作" },
      { name: "Bingqin", title: "品牌 & 业务", desc: "帝国理工 & RCA 设计工程 硕士, 英国4A广告公司内容总监, 前好莱坞制作公司创意总监" },
      { name: "Xiuqi Wang", title: "商业拓展", desc: "伦敦大学学院艺术与科学 硕士在读, 曾在奇迹创投和阳光集团工作" }
    ],
    mentorsDomestic: [
      { name: "吴卓浩", title: "AI产品设计专家", desc: "中国传媒大学 副教授, 阿派朗创造力科技联合创始人, 曾任Google中国体验设计负责人, 曾任创新工场AI工程院副总裁" },
      { name: "吴祐昕", title: "AI品牌体验专家", desc: "江南大学 设计学院 教授, 元宇宙融媒设计联合创新实验室负责人, 中国广告协会学术委员会委员, 中国欧美同学会对外传播中心核心专家组成员, AIPO江南大学召集人" }
    ],
    mentorsInternational: [
      { region: "英国顾问", name: "Clive Grinyer", title: "创新服务专家", desc: "英国皇家艺术学院 服务设计前系主任, 英国创意50人, 设计咨询公司创始人" },
      { region: "欧洲顾问", name: "Titta Jylkäs", title: "设计+AI教育家", desc: "芬兰拉普兰大学讲师、博士, 人工智能咨询公司创始人, AI与设计方法结合的创新者" }
    ]
  };

  const IdentityNode = ({ name, color }: { name: string, color: string }) => (
    <div className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-500">
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} opacity-20 blur-md group-hover:opacity-40 transition-opacity animate-pulse`} />
      <div className="relative w-full h-full rounded-full bg-[#0a0212] border border-white/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
        <span className={`text-xl font-black bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
          {getInitials(name)}
        </span>
        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r ${color}`} />
        </div>
      </div>
    </div>
  );

  const ExpertSignature = ({ color }: { color: string }) => (
    <div className="w-28 h-28 rounded-3xl bg-white/[0.03] border border-white/10 shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-tr ${color} opacity-5 group-hover:opacity-10 transition-opacity`} />
      <div className="absolute top-3 right-4 flex space-x-1">
        <div className="w-1 h-1 rounded-full bg-white/20" />
        <div className="w-1 h-1 rounded-full bg-white/20" />
        <div className="w-1 h-1 rounded-full bg-white/20" />
      </div>
      <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-40 group-hover:opacity-80 transition-opacity">
        <path d="M20,50 Q50,20 80,50 T20,50" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/40 animate-pulse" />
        <circle cx="50" cy="50" r="1.5" fill="white" className="animate-ping" />
      </svg>
      <Activity size={14} className="absolute bottom-4 right-4 text-white/10" />
    </div>
  );

  const contentMap = {
    'team-detail': {
      title: "核心执行团队",
      subtitle: "AIDE+ GLOBAL CORE TEAM",
      icon: <Users size={48} className="text-[#ff7e33]" />,
      heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      desc: "跨学科背景与国际视野的深度融合。AIDE+ 核心执行团队负责将 AI 逻辑转化为卓越的 B 端解决方案，驱动产品的高效交付与体验迭代。",
      stats: ["10+ 核心专家", "24h 敏捷响应", "全链路开发"]
    },
    'mentors-detail': {
      title: "资深顾问团",
      subtitle: "AIDE+ INDUSTRY MENTORS",
      icon: <Award size={48} className="text-[#a855f7]" />,
      heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      desc: "汇聚全球顶尖学府与工业界的智库力量。我们的顾问团为 AIDE+ 提供深厚的行业洞察、学术共建以及全球化的战略指导。",
      stats: ["4+ 顶级导师", "19+ 国家链接", "15年 经验沉淀"]
    },
    'academic-detail': {
      title: "学术共建与科研",
      subtitle: "ACADEMIC ECOSYSTEM & R&D",
      icon: <GraduationCap size={48} className="text-emerald-400" />,
      heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
      desc: "链接顶尖高校科研资源，将 AI 前沿研究成果转化为产业动能。我们通过与清华美院、华威大学等学术机构的深度共建，定义未来 AI 创意的教学与商业标准。",
      features: [
        { icon: <Microscope />, title: "联合实验室 R&D", detail: "针对多模态 Agent 与 MCP 架构开展深度实验性研究。" },
        { icon: <BookOpen />, title: "创意思维教研", detail: "开发 AI Native 的设计思维工具包，赋能下一代创意人才。" },
        { icon: <Share2 />, title: "国际学术交流", detail: "定期举办跨国 AI 工作坊，共享中英欧三地的创新洞察。" }
      ],
      stats: ["3+ 合作高校", "15+ 发表课题", "50+ 联合实验"]
    },
    'industry-detail': {
      title: "行业纵深咨询",
      subtitle: "VERTICAL INDUSTRY EXPERTISE",
      icon: <Globe size={48} className="text-cyan-400" />,
      heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      desc: "深挖垂直行业痛点，提供具备极高落地性的数字化转型方案。我们在医疗、文旅、智能制造等多个关键领域，利用定制化 AI 专家模型协助企业实现结构性增长。",
      features: [
        { icon: <Target />, title: "精准业务审计", detail: "为 500 强企业提供深度的业务流 AI 适配度扫描与 ROI 预估。" },
        { icon: <Rocket />, title: "数字化转型引擎", detail: "不仅提供咨询报告，更交付可直接嵌入业务流程的 AI 生产力工具。" },
        { icon: <ShieldCheck />, title: "企业级合规方案", detail: "确保 AI 应用符合行业监管要求，提供私有化部署与数据脱敏支持。" }
      ],
      stats: ["10+ 垂直行业", "500强 深度服务", "ROI 提升 35%"]
    },
    'booking-success': {
      title: "预约已确认",
      subtitle: "CONNECTION ESTABLISHED",
      icon: <CheckCircle2 size={48} className="text-green-400" />,
      heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      desc: "您的咨询请求已进入 AIDE+ 专家调度系统。我们的顾问将会在 24 小时内通过您提供的联系方式与您取得联系。",
      features: [
        { icon: <Clock />, title: "24h 专家响应", detail: "创始人或行业合伙人将直接介入您的需求评估。" },
        { icon: <Search />, title: "初步业务审计", detail: "我们将基于您提供的背景资料，进行初步的 AI 适配度扫描。" },
        { icon: <Briefcase />, title: "定制方案输出", detail: "首次会议后，您将获得一份包含 ROI 预估的 AI 转型简报。" }
      ],
      stats: ["Status: Queued", "Priority: High", "Ref: #AI-2025"]
    },
    consulting: {
      title: "AI 战略咨询助手",
      subtitle: "专家驱动的 AI 转型引擎",
      icon: <Search size={48} className="text-[#ff7e33]" />,
      heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      desc: "AIDE+ 提供面向创意领域 ToB 的深度咨询。通过专家级 AI 转型调研，我们能为项目前期缩短 60% 的时间，并节省约 40% 的人力投入。",
      features: [
        { icon: <Search />, title: "业务流自动化验证", detail: "深度诊断 10+ 垂直行业（医疗、文旅、房产等）的自动化潜力。" },
        { icon: <TrendingUp />, title: "发散方案提效", detail: "基于 AI 的创意发散能力，可提供多出传统模式 200% 的可选方案。" },
        { icon: <Globe />, title: "国际专家智库", detail: "汇集清华、RCA 等顶尖学府资源，提供具备国际视野的落地建议。" }
      ],
      stats: ["节省 40% 人力", "提效 60% 时间", "200% 方案量"]
    },
    custom: {
      title: "AI 定制化设计交付",
      subtitle: "从 AI Agent 到空间体验",
      icon: <PenTool size={48} className="text-[#a855f7]" />,
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      desc: "整合大模型与软硬件技术。我们专注于 AI Agent 开发、AI 产品设计及 AI 空间体验设计，实现多智能体之间联通协同的沉浸式环境。",
      features: [
        { icon: <Cpu />, title: "AI Agent 开发", detail: "定制具备长短期记忆与工具调用能力的垂直行业专家智能体。" },
        { icon: <Monitor />, title: "AI 产品设计", detail: "通过 AI 赋能 UI/UX 工作流，实现高质量的快速原型产出。" },
        { icon: <Layers />, title: "AI 空间体验", detail: "在展览、工作坊中应用 AI 语音对话与角色模拟，重塑人机交互场景。" }
      ],
      stats: ["软硬一体", "多 Agent 协同", "沉浸式剧情"]
    },
    saas: {
      title: "创意 ToB SaaS 平台",
      icon: <BarChart size={48} className="text-[#00e5ff]" />,
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      subtitle: "可视化报告与 Agent 集成平台",
      desc: "为创意密集型企业提供基于 A2A (Ask-to-Answer) 架构的 SaaS 工具。支持企业私有化部署，提供高度安全的数据托管服务。",
      features: [
        { icon: <BarChart />, title: "可视化决策报告", detail: "将复杂的业务逻辑转化为直观的数据可视化图表与咨询报告。" },
        { icon: <ShieldCheck />, title: "本地服务器托管", detail: "支持 Local Server Hosting，确保企业核心创意资产的数据安全。" },
        { icon: <Layers />, title: "协同设计工具", detail: "内置支持 20+ 位设计师在线协同的 AI 创意辅助套件。" }
      ],
      stats: ["A2A 架构", "私有化部署", "多人协同"]
    },
    home: { title: "", subtitle: "", icon: null, heroImage: "", desc: "", features: [], stats: [] }
  };

  const current = contentMap[type] || contentMap.consulting;

  const handleAction = async () => {
    if (type === 'booking') {
      if (!formData.name || !formData.email || !formData.phone) {
        alert("请填写完整的联络信息，以便我们的专家与您取得联系。");
        return;
      }

      try {
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('business', formData.business);
        if (file) {
          data.append('file', file);
        }

        const response = await fetch('/api/contact', {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          onNavigate?.('booking-success');
        } else {
          const errorData = await response.json();
          alert(`提交失败: ${errorData.error || '请稍后重试'}`);
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('提交失败，请检查网络连接或稍后重试。');
      }
    } else if (onNavigate) {
      if (type === 'booking-success') {
        onBack();
      } else {
        onNavigate('booking');
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 overflow-x-hidden">
      <div className="relative w-full h-[60vh] md:h-[70vh] mb-[-120px]">
        <img 
          src={current.heroImage} 
          alt={current.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020005]/40 via-[#020005]/80 to-[#020005]" />
        
        <div className="absolute bottom-[160px] left-0 right-0 px-6">
          <div className="container mx-auto max-w-5xl">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-white/60 hover:text-[#ff7e33] transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">返回首页</span>
            </button>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="text-[10px] font-black text-[#ff7e33] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-[#ff7e33]" />
                  {current.subtitle}
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-2">
                  <span className="text-fluid-gradient">{current.title}</span>
                </h1>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {current.stats?.map((s, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl text-[10px] font-bold text-white/70 shadow-2xl">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="glass-card p-10 md:p-16 rounded-[48px] border-white/10 relative overflow-hidden">
          {type === 'team-detail' ? (
            <div className="relative z-10">
              <div className="mb-16">
                <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
                  <div className="w-2 h-8 bg-[#ff7e33] rounded-full" />
                  AIDE+ 国内核心团队
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {teamData.domesticCore.map((member, i) => (
                    <div key={i} className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#ff7e33]/30 transition-all">
                      <IdentityNode name={member.name} color="from-[#ff7e33] to-[#a855f7]" />
                      <h4 className="text-white font-bold text-sm mb-1">{member.name}</h4>
                      <p className="text-[#ff7e33] text-[9px] font-black uppercase tracking-widest mb-3">{member.title}</p>
                      <p className="text-gray-500 text-[9px] leading-relaxed">{member.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
                  <div className="w-2 h-8 bg-[#a855f7] rounded-full" />
                  AIDE+ 英国成员
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {teamData.ukMembers.map((member, i) => (
                    <div key={i} className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all">
                      <IdentityNode name={member.name} color="from-[#a855f7] to-cyan-400" />
                      <h4 className="text-white font-bold text-sm mb-1">{member.name}</h4>
                      <p className="text-[#a855f7] text-[9px] font-black uppercase tracking-widest mb-3">{member.title}</p>
                      <p className="text-gray-500 text-[9px] leading-relaxed">{member.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : type === 'mentors-detail' ? (
            <div className="relative z-10">
               <div className="mb-16">
                <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
                  <div className="w-2 h-8 bg-green-500 rounded-full" />
                  AIDE+ 导师顾问 (国内)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {teamData.mentorsDomestic.map((member, i) => (
                    <div key={i} className="group flex items-start space-x-6 p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all">
                      <ExpertSignature color="from-green-500 to-emerald-400" />
                      <div>
                        <h4 className="text-white text-xl font-black mb-2">{member.name}</h4>
                        <p className="text-green-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.title}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
                  <div className="w-2 h-8 bg-cyan-400 rounded-full" />
                  AIDE+ 国际顾问
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {teamData.mentorsInternational.map((member, i) => (
                    <div key={i} className="group flex items-start space-x-6 p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all">
                      <ExpertSignature color="from-cyan-400 to-blue-500" />
                      <div>
                        <span className="inline-block px-3 py-1 rounded-md bg-cyan-400/10 text-cyan-400 text-[8px] font-black uppercase tracking-[0.3em] mb-3">{member.region}</span>
                        <h4 className="text-white text-xl font-black mb-2">{member.name}</h4>
                        <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.title}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="max-w-3xl mb-16">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group hover:border-[#ff7e33]/50 transition-colors">
                    {current.icon}
                  </div>
                  <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed opacity-90">
                  {current.desc}
                </p>
              </div>

              {type === 'booking' && (
                <div className="mb-16 grid grid-cols-1 gap-8">
                  <div className="p-8 md:p-12 rounded-[40px] bg-white/[0.03] border border-white/10 shadow-inner">
                    <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                      <FileText className="text-[#ff7e33]" size={20} />
                      填写咨询申请表 / Consultation Form
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">姓名 / Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ff7e33] transition-colors" size={18} />
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="您的姓名"
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[#ff7e33]/50 transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">联系电话 / Phone Number</label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ff7e33] transition-colors" size={18} />
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="手机号 / 企业座机"
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[#ff7e33]/50 transition-all"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">商务邮箱 / Corporate Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#ff7e33] transition-colors" size={18} />
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@company.com"
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[#ff7e33]/50 transition-all"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">业务背景信息 / Business Context</label>
                        <div className="relative group">
                          <Briefcase className="absolute left-4 top-6 text-white/20 group-focus-within:text-[#ff7e33] transition-colors" size={18} />
                          <textarea 
                            name="business"
                            value={formData.business}
                            onChange={handleInputChange}
                            placeholder="请简述您的业务痛点或希望通过 AI 实现的目标..."
                            rows={4}
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[#ff7e33]/50 transition-all resize-none"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">附件上传 / Attachment (Optional)</label>
                        <div className="relative group">
                          <input 
                            type="file" 
                            onChange={handleFileChange}
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-4 pr-4 text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#ff7e33]/10 file:text-[#ff7e33] hover:file:bg-[#ff7e33]/20 transition-all cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {current.features?.map((f, i) => (
                  <div key={i} className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-[#ff7e33]/30 transition-all group">
                    <div className="text-[#ff7e33] mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h3 className="text-white text-lg font-bold mb-3">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5 mt-10">
            <div className="flex items-center space-x-5">
              <div className="relative">
                <div className={`w-3 h-3 rounded-full bg-green-500 animate-ping absolute inset-0`} />
                <div className={`w-3 h-3 rounded-full bg-green-500 relative`} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">
                  {type === 'booking-success' ? 'Appointment_Confirmed' : 'Expert_Node_Online'}
                </span>
                <span className="text-[8px] text-gray-600 font-mono">LATENCY: 24ms</span>
              </div>
            </div>

            <button 
              onClick={handleAction}
              className={`group relative px-12 py-5 ${type === 'booking-success' ? 'bg-white/5 border-white/10' : 'bg-[#ff7e33]'} text-white rounded-[24px] font-black text-sm uppercase tracking-widest shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 border border-white/20 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2">
                {type === 'booking-success' ? (
                  <>
                    <ArrowLeft size={16} />
                    返回控制中心
                  </>
                ) : type === 'booking' ? (
                  <>
                    提交咨询信息
                    <ChevronRight size={16} />
                  </>
                ) : (
                  '立即咨询项目细节'
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
