import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">BD</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Batane Domingos
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Web Developer
            </span>
            <span className="mx-4">•</span>
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-semibold">
              Criador de Sistemas
            </span>
            <span className="mx-4">•</span>
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Mobile App Developer
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Criando soluções digitais inovadoras e sistemas robustos que transformam ideias em realidade. 
            Especialista em desenvolvimento de Sistemas e aplicações mobile de alta performance.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
            <a
              href="mailto:batanezitodomingos@gmail.com"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            > 
              <Mail size={20} className="text-white" /> 
            </a> 
            
            <a
              href="https://github.com/BataneDomingos"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/batane-domingos-1447172b8"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <Linkedin size={20} className="text-white" />
            </a>
          </div>

          <button
            onClick={scrollToNext}
            className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 animate-fade-in-delay-4"
          >
            <span className="flex items-center space-x-2">
              <span>Explorar Meu Trabalho</span>
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
