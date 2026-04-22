import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Briefcase, GraduationCap, Calendar, Activity } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const ExperienceSection = React.memo(() => {
  const journey = [
    {
      title: "DevSecOps Enthusiast & Builder",
      company: "Independent / Projects",
      period: "2023 - Present",
      desc: "Architecting automated infrastructure and CI/CD pipelines. Focused on AWS, Kubernetes, and Terraform. Actively sharing insights with 3k+ community impressions.",
      icon: <Briefcase className="text-primary-400" />,
      color: "border-primary-500/50"
    },
    {
      title: "Cloud Infrastructure Learning",
      company: "Self-Paced Training",
      period: "2022 - 2023",
      desc: "Mastered containerization with Docker and orchestration with Kubernetes. Built several production-grade reverse proxy setups and load balancing solutions.",
      icon: <Activity className="text-secondary-400" />,
      color: "border-secondary-500/50"
    },
    {
      title: "IT Foundations",
      company: "Academic Journey",
      period: "2021",
      desc: "Deep dive into Linux administration, networking fundamentals, and Python scripting for system automation.",
      icon: <GraduationCap className="text-primary-400" />,
      color: "border-primary-500/50"
    }
  ];

  return (
    <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">The <span className="gradient-text">Journey</span></h3>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto pl-10 md:pl-20 border-l-2 border-white/5 space-y-12 py-8">
        {journey.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[51px] md:-left-[91px] top-0 w-10 h-10 rounded-2xl bg-dark-900 border-2 ${item.color} flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
              {item.icon}
            </div>
            
            <div className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{item.title}</h4>
                  <div className="text-primary-400 font-bold text-sm tracking-widest uppercase mt-1">{item.company}</div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-bold bg-white/5 px-4 py-1.5 rounded-full">
                  <Calendar size={14} />
                  {item.period}
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

export default ExperienceSection;
