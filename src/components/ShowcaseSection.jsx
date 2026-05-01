import React from 'react';
import { motion } from 'framer-motion';
import { Server, Github, ExternalLink, Code2, Layers, Cpu, Globe } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const ShowcaseSection = React.memo(() => {
  const projects = [
    {
      title: "Zero-Downtime GitOps Pipeline",
      problem: "Deployments were manual, error-prone, and caused 15 mins of downtime per release.",
      solution: "Architected a GitOps pipeline using GitHub Actions, ArgoCD, and Kubernetes for automated rolling updates.",
      impact: "Reduced deployment time to 2 mins. Achieved 99.99% uptime during releases.",
      tech: ["GitHub Actions", "ArgoCD", "Kubernetes", "Docker"],
      github: "https://github.com/biswajit7815",
      demo: "#",
      icon: <Cpu className="text-blue-400" />
    },
    {
      title: "Scalable E-Commerce Microservices",
      problem: "Monolithic Node.js app crashed under heavy traffic during sale events.",
      solution: "Decoupled the monolith into Dockerized microservices. Orchestrated with AWS EKS and managed traffic with NGINX Ingress.",
      impact: "Handled 10x more concurrent users without performance degradation.",
      tech: ["AWS EKS", "Node.js", "Docker", "NGINX"],
      github: "https://github.com/biswajit7815",
      demo: "#",
      icon: <Layers className="text-indigo-400" />
    },
    {
      title: "Infrastructure as Code (IaC) Standardization",
      problem: "Cloud environments were created manually, leading to configuration drift and security vulnerabilities.",
      solution: "Implemented Terraform to provision all AWS resources. Integrated Trivy for infrastructure security scanning.",
      impact: "Eliminated config drift. Reduced environment provisioning time from 2 days to 15 minutes.",
      tech: ["Terraform", "AWS", "Trivy", "Security"],
      github: "https://github.com/biswajit7815",
      demo: "#",
      icon: <Server className="text-violet-400" />
    }
  ];

  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-20 px-4">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 flex justify-center items-center gap-3 font-display">
          <Code2 className="text-indigo-400" size={40} /> 
          Engineering <span className="gradient-text">Case Studies</span>
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">Real-world problems solved with scalable architecture and automation.</p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/10 group relative overflow-hidden flex flex-col lg:flex-row gap-10 items-center hover:border-indigo-500/30 transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
            
            <div className="flex-1 w-full z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-indigo-500/30 transition-colors">
                  {project.icon}
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all">
                  {project.title}
                </h4>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
                  <h5 className="text-xs font-black text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> Problem
                  </h5>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                
                <div className="bg-black/20 p-5 rounded-2xl border border-white/5">
                  <h5 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Architecture & Solution
                  </h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>

                <div className="bg-indigo-500/10 p-5 rounded-2xl border border-indigo-500/20">
                  <h5 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span> Business Impact
                  </h5>
                  <p className="text-indigo-100 font-medium text-sm leading-relaxed">{project.impact}</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col gap-8 z-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, j) => (
                    <span key={j} className="text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 group-hover:border-indigo-500/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-auto">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10">
                  <Github size={18} /> View Source Code
                </a>
                <a href={project.demo} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm bg-indigo-500 hover:bg-indigo-600 text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                  <ExternalLink size={18} /> Live Deployment
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

export default ShowcaseSection;
