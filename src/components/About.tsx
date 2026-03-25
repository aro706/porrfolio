import { motion } from 'framer-motion';
import { Brain, Code, Database, Search } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">01</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">About Me</h2>
            <h3 className="text-5xl font-display text-primary dark:text-white mb-8 tracking-tighter">
              I don’t just analyze data — <span className="text-secondary">I make it useful</span>.
            </h3>
            <p className="text-lg text-charcoal/80 dark:text-dark-text/80 leading-relaxed mb-6">
              I’m a Computer Science student who enjoys solving real-world problems using data. My journey started with Data Structures and Algorithms, where I built strong problem-solving skills by solving 800+ problems on CodeChef and LeetCode.
            </p>
            <p className="text-lg text-charcoal/80 dark:text-dark-text/80 leading-relaxed mb-10">
              I love working on projects that involve understanding messy datasets, building predictive models, and creating interactive dashboards. My goal is to build systems that don’t just work — but actually help people make better decisions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-secondary"><Brain size={20} /></div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Predictive Modeling</h4>
                  <p className="text-xs text-charcoal/60 dark:text-dark-muted">Building Future Insights</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-secondary"><Search size={20} /></div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white">NLP & GenAI</h4>
                  <p className="text-xs text-charcoal/60 dark:text-dark-muted">Understanding Language</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-secondary"><Database size={20} /></div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Data Visualization</h4>
                  <p className="text-xs text-charcoal/60 dark:text-dark-muted">Interactive Dashboards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-secondary"><Code size={20} /></div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Problem Solving</h4>
                  <p className="text-xs text-charcoal/60 dark:text-dark-muted">800+ DSA Solved</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-48 bg-primary/5 rounded-2xl flex items-center justify-center p-8">
                <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" className="w-16 h-16 opacity-40 grayscale hover:grayscale-0 transition-all" />
              </div>
              <div className="h-64 bg-secondary/5 rounded-2xl flex items-center justify-center p-8">
                <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow" className="w-20 h-20 opacity-40 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-accent/5 rounded-2xl flex items-center justify-center p-8">
                <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" className="w-20 h-20 opacity-40 grayscale hover:grayscale-0 transition-all" />
              </div>
              <div className="h-48 bg-primary/5 rounded-2xl flex items-center justify-center p-8">
                <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="SQL" className="w-16 h-16 opacity-40 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
