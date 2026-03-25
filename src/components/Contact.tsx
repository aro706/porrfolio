import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary dark:bg-slate-950 text-white relative overflow-hidden">
      <div className="section-number opacity-10">10</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
            <h3 className="text-5xl md:text-7xl font-display mb-8 tracking-tighter leading-tight">
              Let's build something <span className="text-secondary">meaningful</span>.
            </h3>
            
            <p className="text-white/60 mb-12 leading-relaxed max-w-md text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Email</p>
                <a href="mailto:tanishkasoni688@gmail.com" className="text-lg font-medium hover:text-secondary transition-colors block">tanishkasoni688@gmail.com</a>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Phone</p>
                <a href="tel:7880102785" className="text-lg font-medium hover:text-secondary transition-colors block">+91 7880102785</a>
              </div>
              
              <div className="space-y-1">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">LinkedIn</p>
                <a href="https://www.linkedin.com/in/tanishkasoni16" target="_blank" className="text-lg font-medium hover:text-secondary transition-colors block">/in/tanishkasoni16</a>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">GitHub</p>
                <a href="https://github.com/tanishka688" target="_blank" className="text-lg font-medium hover:text-secondary transition-colors block">/tanishka688</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem]"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:outline-none focus:border-secondary transition-colors text-white placeholder:text-white/20"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:outline-none focus:border-secondary transition-colors text-white placeholder:text-white/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-white/20 focus:outline-none focus:border-secondary transition-colors resize-none text-white placeholder:text-white/20"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button className="group relative w-full py-6 bg-secondary text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="text-lg">Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
