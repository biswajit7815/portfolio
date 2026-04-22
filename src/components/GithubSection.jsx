import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Star, GitFork, Activity } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const GithubSection = React.memo(({ repos, loading }) => {
  const username = "biswajit7815";

  return (
    <motion.section id="github" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16 relative">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 flex justify-center items-center gap-3">
          <Github className="text-primary-400" size={40} /> 
          GitHub <span className="gradient-text">Activity</span>
        </h3>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-xl mx-auto">
          Tracking my journey as I build and automate the future of cloud infrastructure.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="glass-card rounded-3xl p-6 flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.1)]"
        >
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=06b6d4&text_color=9ca3af&icon_color=06b6d4&border_color=ffffff00&hide_border=true&bg_color=ffffff00`} 
            alt="GitHub Stats" 
            className="w-full max-w-md"
          />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
        >
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Activity size={16} className="text-secondary-400" />
            Top Languages
          </h4>
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=a855f7&text_color=9ca3af&icon_color=a855f7&border_color=ffffff00&hide_border=true&bg_color=ffffff00`} 
            alt="Top Languages" 
            className="w-full max-w-md"
          />
        </motion.div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.slice(0, 6).map((repo) => (
            <motion.a 
              href={repo.html_url} target="_blank" rel="noreferrer"
              key={repo.id}
              whileHover={{ y: -8 }}
              className="glass-card group p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all flex flex-col h-full relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white/5 rounded-xl group-hover:text-primary-400 transition-colors">
                    <Code size={20} />
                 </div>
                 <div className="flex gap-3">
                   <span className="flex items-center gap-1 text-xs text-gray-400">
                     <Star size={14} className="text-yellow-500" /> {repo.stargazers_count}
                   </span>
                   <span className="flex items-center gap-1 text-xs text-gray-400">
                     <GitFork size={14} className="text-blue-500" /> {repo.forks_count}
                   </span>
                 </div>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2 truncate group-hover:text-primary-400 transition-colors">
                {repo.name}
              </h4>
              
              <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed font-medium">
                {repo.description || 'DevOps infrastructure automation project.'}
              </p>
              
              {repo.language && (
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{repo.language}</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      )}
      
      <div className="mt-12 text-center">
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 px-8 py-3 glass-card rounded-2xl text-white font-bold hover:bg-white/10 transition-all"
        >
          Explore More Repositories 
          <ExternalLink size={18} />
        </a>
      </div>
    </motion.section>
  );
});

export default GithubSection;
