import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Technology Division Intern",
    company: "Atharva Infortech",
    duration: "May 2025 – July 2025",
    proofOfWork: "https://drive.google.com/file/d/1LPqRXMlrATydFXP-sMF_j8PbscpDbbMJ/view?usp=sharing",
    impact: [
      "Worked on Java-based backend modules, focusing on logic implementation, debugging, and performance enhancement for internal systems.",
      "Integrated and managed MySQL databases, enhanced data retrieval efficiency by 15–20% through query optimization and structural refinement.",
      "Contributed to 2–3 key internal projects, assisting in feature development, system testing, and issue resolution to improve overall system stability.",
      "Tech: Java, MySQL, Python"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">05</div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Career Path</h2>
          <h3 className="text-5xl md:text-6xl font-display text-primary dark:text-white tracking-tighter">Work <span className="text-secondary">Experience</span></h3>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line - Hidden on mobile, shown on desktop as a left rail */}
          <div className="absolute left-0 md:left-[7px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-dark-card"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-8 md:-left-[1px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-white dark:border-dark-bg z-10 shadow-sm"></div>

                <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 dark:bg-dark-card dark:border-dark-card group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 text-secondary mb-1">
                        <Briefcase size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">{exp.company}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">
                        {exp.role}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 rounded-lg text-charcoal/60 dark:text-dark-muted text-xs font-bold">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.proofOfWork && (
                        <a 
                          href={exp.proofOfWork} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-secondary hover:underline"
                        >
                          <ExternalLink size={14} />
                          <span>Proof of Work</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.impact.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-charcoal/70 dark:text-dark-text/70 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary/40 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
