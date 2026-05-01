import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Box, GitMerge, CheckCircle2, AlertCircle } from 'lucide-react';

const StatCard = ({ icon, title, value, unit, status, trend }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card rounded-[2rem] p-6 border border-white/5 relative overflow-hidden group"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${status}-500/10 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50`}></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`p-3 rounded-xl bg-${status}-500/10 text-${status}-400 border border-${status}-500/20`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full bg-${status}-500/10 text-${status}-400`}>
          {status === 'green' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
          {trend}
        </div>
      </div>
      
      <div className="relative z-10">
        <h4 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">{title}</h4>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-white font-display tracking-tighter">{value}</span>
          <span className="text-gray-500 font-bold">{unit}</span>
        </div>
      </div>
    </motion.div>
  );
};

const SystemDashboardSection = React.memo(() => {
  const [uptime, setUptime] = useState(99.98);
  const [load, setLoad] = useState(42);
  const [containers, setContainers] = useState(14);
  const [deploys, setDeploys] = useState(128);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(prev => Math.floor(Math.random() * 15) + 35);
      // occasional spike
      if (Math.random() > 0.8) setLoad(prev => prev + 25);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto my-16 md:my-32 px-4 sm:px-6 scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-white/5 pb-6">
        <div>
          <h3 className="text-2xl md:text-4xl font-black text-white mb-2 flex flex-wrap items-center gap-2 md:gap-3 font-display">
            <Activity className="text-indigo-400" size={28} /> 
            Live System <span className="gradient-text">Telemetry</span>
          </h3>
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Real-time monitoring dashboard simulating production environments.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <span className="text-xs font-bold text-green-400 uppercase tracking-widest">All Systems Operational</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Server size={24} />} 
          title="Cluster Uptime" 
          value={uptime} 
          unit="%" 
          status="green" 
          trend="Stable"
        />
        <StatCard 
          icon={<Activity size={24} />} 
          title="CPU Load Avg" 
          value={load} 
          unit="%" 
          status={load > 60 ? 'yellow' : 'blue'} 
          trend={load > 60 ? 'Spike' : 'Normal'}
        />
        <StatCard 
          icon={<Box size={24} />} 
          title="Active Pods" 
          value={containers} 
          unit="" 
          status="purple" 
          trend="Scaling"
        />
        <StatCard 
          icon={<GitMerge size={24} />} 
          title="CI/CD Deploys" 
          value={deploys} 
          unit="" 
          status="indigo" 
          trend="+12 This Week"
        />
      </div>

      {/* Simulated Server Logs */}
      <div className="mt-8 glass-card rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 border border-white/5 font-mono text-[10px] md:text-xs">
         <div className="flex justify-between items-center mb-4 text-gray-500 border-b border-white/5 pb-2">
            <span>Terminal / Logs</span>
            <span className="flex gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div><div className="w-2 h-2 rounded-full bg-yellow-500"></div><div className="w-2 h-2 rounded-full bg-green-500"></div></span>
         </div>
         <div className="space-y-2 text-gray-400 h-32 overflow-hidden relative">
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A14] to-transparent z-10"></div>
            <div className="animate-slide-up">
              <p><span className="text-green-400">[INFO]</span> {new Date().toISOString()} - Health check passed for ingress-nginx.</p>
              <p><span className="text-blue-400">[SYSTEM]</span> Load balancer distributed 4,231 requests in the last hour.</p>
              <p><span className="text-green-400">[INFO]</span> Prometheus metrics scraped successfully.</p>
              <p><span className="text-indigo-400">[DEPLOY]</span> GitHub Actions workflow 'build-and-push' completed in 45s.</p>
              <p><span className="text-yellow-400">[WARN]</span> Node memory utilization at 78% - scaling up new instance...</p>
            </div>
         </div>
      </div>
    </motion.section>
  );
});

export default SystemDashboardSection;
