import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Since August 2023",
    score: "CGPA: 8.33",
    icon: <GraduationCap className="text-secondary" />
  },
  {
    degree: "Intermediate",
    school: "Athena World Public School",
    location: "Raipur, Chhattisgarh",
    duration: "April 2021 - March 2023",
    score: "Percentage: 84.4%",
    icon: <Award className="text-accent" />
  },
  {
    degree: "Matriculation",
    school: "Krishna Public School",
    location: "Raipur, Chhattisgarh",
    duration: "Before March 2021",
    score: "Percentage: 95%",
    icon: <Award className="text-primary" />
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-background dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">08</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Academic Background</h2>
            <h3 className="text-5xl md:text-6xl font-display text-primary dark:text-white tracking-tighter">My <span className="text-secondary">Education</span></h3>
          </div>
          <p className="text-charcoal/60 dark:text-dark-muted max-w-md text-lg">
            A foundation of academic excellence and continuous learning in computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-dark-card/50 backdrop-blur-xl hover:bg-white dark:hover:bg-dark-card transition-all duration-500 flex flex-col"
            >
              <div className="w-12 h-12 bg-white dark:bg-dark-bg rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-2 leading-tight group-hover:text-secondary transition-colors">{item.degree}</h4>
              <p className="text-secondary font-bold text-sm mb-4">{item.school}</p>
              
              <div className="mt-auto pt-6 space-y-4 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center space-x-2 text-xs text-charcoal/60 dark:text-dark-muted">
                  <MapPin size={14} className="text-secondary" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-charcoal/40 dark:text-dark-muted">{item.duration}</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">{item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
