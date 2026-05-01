import React from 'react';
import { motion } from 'framer-motion';
import { User, Server, Database, Globe, ArrowRight, ArrowDown, ShieldCheck, Cpu } from 'lucide-react';

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-20 scroll-mt-24">
      <div className="text-center mb-10 md:mb-16 px-4">
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 flex justify-center items-center gap-2 md:gap-3 font-display">
          <Cpu className="text-cyan-400" size={32} />
          System <span className="gradient-text">Architecture</span>
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Designing scalable, resilient, and automated infrastructure patterns for high-availability applications.
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden mx-4 md:mx-0">
        {/* Animated Background Flow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-4 relative z-10">
          {/* User Node */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-4 group w-full lg:w-auto"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all">
              <User size={40} />
            </div>
            <div className="text-center">
               <span className="font-bold text-white tracking-widest block text-sm uppercase">End User</span>
               <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">HTTPS Requests</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary-500/30"
          >
            <ArrowRight className="hidden lg:block" size={32} />
            <ArrowDown className="lg:hidden" size={32} />
          </motion.div>

          {/* Load Balancer / NGINX Node */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="flex flex-col items-center gap-4 group w-full lg:w-auto"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/20 flex items-center justify-center text-secondary-400 shadow-[0_0_20px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all relative overflow-hidden">
               <Globe size={44} />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary-500/10 to-transparent"></div>
            </div>
            <div className="text-center">
               <span className="font-bold text-white tracking-widest block text-sm uppercase">NGINX Gateway</span>
               <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Reverse Proxy & SSL</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="text-secondary-500/30"
          >
            <ArrowRight className="hidden lg:block" size={32} />
            <ArrowDown className="lg:hidden" size={32} />
          </motion.div>

          {/* App Servers Node */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="flex flex-col items-center gap-4 group w-full lg:w-auto"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/20 flex items-center justify-center text-primary-400 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all" >
               <Server size={44} />
            </div>
            <div className="text-center">
               <span className="font-bold text-white tracking-widest block text-sm uppercase">K8s Cluster</span>
               <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Express Services</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="text-primary-500/30"
          >
            <ArrowRight className="hidden lg:block" size={32} />
            <ArrowDown className="lg:hidden" size={32} />
          </motion.div>

          {/* Database Node */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="flex flex-col items-center gap-4 group w-full lg:w-auto"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-500 shadow-[0_0_20px_rgba(244,63,94,0.1)] group-hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all">
              <Database size={40} />
            </div>
            <div className="text-center">
               <span className="font-bold text-white tracking-widest block text-sm uppercase">MongoDB</span>
               <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Persistence Layer</span>
            </div>
          </motion.div>
        </div>

        {/* Security Layer Overlay */}
        <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-white/10 flex flex-wrap justify-center gap-4 md:gap-10">
          {[
            { label: "SSL/TLS", icon: <ShieldCheck className="text-green-500" size={16} /> },
            { label: "WAF Rules", icon: <ShieldCheck className="text-green-500" size={16} /> },
            { label: "Role RBAC", icon: <ShieldCheck className="text-green-500" size={16} /> },
            { label: "Auto Scaling", icon: <ShieldCheck className="text-green-500" size={16} /> }
          ].map((item, index) => (
             <div key={index} className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-black tracking-widest">
               {item.icon}
               {item.label}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
