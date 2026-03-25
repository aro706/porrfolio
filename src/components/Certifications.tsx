import { motion } from 'framer-motion';
import { Award, FileCheck } from 'lucide-react';

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "October 2025",
    icon: <FileCheck className="text-secondary" />,
    description: "Professional certification in cloud computing concepts, infrastructure, and services.",
    link: "https://tinyurl.com/u45h7ynx"
  },
  {
    title: "Built Generative AI Apps and Solutions",
    issuer: "Infosys",
    date: "September 2025",
    icon: <Award className="text-accent" />,
    description: "Certified in designing and implementing Generative AI solutions using modern LLM frameworks.",
    link: "https://tinyurl.com/58ymfn9b"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Lovely Professional University",
    date: "July 2025",
    icon: <Award className="text-primary dark:text-white" />,
    description: "Comprehensive certification in advanced data structures and algorithmic problem-solving.",
    link: "https://tinyurl.com/ybusv9t2"
  },
  {
    title: "Java Programming",
    issuer: "neoColab",
    date: "May 2025",
    icon: <Award className="text-secondary" />,
    description: "Certified proficiency in Java backend development and object-oriented programming.",
    link: "https://tinyurl.com/vae4cd54"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "neoColab",
    date: "December 2024",
    icon: <Award className="text-accent" />,
    description: "Foundational certification in core data structures and algorithm implementation.",
    link: "https://tinyurl.com/wecm4aww"
  },
  {
    title: "Programming and Analysis Using Python",
    issuer: "Csepatshala",
    date: "April 2024",
    icon: <Award className="text-primary dark:text-white" />,
    description: "Certified in Python programming fundamentals and data analysis techniques.",
    link: "https://tinyurl.com/2c6cvk6m"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">09</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Professional Growth</h2>
            <h3 className="text-5xl md:text-6xl font-display text-primary dark:text-white tracking-tighter">My <span className="text-secondary">Certifications</span></h3>
          </div>
          <p className="text-charcoal/60 dark:text-dark-muted max-w-md text-lg">
            A continuous journey of upskilling and validating technical expertise. Click on a certificate to view it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, idx) => (
            <motion.a
              key={`${item.title}-${idx}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-dark-card/50 backdrop-blur-xl hover:bg-white dark:hover:bg-dark-card transition-all duration-500 block cursor-pointer"
            >
              <div className="w-12 h-12 bg-white dark:bg-dark-bg rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-white mb-1 group-hover:text-secondary transition-colors">{item.title}</h4>
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-4">{item.issuer} • {item.date}</p>
              <p className="text-sm text-charcoal/70 dark:text-dark-muted leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
