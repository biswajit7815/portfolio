import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const CertificationsSection = React.memo(() => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge_150x150.png"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "Expected 2024",
      status: "In Progress",
      badgeUrl: "https://landscape.cncf.io/images/projects/kubernetes-icon-color.svg"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
      status: "Active",
      badgeUrl: "https://www.datocms-assets.com/2885/1629941242-logo-terraform-main.svg"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto my-32 px-6"
    >
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 flex justify-center items-center gap-3">
          <Award className="text-primary-400" size={40} /> 
          Licenses & <span className="gradient-text">Certifications</span>
        </h3>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, i) => (
          <div key={i} className="glass-card rounded-[2rem] p-8 border border-white/10 hover:border-primary-500/50 transition-all flex flex-col items-center text-center relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 mb-6 mx-auto bg-white/5 rounded-full flex items-center justify-center p-4">
                <img src={cert.badgeUrl} alt={cert.issuer} className="w-full h-full object-contain" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 leading-tight h-14 flex items-center justify-center">
                {cert.name}
              </h4>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6">
                {cert.issuer}
              </p>
              
              <div className="mt-auto flex items-center justify-center gap-2">
                {cert.status === 'Active' ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold bg-green-500/10 text-green-400 px-4 py-2 rounded-xl border border-green-500/20">
                    <CheckCircle2 size={14} /> Verified • {cert.date}
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-bold bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-xl border border-yellow-500/20">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    {cert.status} • {cert.date}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
});

export default CertificationsSection;
