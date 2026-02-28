
import React from 'react';

const LiquidSilkBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020005]">
      {/* 核心底色层 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#0f051d_0%,#020005_100%)]" />
      
      {/* 噪点质感层 */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      {/* 科技感：神经元网格系统 (Neural Grid) - 增强对比 */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neuralGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#ff7e33" opacity="0.4">
                <animate attributeName="opacity" values="0.1;0.7;0.1" dur="3s" repeatCount="indefinite" />
              </circle>
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.3" strokeOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralGrid)" />
        </svg>
      </div>

      {/* 艺术感：流体发光体 (Artistic Glow Blobs) */}
      <div className="absolute top-[-15%] left-[-10%] w-[85vw] h-[85vh] rounded-full bg-[#ff7e33]/8 blur-[130px] animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-25%] right-[-10%] w-[95vw] h-[95vh] rounded-full bg-[#a855f7]/12 blur-[180px] animate-[pulse_14s_ease-in-out_infinite] animation-delay-3000" />
      
      <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* 高级滤镜：色散与强效发光 */}
          <filter id="hyperGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>

          <linearGradient id="dataTrailOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff7e33" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff7e33" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff7e33" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="dataTrailPurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 增强型动态光流路径 */}
        <g opacity="0.6" filter="url(#hyperGlow)">
          {[...Array(8)].map((_, i) => (
            <path 
              key={`trail-${i}`}
              d={`M-200,${100 + i * 110} Q${300 + Math.random() * 800},${Math.random() * 900} 1640,${100 + i * 110}`}
              fill="none" 
              stroke={i % 2 === 0 ? "url(#dataTrailOrange)" : "url(#dataTrailPurple)"}
              strokeWidth="1.2"
              strokeDasharray="150 1200"
            >
              <animate attributeName="stroke-dashoffset" from="1350" to="0" dur={`${6 + i * 1.5}s`} repeatCount="indefinite" />
              <animate attributeName="d" values={`M-200,${100 + i * 110} Q${300 + Math.random() * 800},${Math.random() * 900} 1640,${100 + i * 110}; M-200,${100 + i * 110} Q${100 + Math.random() * 1000},${Math.random() * 400} 1640,${100 + i * 110}; M-200,${100 + i * 110} Q${300 + Math.random() * 800},${Math.random() * 900} 1640,${100 + i * 110}`} dur={`${12 + i * 2}s`} repeatCount="indefinite" />
            </path>
          ))}
        </g>

        {/* 悬浮高亮数据节点 */}
        <g filter="url(#hyperGlow)">
          {[...Array(35)].map((_, i) => {
            const isOrange = Math.random() > 0.5;
            return (
              <circle key={`node-${i}`} r={Math.random() * 2 + 0.8} fill={isOrange ? "#ff7e33" : "#a855f7"} opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur={`${2 + Math.random() * 4}s`} begin={`${Math.random() * 10}s`} repeatCount="indefinite" />
                <animate attributeName="cx" from={Math.random() * 1440} to={Math.random() * 1440} dur="50s" repeatCount="indefinite" />
                <animate attributeName="cy" from={Math.random() * 900} to={Math.random() * 900} dur="50s" repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>
      </svg>
      
      {/* 动态扫描线 (Scanning Beam) - 增加亮度 */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#ff7e33] to-transparent animate-[scan_8s_linear_infinite]" 
             style={{ top: '-10%' }} />
      </div>

      {/* 增强型边缘暗角 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_10%,rgba(2,0,5,0.95)_100%)]" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(0vh); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default LiquidSilkBackground;
