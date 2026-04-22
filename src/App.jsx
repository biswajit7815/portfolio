import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Github, Mail, Activity, ChevronDown, Terminal, Cloud, Container, GitBranch, Server, Code, Linkedin, Download, ExternalLink, Layers } from 'lucide-react';

const GithubSection = React.lazy(() => import('./components/GithubSection'));
const ShowcaseSection = React.lazy(() => import('./components/ShowcaseSection'));
const ExperienceSection = React.lazy(() => import('./components/ExperienceSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
const ArchitectureSection = React.lazy(() => import('./components/ArchitectureSection'));

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const FallbackLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full" />
  </div>
);

const Typewriter = ({ texts, delay = 150, pause = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = texts[currentTextIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, delay / 2);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, delay);
    }

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, delay, pause]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-primary-500 ml-1 align-middle"
      />
    </span>
  );
};

const BackgroundWaves = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
    <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.1)_0%,_transparent_50%)] animate-blob"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.1)_0%,_transparent_50%)] animate-blob" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-[20%] right-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_50%_50%,_rgba(244,63,94,0.05)_0%,_transparent_50%)] animate-blob" style={{ animationDelay: '4s' }}></div>
    
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
      </defs>
      <g filter="url(#goo)">
        <motion.circle 
          initial={{ cx: "10%", cy: "10%" }}
          animate={{ cx: ["10%", "90%", "10%"], cy: ["10%", "50%", "10%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          r="150" fill="rgba(6,182,212,0.03)" 
        />
        <motion.circle 
          initial={{ cx: "90%", cy: "80%" }}
          animate={{ cx: ["90%", "10%", "90%"], cy: ["80%", "20%", "80%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          r="200" fill="rgba(168,85,247,0.03)" 
        />
      </g>
    </svg>
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

  // Enforce dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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
    <div className="bg-dark-900 min-h-screen text-gray-300 font-sans selection:bg-primary-500/30 selection:text-primary-400 transition-all duration-500 overflow-hidden relative">
      
      <BackgroundWaves />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 origin-left z-[100] gpu-accelerated"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-12 space-y-32 relative z-10">
        <HeroSection />
        <AboutSection />
        <ArchitectureSection />
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

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[90] transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`glass-card rounded-2xl flex items-center justify-between px-6 h-14 transition-all duration-300 ${isScrolled ? 'shadow-2xl border-white/20' : 'bg-transparent border-transparent shadow-none'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-white shadow-lg shadow-primary-500/20">
              B
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              biswa<span className="text-primary-400">.io</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hidden sm:block">
              <Github size={20} />
            </a>
            <a href="#contact" className="px-5 py-2 bg-white text-dark-900 rounded-xl text-sm font-bold hover:bg-primary-400 hover:text-white transition-all transform active:scale-95 shadow-lg shadow-white/10 hover:shadow-primary-500/40 hidden sm:block">
              Hire Me
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <Terminal size={24} className="text-primary-400" /> : <Layers size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 md:hidden"
          >
            <div className="glass-card rounded-[2rem] p-8 flex flex-col gap-6 items-center border border-white/10 shadow-2xl">
               {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-black text-white hover:text-primary-400 transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </a>
              ))}
              <div className="w-full h-px bg-white/10"></div>
              <div className="flex gap-8">
                 <a href="https://github.com/biswajit7815" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
                 <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const HeroSection = React.memo(() => {
  return (
    <motion.section 
      initial="hidden" animate="visible" variants={sectionVariants}
      className="min-h-[85vh] flex flex-col justify-center items-center text-center relative pt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm mb-8 backdrop-blur-sm"
      >
        <Activity size={16} className="animate-pulse" />
        <span className="font-medium tracking-wide uppercase text-[10px]">Ready to Scale Infrastructure</span>
      </motion.div>
      
      <h1 className="text-4xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-tight">
        Hi, I'm <Typewriter texts={["Biswajit Behera", "a DevOps Engineer", "a Cloud Architect"]} />
      </h1>
      
      <p className="max-w-2xl text-base sm:text-xl text-gray-400 mb-12 leading-relaxed">
        Automating <span className="text-white font-semibold">Infrastructure</span> | 
        Orchestrating <span className="text-white font-semibold">CI/CD</span> | 
        Cloud Specialist <span className="text-white font-semibold text-primary-400 underline decoration-secondary-500/50 decoration-4 underline-offset-8">Kubernetes & AWS</span>
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_10px_40px_rgba(6,182,212,0.5)]">
          View Projects
        </a>
        <a 
          href="https://github.com/biswajit7815/portfolio/raw/main/README.md" 
          target="_blank"
          className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1"
        >
          <Download size={20} />
          Get Resume
        </a>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 hidden sm:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </motion.section>
  );
});

const AboutSection = React.memo(() => {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-[2rem] blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative z-10 neon-border rounded-[2.5rem] overflow-hidden">
             <img 
               src="https://github.com/biswajit7815.png" 
               alt="Biswajit Behera Profile" 
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
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">About <span className="gradient-text">Me</span></h3>
            <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
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
              <div className="text-3xl font-black text-primary-400 mb-1">5+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Key Projects</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-black text-secondary-400 mb-1">10+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Tools Mastered</div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" className="p-4 glass-card hover:bg-primary-500 transition-all rounded-2xl text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/biswajit7815" target="_blank" className="p-4 glass-card hover:bg-secondary-500 transition-all rounded-2xl text-white">
              <Github size={24} />
            </a>
            <a href="mailto:biswajitbehera1868@gmail.com" className="p-4 glass-card hover:bg-accent-500 transition-all rounded-2xl text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

const SkillsSection = React.memo(() => {
  const skillCategories = [
    { title: "Cloud", icon: <Cloud size={32} className="text-primary-400"/>, items: ["AWS (EC2, S3, IAM, VPC)", "Azure", "GCP"], glow: "from-primary-500/20 to-transparent" },
    { title: "Containers", icon: <Container size={32} className="text-secondary-400"/>, items: ["Docker", "Kubernetes (K8s)", "Helm"], glow: "from-secondary-500/20 to-transparent" },
    { title: "CI/CD", icon: <GitBranch size={32} className="text-green-400"/>, items: ["GitHub Actions", "Jenkins", "GitLab CI"], glow: "from-green-500/20 to-transparent" },
    { title: "Monitoring", icon: <Activity size={32} className="text-accent-500"/>, items: ["Prometheus", "Grafana", "ELK Stack"], glow: "from-accent-500/20 to-transparent" },
    { title: "IaC & Config", icon: <Server size={32} className="text-orange-400"/>, items: ["Terraform", "Ansible", "Pulumi"], glow: "from-orange-500/20 to-transparent" },
    { title: "OS & Tools", icon: <Terminal size={32} className="text-yellow-400"/>, items: ["Linux (Ubuntu, CentOS)", "Bash", "Python"], glow: "from-yellow-500/20 to-transparent" }
  ];

  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Technical <span className="gradient-text">Arsenal</span></h3>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }}
            className="glass-card rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group transition-all duration-500"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.glow} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest">{category.title}</h4>
              <ul className="space-y-3">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-500 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

const Footer = React.memo(() => {
  return (
    <footer className="border-t border-white/5 py-16 transition-all duration-500 relative z-10 bg-dark-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="text-2xl font-black text-white">biswa<span className="text-primary-400">.io</span></div>
          <p className="text-gray-500 text-sm">
            Innovating through automation. Dedicated to building world-class infrastructure.
          </p>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-white uppercase tracking-widest text-xs">Navigation</h5>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="space-y-6 text-right md:text-right">
           <h5 className="font-bold text-white uppercase tracking-widest text-xs">Let's Connect</h5>
           <div className="flex justify-end gap-6 text-gray-400">
              <a href="https://github.com/biswajit7815" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:biswajitbehera1868@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
           </div>
           <div className="text-xs text-gray-600">
             © {new Date().getFullYear()} Biswajit Behera. Handcrafted with passion.
           </div>
        </div>
      </div>
    </footer>
  );
});
