import { Github, Linkedin, Mail, Code, Terminal, Trophy } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tight">
              TANISHKA SONI
            </a>
            <p className="mt-2 text-white/40 text-sm">
              Data Scientist & ML Engineer.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/tanishka688" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://leetcode.com/u/tanishkasoni688/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="LeetCode">
              <Code size={20} />
            </a>
            <a href="https://codeforces.com/profile/anastasia_16" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="Codeforces">
              <Terminal size={20} />
            </a>
            <a href="https://www.codechef.com/users/tanishkasoni68" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="CodeChef">
              <Trophy size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tanishkasoni16" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:tanishkasoni688@gmail.com" className="text-white/60 hover:text-secondary transition-colors" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium uppercase tracking-widest">
          <p>© {currentYear} All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="https://drive.google.com/uc?export=download&id=1Q9rv6lydiWWKcELV45lWcYuvbAYX7n4P" download="Tanishka_Soni_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Download CV</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
