import { motion } from 'framer-motion';
import { ArrowRight, Download, BarChart2, Database, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern">
      {/* Pro Visual Effects - Animated Particles and Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-[120px] animate-[pulse-glow_8s_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] animate-[pulse-glow_10s_infinite_reverse]"></div>
        
        {/* Animated Particles - Pro Visualization */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-secondary/30 dark:bg-secondary/50 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{ 
                y: [null, Math.random() * -100 - 50 + "px"],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Dark Mode Specific Scanline Effect */}
        <div className="hidden dark:block absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-8 border border-secondary/20">
            <Sparkles size={14} className="animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display text-black dark:text-white leading-[1.1] mb-6 tracking-tight">
            Hi, I'm <span className="text-glow text-black dark:text-white">Tanishka Soni</span> 👋 <br />
            <span className="text-secondary dark:text-secondary/90">Aspiring Data Scientist</span>
          </h1>
          
          <p className="text-xl text-charcoal/80 dark:text-dark-text/70 max-w-xl mb-10 leading-relaxed">
            I build intelligent systems that turn messy real-world data into <span className="text-secondary font-semibold">meaningful predictions</span> and insights.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-primary dark:bg-secondary text-white rounded-xl font-bold flex items-center space-x-2 hover:bg-primary/90 dark:hover:bg-secondary/80 transition-all hover:scale-105 shadow-xl shadow-primary/20 dark:shadow-secondary/20"
            >
              <span>Hire Me</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1Q9rv6lydiWWKcELV45lWcYuvbAYX7n4P"
              download="Tanishka_Soni_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-white/10 text-primary dark:text-white border-2 border-primary/10 dark:border-white/10 rounded-xl font-bold flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1Q9rv6lydiWWKcELV45lWcYuvbAYX7n4P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary/20 dark:border-secondary/30 text-primary dark:text-secondary rounded-xl font-bold flex items-center space-x-2 hover:bg-primary/5 dark:hover:bg-secondary/10 transition-all backdrop-blur-sm"
            >
              <BarChart2 size={18} />
              <span>Proof of Work</span>
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-12">
            {[
              { label: 'DSA Problems', value: '800+' },
              { label: 'CodeChef', value: '4★' },
              { label: 'Global Rank', value: 'Top 2%' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-4xl font-black text-primary dark:text-white mb-1">{stat.value}</span>
                <span className="text-[10px] text-charcoal/50 dark:text-dark-muted uppercase tracking-[0.2em] font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          {/* Decorative Rings for Dark Mode */}
          <div className="absolute inset-0 dark:flex items-center justify-center hidden">
            <div className="w-[120%] h-[120%] border border-secondary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[110%] h-[110%] border border-accent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
            <img 
              src="https://res.cloudinary.com/dkpf6xn5b/image/upload/v1774289758/unnamed_nhw3lu.jpg" 
              alt="Tanishka Soni" 
              className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Floating Stats with Enhanced Visuals */}
          <motion.div 
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-16 glass-card p-5 rounded-2xl z-20 flex items-center space-x-4 border-l-4 border-l-secondary"
          >
            <div className="p-3 bg-secondary/10 text-secondary rounded-xl shadow-inner">
              <BarChart2 size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-charcoal/40 dark:text-dark-muted uppercase tracking-widest">Analysis</p>
              <p className="text-base font-bold text-primary dark:text-white">Predictive Modeling</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-16 -right-16 glass-card p-5 rounded-2xl z-20 flex items-center space-x-4 border-r-4 border-r-accent"
          >
            <div className="p-3 bg-accent/10 text-accent rounded-xl shadow-inner">
              <Cpu size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-charcoal/40 dark:text-dark-muted uppercase tracking-widest">Infrastructure</p>
              <p className="text-base font-bold text-primary dark:text-white">MLOps Pipeline</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
