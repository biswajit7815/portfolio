import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const ExperienceSection = React.memo(() => {
  return (
    <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 transition-all duration-500 flex justify-center items-center gap-3">
          <Shield className="text-primary-500" size={40} /> 
          Experience & Journey
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="bg-white/60 dark:bg-dark-800/40 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-white/10 shadow-2xl relative">
        <div className="absolute left-[51px] md:left-[55px] top-12 bottom-12 w-1 bg-gradient-to-b from-primary-500/50 via-secondary-500/50 to-transparent transition-all duration-500" />
        
        <div className="space-y-16 relative">
          <div className="flex gap-8 group">
            <div className="w-8 h-8 rounded-full bg-primary-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] ring-4 ring-white dark:ring-dark-800 z-10 shrink-0 transition-all duration-500 group-hover:scale-125" />
            <div className="bg-white/80 dark:bg-dark-900/50 backdrop-blur border border-gray-100 dark:border-white/5 p-6 rounded-2xl w-full shadow-lg group-hover:shadow-primary-500/10 transition-all duration-500">
              <h4 className="text-2xl font-bold text-dark-900 dark:text-white transition-all duration-500">DevSecOps Enthusiast</h4>
              <div className="inline-flex mt-2 mb-4 px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold transition-all duration-500">Present</div>
              <p className="text-gray-600 dark:text-gray-300 font-light text-lg transition-all duration-500">
                Continuously exploring modern cloud and infrastructure automation. Engaging with the community (3k+ impressions) and contributing to open-source DevOps tooling. Building robust infrastructure using AWS, Terraform, and Kubernetes on a daily basis.
              </p>
            </div>
          </div>
          
          <div className="flex gap-8 group">
            <div className="w-8 h-8 rounded-full bg-secondary-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] ring-4 ring-white dark:ring-dark-800 z-10 shrink-0 transition-all duration-500 group-hover:scale-125" />
            <div className="bg-white/80 dark:bg-dark-900/50 backdrop-blur border border-gray-100 dark:border-white/5 p-6 rounded-2xl w-full shadow-lg group-hover:shadow-secondary-500/10 transition-all duration-500">
              <h4 className="text-2xl font-bold text-dark-900 dark:text-white transition-all duration-500">Hands-on Cloud Infrastructure</h4>
              <p className="text-gray-600 dark:text-gray-300 font-light text-lg mt-4 transition-all duration-500">
                Orchestrating scalable deployments utilizing Docker and automated Jenkins pipelines. Focused on achieving high availability and minimizing deployment times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default ExperienceSection;
