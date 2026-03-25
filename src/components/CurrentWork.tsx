import { motion } from 'framer-motion';
import { Rocket, Brain, Code, Terminal } from 'lucide-react';

const currentFocus = [
  {
    icon: <Rocket className="text-secondary" />,
    text: "Building ML-based real-world applications"
  },
  {
    icon: <Brain className="text-accent" />,
    text: "Exploring Generative AI & LLMs"
  },
  {
    icon: <Code className="text-primary dark:text-white" />,
    text: "Strengthening DSA for placements (800+ solved)"
  },
  {
    icon: <Terminal className="text-secondary" />,
    text: "Learning advanced system design basics"
  }
];

export default function CurrentWork() {
  return (
    <section className="section-padding bg-background dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Focus</h2>
            <h3 className="text-4xl font-display text-primary dark:text-white mb-6">
              What I’m <span className="text-secondary">Currently</span> Working On
            </h3>
            <p className="text-charcoal/60 dark:text-dark-muted">
              I believe in continuous learning and growth. Here are the key areas I'm currently focusing my energy on.
            </p>
          </motion.div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {currentFocus.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-start space-x-4"
              >
                <div className="p-3 bg-white dark:bg-dark-bg rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <p className="text-sm font-bold text-primary dark:text-white leading-relaxed pt-2">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
