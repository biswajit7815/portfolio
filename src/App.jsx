import React, { useState, useEffect, Suspense, useMemo, useCallback, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Github, Mail, Activity, ChevronDown, Terminal, Cloud, Container, GitBranch, Server, Code, Linkedin, Download, ExternalLink, Layers } from 'lucide-react';
import OptimizedImage from './components/OptimizedImage';

const AboutSection = React.lazy(() => import('./components/AboutSection'));
const SkillsSection = React.lazy(() => import('./components/SkillsSection'));
const GithubSection = React.lazy(() => import('./components/GithubSection'));
const ShowcaseSection = React.lazy(() => import('./components/ShowcaseSection'));
const ExperienceSection = React.lazy(() => import('./components/ExperienceSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
const ArchitectureSection = React.lazy(() => import('./components/ArchitectureSection'));
const TerminalSection = React.lazy(() => import('./components/TerminalSection'));
const CertificationsSection = React.lazy(() => import('./components/CertificationsSection'));
const SystemDashboardSection = React.lazy(() => import('./components/SystemDashboardSection'));
const DeploymentSimulation = React.lazy(() => import('./components/DeploymentSimulation'));
const PsychologySection = React.lazy(() => import('./components/PsychologySection'));

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

const MouseLighting = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let frameId;
    const updateMousePosition = (e) => {
      if (!containerRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(99,102,241,0.15), transparent 80%)`;
        }
      });
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 gpu-accelerated"
      style={{
        background: 'radial-gradient(600px circle at 0px 0px, rgba(99,102,241,0.15), transparent 80%)'
      }}
    />
  );
};

const BackgroundWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
      <div 
        className="absolute w-[360px] h-[360px] rounded-full bg-blue-500/10 blur-[80px] gpu-accelerated"
        style={{
          left: '10%',
          top: '10%',
          animation: 'blob-move-1 30s infinite ease-in-out'
        }}
      />
      <div 
        className="absolute w-[480px] h-[480px] rounded-full bg-purple-500/10 blur-[100px] gpu-accelerated"
        style={{
          right: '10%',
          bottom: '10%',
          animation: 'blob-move-2 40s infinite ease-in-out'
        }}
      />
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const handlePhotoClick = useCallback(() => setIsPhotoOpen(true), []);

  // Enforce dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const res = fetch('https://api.github.com/users/biswajit7815/repos?sort=updated&per_page=12')
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
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-300 overflow-hidden bg-gradient-to-b from-[#05050A] to-[#0A0A14]">
      {/* Interactive Light */}
      <MouseLighting />

      {/* Premium Background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-[100px]" />
      </div>
      
      <div className="fixed inset-0 -z-40 pointer-events-none opacity-40 mix-blend-screen">
        <BackgroundWaves />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 z-[100] origin-left shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />

      <Navbar onPhotoClick={handlePhotoClick} />
      
      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
            onClick={() => setIsPhotoOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-2xl w-full aspect-square rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-[0_0_100px_rgba(99,102,241,0.2)]"
            >
              <OptimizedImage 
                src="https://github.com/biswajit7815.png" 
                alt="Biswajit Behera" 
                width={600}
                height={600}
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto pt-12 space-y-24 md:space-y-40 px-4 sm:px-6">
        <HeroSection />
        
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase animate-pulse">Initializing Portal...</span>
            </div>
          </div>
        }>
          <div className="space-y-40">
            <AboutSection />
            <SystemDashboardSection />
            <DeploymentSimulation />
            <TerminalSection />
            <SkillsSection />
            <ArchitectureSection />
            <CertificationsSection />
            <ShowcaseSection />
            <PsychologySection />
            <GithubSection repos={repos} loading={loading} />
            <ExperienceSection />
            <ContactSection />
          </div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

const Navbar = React.memo(({ onPhotoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle state update to only trigger when crossing the threshold
      const shouldBeScrolled = window.scrollY > 50;
      setIsScrolled(prev => prev !== shouldBeScrolled ? shouldBeScrolled : prev);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[90] transition-all duration-500 ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`glass-card rounded-[2rem] flex items-center justify-between px-4 sm:px-8 h-16 transition-all duration-500 ${isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/10 bg-[#0A0A14]/80' : 'bg-transparent border-transparent shadow-none'}`}>
          <div className="flex items-center gap-4">
            <div 
              onClick={onPhotoClick}
              className="w-11 h-11 rounded-full overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.3)] transform hover:scale-110 transition-transform cursor-pointer border border-indigo-500/50"
            >
              <OptimizedImage 
                src="https://github.com/biswajit7815.png" 
                alt="Logo" 
                width={44}
                height={44}
                priority={true}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white font-display">
              biswa<span className="text-indigo-400">.dev</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-widest font-display">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-slate-400 hover:text-cyan-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hidden sm:block">
              <Github size={22} />
            </a>
            <a href="#contact" className="px-6 py-2.5 bg-white text-dark-950 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-white/5 hover:shadow-cyan-500/40 hidden sm:block font-display">
              Hire Me
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <Terminal size={28} className="text-cyan-400" /> : <Layers size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 mt-4 md:hidden z-[100]"
          >
            <div className="glass-card rounded-[2.5rem] p-6 sm:p-10 flex flex-col gap-6 items-center border border-white/10 shadow-2xl backdrop-blur-3xl">
               {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-cyan-400 transition-colors uppercase tracking-widest font-display"
                >
                  {item.name}
                </a>
              ))}
              <div className="w-full h-px bg-white/5"></div>
              <div className="flex gap-10">
                 <a href="https://github.com/biswajit7815" className="text-slate-400 hover:text-white transition-colors"><Github size={30} /></a>
                 <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={30} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

const HeroSection = React.memo(() => {
  return (
    <motion.section 
      initial="hidden" animate="visible" variants={sectionVariants}
      className="min-h-[85vh] flex flex-col justify-center items-center text-center relative pt-24 md:pt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs mb-8 backdrop-blur-sm shadow-glow-cyan/5"
      >
        <Activity size={16} className="animate-pulse" />
        <span className="font-black tracking-widest uppercase text-[10px] font-display">System Status: Operational</span>
      </motion.div>
      
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-tight font-display break-words">
        I design & build <span className="gradient-text"><Typewriter texts={["Cloud Infrastructure", "CI/CD Pipelines", "Reliable Systems", "SRE Automation"]} /></span>
      </h1>
      
      <p className="max-w-2xl text-sm sm:text-base md:text-xl text-slate-400 mb-10 md:mb-12 leading-relaxed font-medium px-4">
        I design and automate scalable, production-grade cloud infrastructure. Building resilient systems and enabling developers to ship faster.
      </p>
      
      <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
        <a href="#projects" className="cyber-button text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 font-display uppercase tracking-widest text-xs">
          Explore Projects
        </a>
        <a 
          href="https://github.com/biswajit7815/portfolio/raw/main/README.md" 
          target="_blank"
          className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 border-white/10 font-display"
        >
          <Download size={20} />
          Get Resume
        </a>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600 hidden sm:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </motion.section>
  );
});

const Footer = React.memo(() => {
  return (
    <footer className="border-t border-white/5 py-16 transition-all duration-500 relative z-10 bg-dark-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
              <OptimizedImage 
                src="https://github.com/biswajit7815.png" 
                alt="Logo" 
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-2xl font-black text-white">biswa<span className="text-cyan-400">.dev</span></div>
          </div>
          <p className="text-gray-500 text-sm">
            Innovating through automation. Dedicated to building world-class infrastructure.
          </p>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold text-white uppercase tracking-widest text-xs">Navigation</h5>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="space-y-6 text-right md:text-right">
           <h5 className="font-bold text-white uppercase tracking-widest text-xs">Let's Connect</h5>
           <div className="flex justify-end gap-6 text-gray-400">
              <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/in/biswajit7815" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
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
