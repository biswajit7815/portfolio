import React, { useState, useEffect, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Github, Mail, Activity, ChevronDown, Moon, Sun, Terminal, Cloud, Container, GitBranch, Server, Code } from 'lucide-react';

const GithubSection = React.lazy(() => import('./components/GithubSection'));
const ShowcaseSection = React.lazy(() => import('./components/ShowcaseSection'));
const ExperienceSection = React.lazy(() => import('./components/ExperienceSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const FallbackLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full" />
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    fetch('https://api.github.com/users/biswajit7815/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Initialize Lenis exactly once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-dark-900 min-h-screen text-gray-800 dark:text-gray-300 font-sans selection:bg-primary-500 selection:text-white transition-all duration-500 overflow-hidden relative">
      
      {/* Optimized Glowing Background Orbs (GPU Accelerated, No Filters) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/20 to-transparent rounded-full gpu-accelerated animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-500/20 to-transparent rounded-full gpu-accelerated animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-500/20 to-transparent rounded-full gpu-accelerated animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 origin-left z-50 gpu-accelerated"
        style={{ scaleX }}
      />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-12 space-y-32 relative z-10 lg:overflow-visible overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Suspense fallback={<FallbackLoader />}>
          <GithubSection repos={repos} loading={loading} />
          <ShowcaseSection />
          <ExperienceSection />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

// --------------------------------------------------------
// STATIC COMPONENTS (Rendered instantly for LCP)
// --------------------------------------------------------

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-dark-900 dark:text-white transition-all duration-500">
          biswa<span className="text-primary-500">.devops</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</a>
          <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Experience</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-800 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="px-4 py-2 border border-primary-500/30 rounded-lg text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

const HeroSection = React.memo(() => {
  return (
    <motion.section 
      initial="hidden" animate="visible" variants={sectionVariants}
      className="min-h-[80vh] flex flex-col-reverse lg:flex-row justify-center items-center gap-12 lg:gap-20 pt-10"
    >
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 text-sm mb-6 transition-all duration-500">
          <Activity size={16} />
          <span>Deploying robust infrastructure</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-dark-900 dark:text-white mb-4 tracking-tight leading-tight transition-all duration-500 lg:w-max">
          Biswajit <span className="gradient-text shrink-0">Behera</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-400 font-medium mb-6 transition-all duration-500">
          DevOps Engineer | Cloud & Automation
        </h2>
        
        <p className="max-w-xl text-base sm:text-lg text-gray-600 dark:text-gray-400/80 mb-10 leading-relaxed font-light transition-all duration-500">
          "Building scalable, automated, and resilient infrastructure." I specialize in creating seamless CI/CD pipelines, containerizing applications, and architecting highly available cloud environments.
        </p>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a href="#projects" className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-500/25">
            View Projects
          </a>
          <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 text-dark-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-lg font-medium flex items-center gap-2 transition-all transform hover:-translate-y-1">
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0 mt-8 lg:mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-secondary-500/30 rounded-full animate-pulse shadow-[0_0_80px_rgba(168,85,247,0.3)]"></div>
        <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-primary-500 to-secondary-500 shadow-[0_0_40px_rgba(6,182,212,0.4)] group hover:scale-105 transition-transform duration-500">
           <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-900 bg-gray-100 dark:bg-dark-800">
             <img 
               src="https://github.com/biswajit7815.png" 
               alt="Biswajit Behera Profile" 
               loading="eager" 
               decoding="sync"
               width="320"
               height="320"
               className="w-full h-full object-cover relative z-10 bg-dark-800" 
             />
           </div>
           
           <motion.div 
             animate={{ y: [0, -10, 0] }} 
             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
             className="absolute bottom-2 -right-2 md:bottom-4 md:-right-6 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border border-gray-200 dark:border-white/10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg flex items-center gap-2 z-20 group-hover:border-primary-500/50 transition-colors"
           >
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              <span className="text-xs sm:text-sm font-semibold text-dark-900 dark:text-white whitespace-nowrap">Available for Work</span>
           </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 dark:text-white hidden lg:block">
        <ChevronDown size={32} />
      </div>
    </motion.section>
  );
});

const AboutSection = React.memo(() => {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 transition-all duration-500 flex justify-center items-center gap-3">
          <Terminal className="text-primary-500" size={40} /> 
          About Me
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="bg-white/60 dark:bg-dark-800/40 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 relative overflow-hidden">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg font-light leading-relaxed transition-all duration-500 relative z-10 w-full overflow-hidden text-ellipsis">
            <p className="text-xl font-medium text-dark-900 dark:text-white mb-2">
               Bridging the gap between code and infrastructure.
            </p>
            <p>
              I am a passionate DevSecOps Enthusiast deeply focused on the intersection of development, operations, and security. My goal is to orchestrate reliable software delivery through robust automation.
            </p>
            <p>
              With extensive experience working across Linux servers, AWS cloud architectures, and container platforms, I firmly believe that everything that can be automated, should be automated.
            </p>
          </div>
          
          <div className="flex flex-col gap-5 relative z-10">
            {[
              { label: "Infrastructure as Code", value: "Terraform, Ansible", color: "from-orange-500 to-red-500" },
              { label: "Container Orchestration", value: "Docker, Kubernetes, Helm", color: "from-cyan-500 to-blue-500" },
              { label: "CI/CD Pipelines", value: "Jenkins, GitHub Actions", color: "from-green-500 to-emerald-500" }
            ].map((item, i) => (
              <div key={i} className="group bg-white/80 dark:bg-dark-900/50 border border-gray-200/50 dark:border-white/5 p-5 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden relative">
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color}`}></div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{item.label}</div>
                <div className="text-base sm:text-lg font-medium text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors truncate">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
});

const SkillsSection = React.memo(() => {
  const skillCategories = [
    { title: "Cloud & OS", icon: <Cloud className="text-blue-500 dark:text-blue-400"/>, items: ["AWS (EC2, S3, IAM)", "Linux"], glow: "shadow-blue-500/20" },
    { title: "Containers", icon: <Container className="text-cyan-500 dark:text-cyan-400"/>, items: ["Docker", "Kubernetes", "Helm"], glow: "shadow-cyan-500/20" },
    { title: "CI/CD", icon: <GitBranch className="text-green-500 dark:text-green-400"/>, items: ["Jenkins", "GitHub Actions"], glow: "shadow-green-500/20" },
    { title: "Infra as Code", icon: <Server className="text-orange-500 dark:text-orange-400"/>, items: ["Terraform", "Ansible"], glow: "shadow-orange-500/20" },
    { title: "Monitoring", icon: <Activity className="text-pink-500 dark:text-pink-400"/>, items: ["Prometheus", "Grafana"], glow: "shadow-pink-500/20" },
    { title: "Scripting", icon: <Code className="text-yellow-500 dark:text-yellow-400"/>, items: ["Bash", "Python"], glow: "shadow-yellow-500/20" }
  ];

  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 transition-all duration-500 flex justify-center items-center gap-3">
          <Activity className="text-secondary-500" size={40} /> 
          Technical Arsenal
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -8 }}
            className={`bg-white/60 dark:bg-dark-800/40 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 group cursor-default transition-all duration-500 shadow-xl hover:${category.glow} hover:shadow-2xl hover:border-primary-500/30 dark:hover:border-primary-500/30 w-full overflow-hidden`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white dark:bg-dark-900 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500 shrink-0">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-dark-900 dark:text-white transition-all duration-500 truncate">{category.title}</h4>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium transition-all duration-500 w-full">
                  <div className="w-2 h-2 rounded-full bg-primary-500/50 group-hover:bg-primary-500 transition-colors shrink-0" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

const Footer = React.memo(() => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 py-8 mt-10 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 dark:text-gray-400 text-sm font-light transition-all duration-500 text-center md:text-left">
          © {new Date().getFullYear()} Biswajit Behera. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 transition-all duration-500">
          <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="hover:text-dark-900 dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:biswajitbehera1868@gmail.com" className="hover:text-dark-900 dark:hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
});
