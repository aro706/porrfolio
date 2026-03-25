import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Code, Terminal, Trophy, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl shadow-lg py-3 border-b border-gray-100 dark:border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-black dark:text-white font-display text-2xl font-black tracking-tighter group">
          TANISHKA <span className="text-secondary group-hover:text-accent transition-colors">SONI</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-charcoal/70 dark:text-dark-text/70 hover:text-secondary dark:hover:text-secondary transition-all hover:translate-y-[-1px]"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4 border-l pl-6 border-gray-200 dark:border-white/10">
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-charcoal dark:text-dark-text hover:bg-secondary/10 dark:hover:bg-secondary/20 transition-all duration-300 group relative overflow-hidden"
              aria-label="Toggle dark mode"
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 360 : 0 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                {darkMode ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-primary" />}
              </motion.div>
              <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-charcoal dark:text-dark-text hover:text-secondary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-charcoal dark:text-dark-text transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
