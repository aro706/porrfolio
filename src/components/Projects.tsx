import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, TrendingUp, Target, Database, ArrowRight, Layout, Globe, Brain } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Projects', icon: <Globe size={16} /> },
  { id: 'web', name: 'Web Dev', icon: <Globe size={16} /> },
  { id: 'dashboard', name: 'Dashboards', icon: <Layout size={16} /> },
  { id: 'ml', name: 'ML Models', icon: <Brain size={16} /> },
];

const projects = [
  {
    title: "Research Paper Summarizer",
    category: "ml",
    description: "Automated research paper summarizer leveraging Python and transformer models.",
    bullets: [
      "Leveraged DistilBART, PyMuPDF, NLTK, Torch, and Plotly to process 30+ page academic PDFs.",
      "Implemented NLP preprocessing pipelines (tokenization, sentence segmentation).",
      "Optimized summarization quality by 25% and reduced noise in extracted text.",
      "Integrated visual insights including word clouds and sentiment distribution."
    ],
    impact: [
      "Generated concise summaries with up to 70% text reduction accuracy.",
      "Enhanced user understanding of research papers by 40%."
    ],
    tags: ["Python", "NLP", "DistilBART", "PyTorch", "Gradio"],
    image: "https://res.cloudinary.com/dkpf6xn5b/image/upload/v1774281223/WhatsApp_Image_2026-03-23_at_8.47.33_PM_dexwkg.jpg",
    links: { github: "https://github.com/tanishka688", live: "https://res.cloudinary.com/dkpf6xn5b/video/upload/v1774287919/WhatsApp_Video_2026-03-23_at_9.32.01_PM_iy0td9.mp4" }
  },
  {
    title: "Tornado Analysis Dashboard",
    category: "dashboard",
    description: "Interactive dashboard for analyzing large-scale meteorological datasets.",
    bullets: [
      "Utilized Power Query and Pivot Charts for real-time visualization of 50,000+ tornado events.",
      "Processed and cleaned 50,000+ NOAA storm records using Python and SQL.",
      "Implemented 8+ key KPIs including month-wise trends and geographic intensity.",
      "Automated ETL scripts to improve data consistency by over 95%."
    ],
    impact: [
      "Reduced preprocessing time by 40% through automation.",
      "Enabled users to extract actionable insights within seconds."
    ],
    tags: ["Excel", "Power Query", "Python", "SQL", "Power BI"],
    image: "https://res.cloudinary.com/dkpf6xn5b/image/upload/v1774281223/WhatsApp_Image_2026-03-23_at_8.47.09_PM_afww7p.jpg",
    links: { github: "https://github.com/tanishka688", live: "https://res.cloudinary.com/dkpf6xn5b/video/upload/v1774281707/WhatsApp_Video_2026-03-23_at_9.26.13_PM_fxezth.mp4" }
  },
  {
    title: "Asteroid Risk Analysis",
    category: "dashboard",
    description: "Identifying potentially hazardous asteroids using complex astronomical datasets.",
    bullets: [
      "Transformed NEO datasets into an interactive Power BI dashboard",
      "Used DAX for risk classification and orbit analysis",
      "Enabled real-time risk assessment based on MOID and size"
    ],
    impact: [
      "Identified hidden threats with low brightness",
      "Streamlined risk classification process by 30%"
    ],
    tags: ["Power BI", "DAX", "Data Modeling", "Scientific Analysis"],
    image: "https://res.cloudinary.com/dkpf6xn5b/image/upload/v1774281223/WhatsApp_Image_2026-03-23_at_8.43.34_PM_zjtie6.jpg",
    links: { github: "https://github.com/tanishka688", live: "https://res.cloudinary.com/dkpf6xn5b/video/upload/v1774281701/WhatsApp_Video_2026-03-23_at_9.26.14_PM_bdnc3w.mp4" }
  },
  {
    title: "Economic Growth Prediction",
    category: "ml",
    description: "Predicting economic growth drivers using World Bank WDI datasets.",
    bullets: [
      "Applied Random Forest and Gradient Boosting models",
      "Analyzed interconnected indicators like education and health",
      "Identified key growth drivers for GDP per capita"
    ],
    impact: [
      "Achieved 92% predictive accuracy for income classification.",
      "Provided data-driven insights for economic policy optimization."
    ],
    tags: ["Machine Learning", "Python", "Scikit-learn", "Data Science"],
    image: "https://res.cloudinary.com/dkpf6xn5b/image/upload/v1774281223/WhatsApp_Image_2026-03-23_at_8.44.16_PM_dypcvy.jpg",
    links: { github: "https://github.com/tanishka688", live: "https://res.cloudinary.com/dkpf6xn5b/video/upload/v1774281716/WhatsApp_Video_2026-03-23_at_9.26.27_PM_pxrgyf.mp4" }
  },
  {
    title: "HireCo – Job Portal",
    category: "web",
    description: "Full-stack job portal with role-based dashboards for job seekers and employers.",
    bullets: [
      "Designed role-based access control (RBAC) for recruiters and candidates.",
      "Built structured workflows for job lifecycle management and resume handling.",
      "Implemented automated email notifications for application status updates.",
      "Optimized database queries for efficient job search and filtering."
    ],
    impact: [
      "Improved recruitment workflow efficiency by 35%.",
      "Reduced manual application tracking effort by 50%.",
      "Handled 1,000+ mock records with seamless performance."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "RBAC"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
    links: { github: "https://github.com/tanishka688", live: "https://github.com/tanishka688" }
  },
  {
    title: "MediMeet – Healthcare System",
    category: "web",
    description: "Smart healthcare management system for appointment scheduling and role-based access.",
    bullets: [
      "Developed a multi-role system for Patients, Doctors, and Administrators.",
      "Implemented real-time appointment booking and doctor schedule management.",
      "Built an admin control panel for doctor onboarding and system analytics.",
      "Ensured secure data handling for patient history and visit tracking."
    ],
    impact: [
      "Reduced appointment scheduling time by 60% through automation.",
      "Improved patient-doctor communication efficiency by 45%.",
      "Centralized healthcare monitoring for 100% transparency."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "System Design"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    links: { github: "https://github.com/tanishka688", live: "https://github.com/tanishka688" }
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="section-number">04</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-display text-primary dark:text-white tracking-tighter">Selected <span className="text-secondary">Projects</span></h3>
          </div>
          <p className="text-charcoal/60 dark:text-dark-muted max-w-md text-lg">
            A collection of data-driven solutions and full-stack applications focusing on real-world impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-105' 
                  : 'bg-gray-100 dark:bg-white/5 text-charcoal/60 dark:text-dark-muted hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col bg-white dark:bg-dark-card rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {project.category === 'web' ? 'Web Dev' : project.category === 'dashboard' ? 'Dashboard' : 'ML Model'}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-primary dark:text-white mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-charcoal/70 dark:text-dark-muted mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mb-6 space-y-2">
                    {project.impact.map((imp, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs font-medium text-accent">
                        <TrendingUp size={14} className="mt-0.5 flex-shrink-0" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/5 hover:bg-secondary/10 text-charcoal/60 dark:text-dark-muted hover:text-secondary rounded-xl transition-all">
                        <Github size={18} />
                      </a>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/5 hover:bg-secondary/10 text-charcoal/60 dark:text-dark-muted hover:text-secondary rounded-xl transition-all">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-secondary flex items-center space-x-1 group/btn">
                      <span>View Details</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 text-center">
          <a 
            href="https://github.com/tanishka688?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary dark:bg-white text-white dark:text-primary rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
          >
            <span>View All Repositories</span>
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
