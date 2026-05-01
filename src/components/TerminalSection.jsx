import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Maximize2, Minus, X } from 'lucide-react';

const TerminalSection = React.memo(() => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', text: 'Welcome to biswa.dev shell (v1.0.0)' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const bottomRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, clear, sudo, date',
    whoami: 'Biswajit Behera - DevSecOps Engineer & Cloud Architect',
    skills: 'AWS, Kubernetes, Docker, Terraform, CI/CD, Python, Linux',
    sudo: 'Permission denied. This incident will be reported.',
    date: new Date().toString()
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedCmd = input.trim().toLowerCase();
      let response = '';

      if (trimmedCmd === 'clear') {
        setOutput([]);
        setInput('');
        return;
      }

      if (commands[trimmedCmd]) {
        response = commands[trimmedCmd];
      } else if (trimmedCmd !== '') {
        response = `bash: ${trimmedCmd}: command not found`;
      }

      if (trimmedCmd !== '') {
        setOutput(prev => [
          ...prev, 
          { type: 'command', text: `root@biswa:~$ ${input}` },
          { type: 'response', text: response }
        ]);
      }
      setInput('');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-4xl mx-auto my-32 px-6"
    >
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-[#0f111a] px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
            <TerminalIcon size={14} /> root@biswa-server
          </div>
          <div className="flex gap-3 text-gray-500">
            <Minus size={14} />
            <Maximize2 size={14} />
            <X size={14} />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-[#030307]/80 backdrop-blur-md p-6 h-[350px] overflow-y-auto font-mono text-sm shadow-inner">
          <div className="space-y-2">
            {output.map((line, i) => (
              <div key={i} className={`${
                line.type === 'system' ? 'text-gray-400' :
                line.type === 'command' ? 'text-cyan-400' : 'text-green-400'
              }`}>
                {line.text}
              </div>
            ))}
            <div className="flex items-center text-cyan-400 mt-2">
              <span className="mr-2">root@biswa:~$</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none flex-1 text-white caret-cyan-400"
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default TerminalSection;
