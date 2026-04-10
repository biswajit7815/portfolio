import React from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const ShowcaseSection = React.memo(() => {
  const featured = [
    {
      title: "End-to-End CI/CD Pipeline",
      desc: "Implemented a fully automated pipeline using Jenkins and GitHub Actions to build, test, and deploy microservices across environments.",
      tags: ["Jenkins", "Docker", "AWS", "GitHub Actions"]
    },
    {
      title: "Kubernetes Cluster Setup",
      desc: "Architected a highly available K8s environment utilizing Helm charts for managing and scaling resilient containerized applications.",
      tags: ["Kubernetes", "Helm", "Linux"]
    },
    {
      title: "Nginx Reverse Proxy & Load Balancing",
      desc: "Configured secure, high-performance reverse proxies using Nginx with SSL termination and optimized routing for web apps.",
      tags: ["Nginx", "Linux", "SSL"]
    }
  ];

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 transition-all duration-500 flex justify-center items-center gap-3">
          <Server className="text-secondary-500" size={40} /> 
          Featured Initiatives
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto rounded-full"></div>
      </div>
      <div className="space-y-8">
        {featured.map((item, i) => (
          <div key={i} className="bg-white/60 dark:bg-dark-800/40 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/80 dark:hover:bg-dark-800/60 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-500 to-secondary-500 opacity-80 group-hover:w-3 transition-all duration-500"></div>
            <div className="pl-4">
              <h4 className="text-2xl font-bold text-dark-900 dark:text-white mb-4 transition-all duration-500 group-hover:text-primary-500 dark:group-hover:text-primary-400">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-8 font-light text-lg transition-all duration-500">{item.desc}</p>
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, j) => (
                  <span key={j} className="text-sm px-4 py-1.5 bg-gray-100/80 dark:bg-dark-900/50 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-white/5 shadow-sm transition-all duration-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
});

export default ShowcaseSection;
