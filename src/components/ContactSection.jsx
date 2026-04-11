import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const ContactSection = React.memo(() => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        
        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus('error');
    }
  };

  return (
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="scroll-mt-24 pb-20">
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 transition-all duration-500">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Scale?</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light transition-all duration-500">
          Let's design resilient infrastructure and automate your workflows. I am currently open for DevSecOps opportunities.
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-8 bg-white/60 dark:bg-dark-800/40 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-6 shadow-2xl transition-all duration-500 relative overflow-hidden">
        {/* Glow behind the form */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="md:col-span-2 space-y-8 p-6 lg:p-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl text-white shadow-xl shadow-primary-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay"></div>
          <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
          <p className="opacity-90 font-light mb-10">Fill out the form and I'll get back to you within 24 hours.</p>
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <Phone className="opacity-80" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="opacity-80" />
              <a href="mailto:biswajitbehera1868@gmail.com" className="hover:underline">biswajitbehera1868@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="opacity-80" />
              <span>Dhenkanal, Orissa, India</span>
            </div>
          </div>
          
          <div className="mt-16 flex gap-4 relative z-10">
            <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 hover:-translate-y-1 transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 hover:-translate-y-1 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-3 p-2 lg:p-8 relative z-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {status === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">Message sent successfully! I will reach out shortly.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">Something went wrong. Please try again.</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-dark-900/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm" 
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-dark-900/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white dark:bg-dark-900/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm" 
                placeholder="john@company.com" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea 
                rows="4" 
                name="message" 
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white dark:bg-dark-900/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm resize-none" 
                placeholder="Let's build together..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
               {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send size={18} /> Deploy Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
});

export default ContactSection;
