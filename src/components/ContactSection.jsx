import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';

const ContactSection = React.memo(() => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ firstName: '', lastName: '', email: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 scroll-mt-24 bg-[#0A0A0F] font-sans overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00FFC8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00FFC8]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 scanlines">
        
        {/* Terminal Header */}
        <div className="text-center mb-16 md:mb-24">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-4 flex justify-center items-center gap-3 font-mono">
            <Terminal className="text-[#00FFC8]" size={32} /> 
            ESTABLISH_CONNECTION.sh<span className="w-4 h-8 bg-[#00FFC8] animate-pulse ml-1 inline-block align-middle"></span>
          </h3>
          <p className="text-gray-400 font-mono text-xs md:text-sm">Initiate secure handshake protocol for collaboration.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-stretch">
          
          {/* Left Panel: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 relative h-full"
          >
            <div className="neon-border-animated rounded-3xl h-full p-[1px]">
              <div className="bg-[#0f111a]/95 backdrop-blur-xl rounded-3xl h-full p-8 md:p-10 flex flex-col relative overflow-hidden">
                {/* Internal Glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00FFC8]/20 rounded-full blur-[60px]"></div>
                
                <h4 className="text-xl md:text-2xl font-black text-white mb-8 font-mono border-b border-white/10 pb-4">
                  <span className="text-[#00FFC8] mr-2">root@biswa:</span>~# info
                </h4>

                <div className="space-y-8 flex-grow font-mono text-sm md:text-base">
                  <div className="group">
                    <p className="text-gray-500 mb-1 text-[10px] uppercase tracking-widest">// LOCATION</p>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-[#7C3AED] font-bold">$</span>
                      <MapPin size={18} className="text-[#00FFC8]" />
                      <span>Dhenkanal, Orissa, India<span className="w-2 h-4 bg-gray-500 animate-pulse ml-1 inline-block align-middle"></span></span>
                    </div>
                  </div>

                  <div className="group">
                    <p className="text-gray-500 mb-1 text-[10px] uppercase tracking-widest">// DIRECT_LINE</p>
                    <a href="tel:+917815094008" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <span className="text-[#7C3AED] font-bold">$</span>
                      <Phone size={18} className="text-[#00FFC8]" />
                      <span>+91 78150 94008</span>
                    </a>
                  </div>

                  <div className="group">
                    <p className="text-gray-500 mb-1 text-[10px] uppercase tracking-widest">// MAIL_SPOOL</p>
                    <a href="mailto:biswajitbehera1868@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors break-all">
                      <span className="text-[#7C3AED] font-bold">$</span>
                      <Mail size={18} className="text-[#00FFC8]" />
                      <span>biswajitbehera1868@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <p className="text-gray-500 mb-4 text-[10px] uppercase tracking-widest font-mono">// EXTERNAL_LINKS</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FFC8] hover:border-[#00FFC8]/50 hover:bg-[#00FFC8]/10 transition-all">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/biswajit7815" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#7C3AED] hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 bg-[#0f111a]/50 backdrop-blur-md rounded-3xl border border-white/5 p-6 md:p-10 lg:p-12 relative"
          >
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f111a]/90 backdrop-blur-sm rounded-3xl z-20">
                <CheckCircle2 size={64} className="text-[#00FFC8] mb-6" />
                <h4 className="text-2xl font-mono text-white font-bold mb-2">PACKET_DELIVERED</h4>
                <p className="text-gray-400 font-mono text-sm">Awaiting acknowledgment...</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10 flex flex-col h-full justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="relative group">
                  <label htmlFor="firstName" className="absolute -top-3 left-0 text-[10px] font-mono text-[#7C3AED] tracking-widest font-bold bg-[#0A0A0F] px-1 transition-all">
                    // FIRST_NAME
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 text-white font-mono text-sm px-0 py-4 focus:outline-none focus:border-[#00FFC8] focus:shadow-[0_4px_15px_-3px_rgba(0,255,200,0.3)] transition-all placeholder-gray-700"
                    placeholder="Enter first name"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                  <label htmlFor="lastName" className="absolute -top-3 left-0 text-[10px] font-mono text-[#7C3AED] tracking-widest font-bold bg-[#0A0A0F] px-1 transition-all">
                    // LAST_NAME
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 text-white font-mono text-sm px-0 py-4 focus:outline-none focus:border-[#00FFC8] focus:shadow-[0_4px_15px_-3px_rgba(0,255,200,0.3)] transition-all placeholder-gray-700"
                    placeholder="Enter last name"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="relative group">
                <label htmlFor="email" className="absolute -top-3 left-0 text-[10px] font-mono text-[#7C3AED] tracking-widest font-bold bg-[#0A0A0F] px-1 transition-all">
                  // EMAIL_ADDRESS
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 text-white font-mono text-sm px-0 py-4 focus:outline-none focus:border-[#00FFC8] focus:shadow-[0_4px_15px_-3px_rgba(0,255,200,0.3)] transition-all placeholder-gray-700"
                  placeholder="Enter email address"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="relative group flex-grow">
                <label htmlFor="message" className="absolute -top-3 left-0 text-[10px] font-mono text-[#7C3AED] tracking-widest font-bold bg-[#0A0A0F] px-1 transition-all">
                  // PAYLOAD
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-white/10 text-white font-mono text-sm px-0 py-4 focus:outline-none focus:border-[#00FFC8] focus:shadow-[0_4px_15px_-3px_rgba(0,255,200,0.3)] transition-all placeholder-gray-700 resize-none"
                  placeholder="Enter your message here..."
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden rounded-xl font-mono font-bold text-sm tracking-wider uppercase disabled:opacity-70 disabled:cursor-not-allowed glitch-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFC8] to-[#7C3AED] transition-transform duration-500 group-hover:scale-[1.05]"></div>
                  <div className="relative flex items-center justify-center gap-3 py-4 text-[#0A0A0F] bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-transparent">
                    {isSubmitting ? (
                      <div className="animate-spin w-5 h-5 border-2 border-[#0A0A0F] border-t-transparent rounded-full" />
                    ) : (
                      <Send size={18} />
                    )}
                    <span>$ deploy --message</span>
                  </div>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Status Bar */}
        <div className="mt-8 flex items-center gap-3 text-xs font-mono text-gray-500 border-t border-white/5 pt-4">
          <div className="w-2 h-2 rounded-full bg-[#00FFC8] shadow-[0_0_8px_#00FFC8] animate-pulse"></div>
          <span>● READY TO DEPLOY</span>
          <span className="ml-auto opacity-50">v2.1.0</span>
        </div>

      </div>
    </section>
  );
});

export default ContactSection;
