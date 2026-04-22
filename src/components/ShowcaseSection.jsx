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
      title: "End-to-End CI/CD Pipeline",
      desc: "Implemented a fully automated GitOps pipeline using Jenkins, Docker, and GitHub Actions. Automates testing, security scanning, and deployment to staging/production.",
      tech: ["Jenkins", "Docker", "GitHub Actions", "SonarQube"],
      github: "https://github.com/biswajit7815",
      demo: "#",
      icon: <Cpu className="text-primary-400" />
    },
    {
      title: "Dockerized MERN Stack",
      desc: "Containerized a full-stack MERN application using Docker Compose. Optimizing build times with multi-stage builds and ensuring consistency across envs.",
      tech: ["MongoDB", "Express", "React", "Node", "Docker"],
      github: "https://github.com/biswajit7815",
      demo: "#",
      icon: <Layers className="text-secondary-400" />
    },
    {
      title: "Kubernetes Production Setup",
      desc: "Architected a highly available K8s cluster on AWS EKS. Managed microservices with Helm, implemented Auto-scaling, and Load Balancing.",
      tech: ["Kubernetes", "AWS EKS", "Helm", "Terraform"],
      github: "https://github.com/biswajit7815",
      demo: "#",
      icon: <Globe className="text-primary-400" />
    },
    {
      title: "NGINX Secure Reverse Proxy",
      desc: "Configured a high-performance NGINX reverse proxy with Let's Encrypt SSL, load balancing, and rate limiting for enhanced security.",
      tech: ["NGINX", "SSL/TLS", "Linux", "Security"],
      github: "https://github.com/biswajit7815",
      demo: "#",
      icon: <Server className="text-purple-400" />
    }
  ];

  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16 px-4">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 flex justify-center items-center gap-3 font-display">
          <Code2 className="text-purple-500" size={40} /> 
          Featured <span className="gradient-text">Projects</span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card rounded-3xl p-8 glass-card-hover group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
              {project.icon}
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
              {project.title}
            </h4>
            
            <p className="text-gray-400 mb-6 line-clamp-3">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tag, j) => (
                <span key={j} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary-400 transition-colors">
                <Github size={18} />
                Code
              </a>
              <a href={project.demo} className="flex items-center gap-2 text-sm font-bold text-white hover:text-secondary-400 transition-colors">
                <ExternalLink size={18} />
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

export default ShowcaseSection;
