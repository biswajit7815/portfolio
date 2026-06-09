import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Container, GitBranch, Activity, Server, Terminal } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const SkillsSection = React.memo(() => {
  const skillCategories = [
    { title: "Cloud", icon: <Cloud size={32} className="text-blue-400"/>, items: ["AWS (EC2, S3, IAM, VPC)", "Azure", "GCP"], glow: "from-blue-500/20 to-transparent", dotColor: "bg-blue-500" },
    { title: "Containers", icon: <Container size={32} className="text-indigo-400"/>, items: ["Docker", "Kubernetes (K8s)", "Helm"], glow: "from-indigo-500/20 to-transparent", dotColor: "bg-indigo-500" },
    { title: "CI/CD", icon: <GitBranch size={32} className="text-green-400"/>, items: ["GitHub Actions", "Jenkins", "GitLab CI"], glow: "from-green-500/20 to-transparent", dotColor: "bg-green-500" },
    { title: "Monitoring", icon: <Activity size={32} className="text-rose-400"/>, items: ["Prometheus", "Grafana", "ELK Stack"], glow: "from-rose-500/20 to-transparent", dotColor: "bg-rose-500" },
    { title: "IaC & Config", icon: <Server size={32} className="text-orange-400"/>, items: ["Terraform", "Ansible", "Pulumi"], glow: "from-orange-500/20 to-transparent", dotColor: "bg-orange-500" },
    { title: "OS & Tools", icon: <Terminal size={32} className="text-yellow-400"/>, items: ["Linux (Ubuntu, CentOS)", "Bash", "Python"], glow: "from-yellow-500/20 to-transparent", dotColor: "bg-yellow-500" }
  ];

  return (
    <motion.section 
      id="skills" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={sectionVariants} 
      className="scroll-mt-24"
    >
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 font-display">Technical <span className="gradient-text">Arsenal</span></h3>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }}
            className="glass-card rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group transition-all duration-500"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.glow} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest font-display">{category.title}</h4>
              <ul className="space-y-3">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${category.dotColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

export default SkillsSection;
