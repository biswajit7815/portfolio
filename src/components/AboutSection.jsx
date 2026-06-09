import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const AboutSection = React.memo(() => {
  return (
    <motion.section 
      id="about" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={sectionVariants} 
      className="scroll-mt-24"
    >
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2rem] blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative z-10 neon-border rounded-[2.5rem] overflow-hidden">
             <OptimizedImage 
               src="https://github.com/biswajit7815.png" 
               alt="Biswajit Behera Profile" 
               width={500}
               height={500}
               className="w-full aspect-square object-cover"
             />
             <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-bold text-white">Available for worldwide projects</span>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-display">About <span className="gradient-text">Me</span></h3>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-300 font-medium italic">
            "Bridging the gap between code and infrastructure with automation."
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
            I am a passionate <span className="text-white font-semibold">DevSecOps Engineer</span> focused on building resilient, self-healing, and scalable environments. 
            Everything that can be automated, should be automated. My mission is to simplify complex deployment workflows and enable developers to ship code faster and securely.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-black text-blue-400 mb-1">5+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Key Projects</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-black text-indigo-400 mb-1">10+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Tools Mastered</div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 glass-card hover:bg-blue-500 transition-all rounded-2xl text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="p-4 glass-card hover:bg-indigo-500 transition-all rounded-2xl text-white">
              <Github size={24} />
            </a>
            <a href="mailto:biswajitbehera1868@gmail.com" className="p-4 glass-card hover:bg-purple-500 transition-all rounded-2xl text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default AboutSection;
