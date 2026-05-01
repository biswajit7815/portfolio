import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitCommit, Package, TestTube, Cloud, CheckCircle2, RefreshCw } from 'lucide-react';

const steps = [
  { id: 'commit', label: 'Git Commit', icon: <GitCommit size={24} />, duration: 1500 },
  { id: 'build', label: 'Docker Build', icon: <Package size={24} />, duration: 2500 },
  { id: 'test', label: 'Run Tests', icon: <TestTube size={24} />, duration: 2000 },
  { id: 'deploy', label: 'Deploy to K8s', icon: <Cloud size={24} />, duration: 3000 }
];

const DeploymentSimulation = React.memo(() => {
  const [activeStep, setActiveStep] = useState(0);
  const [isDeploying, setIsDeploying] = useState(true);

  useEffect(() => {
    if (!isDeploying) return;

    let timeoutId;
    
    if (activeStep < steps.length) {
      timeoutId = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, steps[activeStep].duration);
    } else {
      timeoutId = setTimeout(() => {
        setIsDeploying(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [activeStep, isDeploying]);

  const restartSimulation = () => {
    setActiveStep(0);
    setIsDeploying(true);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto my-32 px-6"
    >
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 flex justify-center items-center gap-3 font-display">
          <RefreshCw className={`text-indigo-400 ${isDeploying && activeStep < steps.length ? 'animate-spin' : ''}`} size={40} /> 
          Live <span className="gradient-text">Deployment Pipeline</span>
        </h3>
        <p className="text-gray-400">Simulating a zero-downtime production deployment.</p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
        {/* Animated Background Flow */}
        {isDeploying && activeStep < steps.length && (
           <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent animate-pulse"></div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            const isPending = index > activeStep;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center gap-4 relative group">
                  <motion.div 
                    animate={isActive ? { scale: [1, 1.1, 1], boxShadow: "0 0 20px rgba(99,102,241,0.5)" } : {}}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-500
                      ${isCompleted ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 
                        isActive ? 'bg-blue-500/20 border-blue-400 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)]' : 
                        'bg-white/5 border-white/10 text-gray-500'}
                    `}
                  >
                    {isCompleted ? <CheckCircle2 size={32} className="text-indigo-400" /> : step.icon}
                  </motion.div>
                  <div className="text-center">
                    <span className={`font-bold tracking-widest block text-sm uppercase transition-colors duration-500 ${isCompleted || isActive ? 'text-white' : 'text-gray-500'}`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-tighter">
                      {isCompleted ? <span className="text-indigo-400">Success</span> : 
                       isActive ? <span className="text-blue-400 animate-pulse">In Progress...</span> : 
                       <span className="text-gray-600">Pending</span>}
                    </span>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-1 mx-4 bg-white/10 relative rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: isCompleted ? "100%" : isActive ? "50%" : "0%" }}
                      transition={{ duration: isActive ? steps[index].duration / 1000 : 0.5, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-indigo-500"
                    />
                  </div>
                )}
                
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-10 my-2 bg-white/10 relative rounded-full overflow-hidden">
                     <motion.div 
                      initial={{ height: "0%" }}
                      animate={{ height: isCompleted ? "100%" : isActive ? "50%" : "0%" }}
                      transition={{ duration: isActive ? steps[index].duration / 1000 : 0.5, ease: "linear" }}
                      className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-indigo-500"
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <AnimatePresence>
          {!isDeploying && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/20 text-indigo-300 border border-indigo-500/50 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <CheckCircle2 size={20} /> Deployment Successful
              </div>
              <button 
                onClick={restartSimulation}
                className="block mx-auto mt-6 text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest underline underline-offset-4"
              >
                Trigger New Build
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
});

export default DeploymentSimulation;
