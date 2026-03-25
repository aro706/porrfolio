import { motion } from 'framer-motion';
import { Code2, Database, Layout, Brain, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="text-secondary" />,
    skills: ["Python", "C++", "SQL", "JavaScript", "R"],
    color: "bg-secondary/10"
  },
  {
    title: "Data Science",
    icon: <Database className="text-accent" />,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    color: "bg-accent/10"
  },
  {
    title: "Machine Learning",
    icon: <Brain className="text-primary dark:text-white" />,
    skills: ["TensorFlow", "PyTorch", "Keras", "NLP", "Computer Vision"],
    color: "bg-primary/10 dark:bg-white/10"
  },
  {
    title: "Web Technologies",
    icon: <Layout className="text-secondary" />,
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    color: "bg-secondary/10"
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="text-accent" />,
    skills: ["Git/GitHub", "Docker", "VS Code", "Jupyter", "Tableau"],
    color: "bg-accent/10"
  },
  {
    title: "Core CS",
    icon: <Cpu className="text-primary dark:text-white" />,
    skills: ["DSA", "DBMS", "OS", "Computer Networks", "OOPs"],
    color: "bg-primary/10 dark:bg-white/10"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">02</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-display text-primary dark:text-white tracking-tighter">My Tech <span className="text-secondary">Stack</span></h3>
          </div>
          <p className="text-charcoal/60 dark:text-dark-muted max-w-md text-lg">
            A comprehensive toolkit of technologies and methodologies I use to solve complex data problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-dark-card/50 backdrop-blur-xl hover:bg-white dark:hover:bg-dark-card transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-primary dark:text-white">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-xs font-medium text-charcoal/60 dark:text-dark-muted bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5 group-hover:border-secondary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
