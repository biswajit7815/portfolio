import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Star, GitFork, Activity, GitCommit, GitPullRequest, Container, Server, Terminal, Flame, TrendingUp } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const CustomMetric = ({ icon, label, value, color }) => (
  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-${color}-500/30 transition-all flex items-center gap-4 group`}>
    <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div>
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
  </div>
);

const GithubSection = React.memo(({ repos, loading }) => {
  const username = "biswajit7815";

  return (
    <motion.section id="github" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-10 md:mb-16 relative px-4">
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 flex justify-center items-center gap-2 md:gap-3 font-display">
          <Github className="text-indigo-400" size={32} /> 
          Engineering <span className="gradient-text">Activity</span>
        </h3>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Real-time GitHub telemetry and infrastructure automation metrics.
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Profile Stats Overview */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="lg:col-span-1 glass-card rounded-[2rem] p-6 md:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>
          
          <div>
            <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/50 p-1">
                <img src={`https://github.com/${username}.png`} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
                  <Flame size={12} /> Active Now
                </span>
                <span className="text-xs text-gray-500 font-bold">Score: 98/100 A+</span>
              </div>
            </div>
            
            <h4 className="text-2xl font-black text-white mb-1">@{username}</h4>
            <p className="text-indigo-400 text-sm font-bold mb-8">DevSecOps Engineer</p>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 flex items-center gap-2"><GitCommit size={16}/> Total Commits</span>
                <span className="text-white font-bold text-lg">1,204</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 flex items-center gap-2"><GitPullRequest size={16}/> Pull Requests</span>
                <span className="text-white font-bold text-lg">84</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 flex items-center gap-2"><TrendingUp size={16}/> Consistency</span>
                <span className="text-green-400 font-bold text-lg">94%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Heatmap & Custom Metrics */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="glass-card rounded-[2rem] p-6 border border-white/10 overflow-hidden relative"
          >
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity size={16} className="text-indigo-400" />
              Contribution Heatmap
            </h4>
            <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
              <img 
                src={`https://ghchart.rshah.org/818cf8/${username}`} 
                alt="GitHub Contributions Graph" 
                className="w-full min-w-[600px] opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <CustomMetric icon={<Activity />} label="CI/CD Pipelines" value="18" color="blue" />
            <CustomMetric icon={<Container />} label="Docker Images" value="42" color="indigo" />
            <CustomMetric icon={<Server />} label="K8s Clusters" value="6" color="violet" />
            <CustomMetric icon={<Terminal />} label="Auto Scripts" value="85" color="purple" />
          </div>
        </div>
      </div>

      {/* Activity Timeline & Live Repos */}
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-1 glass-card rounded-[2rem] p-6 md:p-8 border border-white/10">
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
            <TrendingUp size={16} className="text-violet-400" />
            Growth Timeline
          </h4>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
              { year: "2024", title: "Mastered K8s Architecture", color: "blue" },
              { year: "2023", title: "Built Enterprise CI/CD", color: "indigo" },
              { year: "2022", title: "Started with Docker", color: "violet" },
              { year: "2021", title: "Linux & Bash Scripting", color: "purple" }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#0A0A14] bg-${item.color}-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}></div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] glass-card p-4 rounded-xl border border-white/5">
                  <div className={`text-${item.color}-400 font-bold text-xs mb-1`}>{item.year}</div>
                  <div className="text-white text-sm font-medium">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2 px-2">
            <Code size={16} className="text-blue-400" />
            Live Infrastructure Repos
          </h4>
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {repos.slice(0, 4).map((repo) => (
                <motion.a 
                  href={repo.html_url} target="_blank" rel="noreferrer"
                  key={repo.id}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h5 className="text-base font-bold text-white truncate pr-4">{repo.name}</h5>
                    <div className="flex gap-2 shrink-0">
                      <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                        <Star size={12} className="text-yellow-500" /> {repo.stargazers_count}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mb-4 flex-grow line-clamp-2">
                    {repo.description || 'Infrastructure as Code and DevOps tooling repository.'}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    {repo.language ? (
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{repo.language}</span>
                      </div>
                    ) : <div></div>}
                    <span className="text-[10px] text-gray-600 font-mono">Updated recently</span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
});

export default GithubSection;
