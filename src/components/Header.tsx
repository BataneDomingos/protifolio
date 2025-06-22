import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FileText, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'portfolio', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Início', href: '#home', id: 'home' },
    { icon: User, label: 'Sobre', href: '#about', id: 'about' },
    { icon: Code, label: 'Skills', href: '#skills', id: 'skills' },
    { icon: Briefcase, label: 'Portfólio', href: '#portfolio', id: 'portfolio' },
    { icon: FileText, label: 'Currículo', href: '#resume', id: 'resume' },
    { icon: Mail, label: 'Contato', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo with creative animation */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                Batane Domingos
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                
                {/* Icon with animation */}
                <item.icon 
                  size={18} 
                  className={`relative z-10 transition-all duration-300 ${
                    activeSection === item.id ? 'text-purple-400' : 'group-hover:text-purple-400'
                  }`} 
                />
                
                {/* Text */}
                <span className="relative z-10 font-medium">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative group p-2 rounded-lg transition-all duration-300 hover:bg-purple-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative z-10">
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              ) : (
                <Menu size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`group flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                      : 'bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500'
                  }`}>
                    <item.icon size={18} className="text-white" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                  
                  {/* Active indicator for mobile */}
                  {activeSection === item.id && (
                    <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;