import React from 'react';
import { motion } from 'framer-motion';
import { User, Server, Database, Globe, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-20 scroll-mt-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 flex justify-center items-center gap-3">
          <Cpu className="text-primary-400" size={40} />
          System Architecture
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Designing scalable, resilient, and automated infrastructure patterns for high-availability applications.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Animated Background Flow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          {/* User Node */}
          <div className="flex flex-col items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
            >
              <User size={40} />
            </motion.div>
            <span className="font-bold text-white tracking-wider">User</span>
            <span className="text-xs text-gray-500 uppercase">Requests</span>
          </div>

          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="hidden lg:block text-primary-500/50"
          >
            <ArrowRight size={32} />
          </motion.div>

          {/* Load Balancer / NGINX Node */}
          <div className="flex flex-col items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-secondary-400 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all relative overflow-hidden"
            >
               <Globe size={48} />
               <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/10 to-transparent"></div>
            </motion.div>
            <span className="font-bold text-white tracking-wider text-center">NGINX / ALB<br/><span className="text-[10px] text-gray-500">Reverse Proxy</span></span>
          </div>

          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="hidden lg:block text-secondary-500/50"
          >
            <ArrowRight size={32} />
          </motion.div>

          {/* App Servers Node */}
          <div className="flex flex-col items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-primary-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30_rgba(6,182,212,0.4)] transition-all"
            >
               <Server size={48} />
            </motion.div>
            <span className="font-bold text-white tracking-wider">Kubernetes Cluster</span>
            <span className="text-[10px] text-gray-500 uppercase">Microservices</span>
          </div>

          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="hidden lg:block text-primary-500/50"
          >
            <ArrowRight size={32} />
          </motion.div>

          {/* Database Node */}
          <div className="flex flex-col items-center gap-4 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-500 shadow-[0_0_20px_rgba(244,63,94,0.2)] group-hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] transition-all"
            >
              <Database size={40} />
            </motion.div>
            <span className="font-bold text-white tracking-wider">Database</span>
            <span className="text-xs text-gray-500 uppercase">Persistent Data</span>
          </div>
        </div>

        {/* Security Layer Overlay */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="text-green-500" size={18} />
            SSL Termination
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="text-green-500" size={18} />
            WAF Rules
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="text-green-500" size={18} />
            DDOS Protection
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="text-green-500" size={18} />
            IAM Roles
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
