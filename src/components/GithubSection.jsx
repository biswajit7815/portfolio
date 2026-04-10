import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const GithubSection = React.memo(({ repos, loading }) => {
  return (
    <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16 relative">
        <h3 className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 transition-all duration-500 flex justify-center items-center gap-3">
          <Github className="text-primary-500" size={40} /> 
          Latest Git Projects
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
        <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="inline-flex text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 items-center gap-2 transition-all bg-primary-500/10 hover:bg-primary-500/20 px-4 py-2 rounded-full font-medium shadow-sm">
          View all on GitHub <ExternalLink size={16} />
        </a>
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
              className="bg-white/60 dark:bg-dark-800/40 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 flex flex-col h-full shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <Code className="text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" size={24} />
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-500 bg-yellow-100 dark:bg-yellow-500/10 px-2 py-1 rounded-full transition-all duration-500">
                    ★ {repo.stargazers_count}
                  </span>
                )}
              </div>
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-2 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{repo.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow font-light line-clamp-3 transition-all duration-500">
                {repo.description || 'No description available for this repository.'}
              </p>
              {repo.language && (
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 transition-all duration-500">{repo.language}</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      )}
    </motion.section>
  );
});

export default GithubSection;
