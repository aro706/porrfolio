import { motion } from 'framer-motion';
import { Code, Terminal, Trophy, ExternalLink, Github, Linkedin } from 'lucide-react';

const profiles = [
  {
    name: "LeetCode",
    handle: "tanishkasoni688",
    link: "https://leetcode.com/u/tanishkasoni688/",
    icon: <Code className="text-primary dark:text-white" />,
    color: "bg-yellow-500/10 text-yellow-500",
    stats: "800+ Problems Solved"
  },
  {
    name: "Codeforces",
    handle: "anastasia_16",
    link: "https://codeforces.com/profile/anastasia_16",
    icon: <Terminal className="text-primary dark:text-white" />,
    color: "bg-blue-500/10 text-blue-500",
    stats: "Pupil (1289)"
  },
  {
    name: "CodeChef",
    handle: "tanishkasoni68",
    link: "https://www.codechef.com/users/tanishkasoni68",
    icon: <Trophy className="text-primary dark:text-white" />,
    color: "bg-orange-500/10 text-orange-500",
    stats: "4★ Rating"
  },
  {
    name: "GitHub",
    handle: "tanishka688",
    link: "https://github.com/tanishka688",
    icon: <Github className="text-primary dark:text-white" />,
    color: "bg-gray-500/10 text-gray-500",
    stats: "Projects & Contributions"
  },
  {
    name: "LinkedIn",
    handle: "tanishkasoni16",
    link: "https://www.linkedin.com/in/tanishkasoni16",
    icon: <Linkedin className="text-primary dark:text-white" />,
    color: "bg-blue-600/10 text-blue-600",
    stats: "Professional Network"
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section-padding bg-background dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">07</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Online Presence</h2>
            <h3 className="text-5xl md:text-6xl font-display text-primary dark:text-white tracking-tighter">Coding <span className="text-secondary">Profiles</span></h3>
          </div>
          <p className="text-charcoal/60 dark:text-dark-muted max-w-md text-lg">
            Connect with me on various competitive programming and professional platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card p-6 rounded-3xl border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-dark-card/50 backdrop-blur-xl hover:bg-white dark:hover:bg-dark-card transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${profile.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {profile.icon}
              </div>
              
              <h4 className="text-xl font-bold text-primary dark:text-white mb-1 group-hover:text-secondary transition-colors">{profile.name}</h4>
              <p className="text-sm text-charcoal/50 dark:text-dark-muted mb-4">@{profile.handle}</p>
              
              <div className="mt-auto pt-4 w-full border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{profile.stats}</span>
                <ExternalLink size={14} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
