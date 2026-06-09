import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Search } from 'lucide-react';

const PsychologySection = React.memo(() => {
  const reasons = [
    {
      title: "Production-Ready Mindset",
      desc: "I don't just write scripts. I build resilient, self-healing systems designed for high availability and zero downtime.",
      icon: <Shield size={32} className="text-blue-400" />,
      color: "blue"
    },
    {
      title: "Rapid Skill Acquisition",
      desc: "Cloud native tools evolve daily. I have a proven track record of rapidly mastering new tech stacks and implementing them securely.",
      icon: <Zap size={32} className="text-yellow-400" />,
      color: "yellow"
    },
    {
      title: "Root Cause Obsession",
      desc: "When things break, I don't just restart services. I dive into logs, traces, and metrics to find and fix the root cause permanently.",
      icon: <Search size={32} className="text-indigo-400" />,
      color: "indigo"
    },
    {
      title: "Security by Default",
      desc: "I treat security as a Day-0 requirement, not an afterthought. Integrating automated scanning and RBAC into every pipeline.",
      icon: <Brain size={32} className="text-purple-400" />,
      color: "purple"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto my-16 md:my-32 px-4 sm:px-6"
    >
      <div className="text-center mb-10 md:mb-16">
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 font-display">
          Why Hire <span className="gradient-text">Me?</span>
        </h3>
        <p className="text-gray-400 text-sm md:text-base">Beyond the tools, it's about the engineering mindset.</p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {reasons.map((item, i) => {
          const colorsMap = {
            blue: {
              border: 'border-blue-500/10 hover:border-blue-500/30',
              glow: 'bg-blue-500/10 group-hover:bg-blue-500/20',
              bg: 'bg-blue-500/10 border-blue-500/20'
            },
            yellow: {
              border: 'border-yellow-500/10 hover:border-yellow-500/30',
              glow: 'bg-yellow-500/10 group-hover:bg-yellow-500/20',
              bg: 'bg-yellow-500/10 border-yellow-500/20'
            },
            indigo: {
              border: 'border-indigo-500/10 hover:border-indigo-500/30',
              glow: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
              bg: 'bg-indigo-500/10 border-indigo-500/20'
            },
            purple: {
              border: 'border-purple-500/10 hover:border-purple-500/30',
              glow: 'bg-purple-500/10 group-hover:bg-purple-500/20',
              bg: 'bg-purple-500/10 border-purple-500/20'
            }
          };
          const styles = colorsMap[item.color] || colorsMap.blue;
          return (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card rounded-[2rem] p-6 sm:p-8 border ${styles.border} transition-all group relative overflow-hidden`}
            >
              <div className={`absolute -right-10 -top-10 w-32 h-32 ${styles.glow} rounded-full blur-[40px] transition-colors`}></div>
              
              <div className="flex gap-6 items-start relative z-10">
                <div className={`p-4 rounded-2xl ${styles.bg} border group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-medium text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
});

export default PsychologySection;
