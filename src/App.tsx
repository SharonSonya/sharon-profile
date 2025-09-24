import React, { useState, useEffect } from 'react';
import HealthcareDashboard from './components/HealthcareDashboard';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  User, 
  Briefcase, 
  GraduationCap, 
  Star, 
  Menu, 
  X,
  Eye,
  Palette,
  Users,
  Target,
  Lightbulb,
  TestTube,
  Linkedin,
  Github
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showHealthcareDashboard, setShowHealthcareDashboard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    ux: [
      { name: 'User Research', icon: Users },
      { name: 'Persona Development', icon: User },
      { name: 'Wireframing', icon: Target },
      { name: 'Prototyping', icon: Lightbulb },
      { name: 'Usability Testing', icon: TestTube },
      { name: 'Design Thinking', icon: Lightbulb }
    ],
    ui: [
      { name: 'Visual Design', icon: Palette },
      { name: 'Responsive Design', icon: Eye },
      { name: 'Typography', icon: Palette },
      { name: 'Color Theory', icon: Palette },
      { name: 'Interaction Design', icon: Target },
      { name: 'Accessibility', icon: Users }
    ],
    tools: [
      'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Canva'
    ]
  };

  const projects = [
    {
      id: 1,
      title: "Healthcare Dashboard Interface",
      role: "UI Designer & UX Researcher",
      problem: "Complex data visualization causing confusion for medical professionals",
      process: "Stakeholder interviews, information architecture, design system creation, accessibility testing",
      tools: "Figma, React, TypeScript",
      outcome: "Reduced task completion time by 40% and improved user satisfaction scores",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      hasDemo: true
    },
    {
      id: 2,
      title: "Cherry The Therapist Beauty Salon",
      role: "UI/UX Designer & Frontend Developer",
      problem: "Beauty salon needed an online presence to showcase services, allow appointment booking, and build client relationships",
      process: "Client consultation, competitor analysis, brand identity design, responsive web design, user journey mapping",
      tools: "Figma, HTML, CSS, JavaScript, Netlify",
      outcome: "Increased online visibility, streamlined appointment inquiries, and enhanced brand credibility",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
      hasDemo: true,
      demoUrl: "https://cherry-thetherapist-beautysalon.netlify.app"
    },
    {
      id: 3,
      title: "E-Commerce Mobile App Redesign",
      role: "End-to-End UX/UI Designer",
      problem: "Low conversion rates and poor user engagement on existing mobile platform",
      process: "User research, persona development, journey mapping, wireframing, prototyping, usability testing",
      tools: "Figma, Miro, InVision",
      outcome: "Increased conversion rate by 35% and user engagement by 50%",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      id: 4,
      title: "Financial Services Web Platform",
      role: "Senior UX Designer",
      problem: "Users struggled with complex financial processes and information overload",
      process: "Design thinking workshops, user journey mapping, iterative prototyping, A/B testing",
      tools: "Figma, Miro, InVision",
      outcome: "Improved user task success rate by 60% and reduced support tickets by 30%",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    }
  ];

  if (showHealthcareDashboard) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowHealthcareDashboard(false)}
          className="fixed top-4 right-4 z-50 bg-white text-gray-600 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
        >
          <X size={16} />
          <span>Back to Portfolio</span>
        </button>
        <HealthcareDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Sharon Kam'mambala
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Skills', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sharon Kam'mambala
            </h1>
            <p className="text-xl md:text-2xl text-purple-600 font-medium mb-8">
              UI/UX Designer
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              I'm a UI/UX Designer with a passion for creating user-centered, accessible, and visually appealing digital experiences. 
              With experience in wireframing, prototyping, and user research, I help brands solve real problems through thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences that solve real user problems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Design Philosophy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe great design happens when we truly understand our users. Every project I work on starts with 
                thorough research and empathy mapping to ensure the final solution not only looks beautiful but also 
                functions intuitively for the people who matter most.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach combines analytical thinking with creative problem-solving, always keeping accessibility 
                and inclusivity at the forefront of every design decision.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail size={16} className="text-purple-600 mr-3" />
                  <span className="text-gray-600">sharonkamms@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-purple-600 mr-3" />
                  <span className="text-gray-600">Available for remote work</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={16} className="text-purple-600 mr-3" />
                  <span className="text-gray-600">3+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional user experiences from research to final implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* UX Skills */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="text-purple-600 mr-3" size={24} />
                UX Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.ux.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <skill.icon size={16} className="text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UI Skills */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Palette className="text-teal-600 mr-3" size={24} />
                UI Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.ui.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <skill.icon size={16} className="text-teal-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="text-indigo-600 mr-3" size={24} />
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.tools.map((tool, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg text-center">
                    <span className="text-sm font-medium text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Case studies showcasing my approach to solving complex design challenges across different industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-purple-600 font-medium mb-4">{project.role}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">The Problem</h4>
                        <p className="text-gray-600 text-sm">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">My Process</h4>
                        <p className="text-gray-600 text-sm">{project.process}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Tools Used</h4>
                        <p className="text-gray-600 text-sm">{project.tools}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Outcome</h4>
                        <p className="text-teal-600 text-sm font-medium">{project.outcome}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex space-x-4">
                      {project.hasDemo ? (
                        project.id === 1 ? (
                          <button 
                            onClick={() => setShowHealthcareDashboard(true)}
                            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
                          >
                            View Live Demo <ExternalLink size={16} className="ml-1" />
                          </button>
                        ) : (
                          <a 
                            href={project.demoUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
                          >
                            View Live Demo <ExternalLink size={16} className="ml-1" />
                          </a>
                        )
                      ) : (
                        <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                          View Case Study <ExternalLink size={16} className="ml-1" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My journey in design and continuous learning to stay current with industry trends.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Briefcase className="text-purple-600 mr-3" />
                Work Experience
              </h3>
              <div className="space-y-8">
                <div className="border-l-4 border-purple-200 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">Entry Level UI/UX Designer</h4>
                  <p className="text-purple-600 font-medium">Freelance • 2023 - Present</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Working on design projects for small businesses and startups, learning user-centered design 
                    principles while building practical experience in wireframing, prototyping, and client collaboration.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-200 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">UI/UX Designer</h4>
                  <p className="text-purple-600 font-medium">Tech Startup • 2021 - 2023</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Designed and implemented user interfaces for web and mobile applications, 
                    conducted user research, and collaborated with development teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="text-teal-600 mr-3" />
                Education & Certifications
              </h3>
              <div className="space-y-8">
                <div className="border-l-4 border-teal-200 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">Google UX Design Certificate</h4>
                  <p className="text-teal-600 font-medium">Coursera • January 2024</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Comprehensive program covering user experience research, design, and prototyping.
                  </p>
                </div>
                
                <div className="border-l-4 border-teal-200 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">Google Data Analytics Certificate</h4>
                  <p className="text-teal-600 font-medium">Coursera • Currently Studying</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Learning data analysis techniques, visualization, and insights generation to enhance design decisions with data-driven approaches.
                  </p>
                </div>
                
                <div className="border-l-4 border-teal-200 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">Digital Marketing Certificate</h4>
                  <p className="text-teal-600 font-medium">Completed • 2022</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Comprehensive training in digital marketing strategies, analytics, and user acquisition to better understand business goals in design projects.
                  </p>
                </div>
                
                <div className="border-l-4 border-teal-200 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">UI/UX Design Fundamentals</h4>
                  <p className="text-teal-600 font-medium">Design Academy • 2021</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Foundation course in design principles, typography, color theory, and user interface design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimonials from satisfied clients and collaborators.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Sharon's attention to detail and user-focused approach transformed our product. 
                The redesign led to significant improvements in user engagement and conversion rates."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                  <User size={16} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Alex Johnson</p>
                  <p className="text-sm text-gray-600">Product Manager, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Working with Sharon was a fantastic experience. Her research-driven approach and 
                collaborative spirit made the entire design process smooth and effective."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center mr-3">
                  <User size={16} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Martinez</p>
                  <p className="text-sm text-gray-600">CEO, StartupXYZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to create something amazing? I'd love to hear about your project and discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid md:grid-cols-5 gap-8 mb-8">
                <div className="text-center">
                  <Mail size={32} className="text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:sharonkamms@gmail.com"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    sharonkamms@gmail.com
                  </a>
                </div>
                
                <div className="text-center">
                  <Download size={32} className="text-teal-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Resume</h3>
                  <a 
                    href="/sharon-kammambala-resume.pdf"
                    download="Sharon-Kammambala-Resume.pdf"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
                
                <div className="text-center">
                  <Linkedin size={32} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/sharon-kam-mambala-sonya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Available for freelance projects and full-time opportunities
                </p>
                <div className="flex justify-center space-x-6">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Start a Project
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                    Schedule a Call
                  </button>
                
                <div className="text-center">
                  <Phone size={32} className="text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:+27644063580"
                      className="block text-indigo-600 hover:text-indigo-700 transition-colors text-sm"
                    >
                      +27 64 406 3580
                    </a>
                    <a 
                      href="tel:+263788608032"
                      className="block text-indigo-600 hover:text-indigo-700 transition-colors text-sm"
                    >
                      +263 788 608 032
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Sharon Kam'mambala. Designed with passion and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;