import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/biswajitbehera1868@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${formState.firstName} ${formState.lastName}`,
            email: formState.email,
            message: formState.message,
            _subject: "New Message from Portfolio!"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-24 bg-[#0B0F19] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full border border-[#232A3B] bg-[#151B2B] mb-6">
            <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">Get In Touch</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]">Work Together</span>
          </h3>
          <p className="text-[#9CA3AF] text-sm md:text-base">
            Open to DevSecOps opportunities & collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          
          {/* Left Panel: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151B2B] rounded-2xl border border-[#232A3B] p-6 md:p-8 flex flex-col h-full"
          >
            <h4 className="text-[#6B7280] text-xs font-bold tracking-widest uppercase mb-6">
              Contact Info
            </h4>

            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-center gap-4 border-b border-[#232A3B] pb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1D243A] border border-[#2A344A] flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#60A5FA]" />
                </div>
                <div>
                  <p className="text-[#6B7280] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+917815094008" className="text-white text-sm hover:text-[#60A5FA] transition-colors">
                    +91 78150<br/>94008
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 border-b border-[#232A3B] pb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1D243A] border border-[#2A344A] flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#60A5FA]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#6B7280] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:biswajitbehera1868@gmail.com" className="text-white text-sm hover:text-[#60A5FA] transition-colors truncate block">
                    biswajitbehera1868@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 border-b border-[#232A3B] pb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1D243A] border border-[#2A344A] flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#60A5FA]" />
                </div>
                <div>
                  <p className="text-[#6B7280] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white text-sm">
                    Dhenkanal, Orissa,<br/>India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/biswajit7815" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-[#1D243A] border border-[#2A344A] flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#60A5FA] transition-all">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/biswajit7815" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-[#1D243A] border border-[#2A344A] flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#60A5FA] transition-all">
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Availability Badge */}
              <div className="mt-4 bg-[#064E3B]/20 border border-[#065F46]/30 rounded-lg p-3 flex items-start md:items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#10B981] mt-1.5 md:mt-0 shrink-0 shadow-[0_0_8px_#10B981]"></div>
                <span className="text-[#34D399] text-xs md:text-sm">Available for new<br className="hidden md:block"/> opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#151B2B] rounded-2xl border border-[#232A3B] p-6 md:p-8 relative"
          >
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#151B2B]/95 backdrop-blur-sm rounded-2xl z-20">
                <CheckCircle2 size={56} className="text-[#10B981] mb-4" />
                <h4 className="text-xl text-white font-bold mb-2">Message Sent</h4>
                <p className="text-[#9CA3AF] text-sm text-center px-6">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : null}

            <h4 className="text-[#6B7280] text-xs font-bold tracking-widest uppercase mb-6">
              Send a Message
            </h4>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-[#6B7280] text-xs font-bold tracking-widest uppercase mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2A2A28]/50 border border-[#3F3F3A] rounded-lg text-white text-sm px-4 py-3 focus:outline-none focus:border-[#60A5FA] transition-colors"
                    placeholder="Biswajit"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-[#6B7280] text-xs font-bold tracking-widest uppercase mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2A2A28]/50 border border-[#3F3F3A] rounded-lg text-white text-sm px-4 py-3 focus:outline-none focus:border-[#60A5FA] transition-colors"
                    placeholder="Behera"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[#6B7280] text-xs font-bold tracking-widest uppercase mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#2A2A28]/50 border border-[#3F3F3A] rounded-lg text-white text-sm px-4 py-3 focus:outline-none focus:border-[#60A5FA] transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#6B7280] text-xs font-bold tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#2A2A28]/50 border border-[#3F3F3A] rounded-lg text-white text-sm px-4 py-3 focus:outline-none focus:border-[#60A5FA] transition-colors resize-none"
                  placeholder="Let's build something great together..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-medium text-sm text-white bg-[#1D243A] border border-[#2A344A] hover:bg-[#2A344A] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                  ) : (
                    <>
                      <Send size={16} className="text-[#9CA3AF]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
