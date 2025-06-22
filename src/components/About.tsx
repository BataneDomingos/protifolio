import React from 'react';
import { Code, Smartphone, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Especialista em React, Node.js, e tecnologias modernas de desenvolvimento web'
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Criação de aplicativos nativos e híbridos para iOS e Android'
    },
    {
      icon: Globe,
      title: 'Sistemas Completos',
      description: 'Desenvolvimento de sistemas end-to-end, desde o backend até a interface'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Código limpo, performático e seguindo as melhores práticas da indústria'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl p-8 backdrop-blur-sm border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Desenvolvedor De Sistemas e Aplicativos
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Com vasta experiência em desenvolvimento web e mobile, tenho dedicado minha carreira 
                  a criar soluções digitais que fazem a diferença. Minha paixão está em transformar 
                  ideias complexas em aplicações elegantes e funcionais.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Especializo-me em tecnologias modernas como React, Node.js, TypeScript, e frameworks 
                  mobile, sempre mantendo o foco na experiência do usuário e na performance das aplicações.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    7+ Anos de Experiência
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    12+ Projetos Concluídos
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    9+ Clientes Satisfeitos
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border border-slate-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;