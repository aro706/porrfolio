import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy, ExternalLink, Calendar } from 'lucide-react';

const achievements = [
  {
    title: "Solved 800+ DSA Problems",
    issuer: "LeetCode / Codeforces / HackerRank",
    date: "December 2025",
    icon: <BookOpen className="text-primary dark:text-white" />,
    description: "Solved 800+ problems across various coding platforms, demonstrating strong algorithmic problem-solving skills.",
    category: "Competitive",
    link: "https://leetcode.com/u/tanishkasoni688/"
  },
  {
    title: "Codeforces Pupil (1289)",
    issuer: "Codeforces",
    date: "September 2025",
    icon: <Award className="text-accent" />,
    description: "Achieved Pupil rank with a contest rating of 1289 through consistent participation in rated contests.",
    category: "Competitive",
    link: "https://codeforces.com/profile/anastasia_16"
  },
  {
    title: "Top 2% Globally - Codeforces",
    issuer: "Codeforces Div. 2",
    date: "September 2025",
    icon: <Trophy className="text-secondary" />,
    description: "Ranked 553 out of 30,000+ participants in Codeforces Div. 2 round.",
    category: "Competitive",
    link: "https://codeforces.com/profile/anastasia_16"
  },
  {
    title: "CodeChef 4★ Rating",
    issuer: "CodeChef",
    date: "August 2025",
    icon: <Award className="text-accent" />,
    description: "Achieved a 4-star rating on CodeChef, demonstrating competitive programming proficiency.",
    category: "Competitive",
    link: "https://www.codechef.com/users/tanishkasoni68"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">06</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Recognition</h2>
            <h3 className="text-5xl md:text-6xl font-display text-primary dark:text-white tracking-tighter">My <span className="text-secondary">Achievements</span></h3>
          </div>
          <p className="text-charcoal/60 dark:text-dark-muted max-w-md text-lg">
            Milestones and achievements in competitive programming and academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-dark-card/50 backdrop-blur-xl hover:bg-white dark:hover:bg-dark-card transition-all duration-500 block"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white dark:bg-dark-bg rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-xs font-bold text-secondary uppercase tracking-wider">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <p className="text-sm text-charcoal/70 dark:text-dark-muted leading-relaxed">
                  {item.description}
                </p>
                
                <div className="pt-4 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
                  <span className="text-xs font-medium text-charcoal/50 dark:text-dark-muted/50">{item.issuer}</span>
                  <ExternalLink size={14} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
