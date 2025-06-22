import React from 'react';
import { Download, Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const experience = [
    {
      title: 'Desenvolvedor de Software',
      company: 'Gimo Services.',
      period: '2022 - Presente',
      location: 'Beira e Remoto',
      description: 'Lidero equipe de desenvolvimento em projetos para grandes empresas, focando em arquitetura escalável e performance.'
    },
    {
      title: 'Web Developer',
      company: 'Gimo Services.',
      period: '2022 - 2023',
      location: 'Beira- Moçambique',
      description: 'Densenvolvi sum sistema de gestao de vendas com controle total do stock, vendas, recibos e mais..'
    },
    {
      title: 'Web Developer',
      company: 'Freelancer',
      period: '2024 - 2025',
      location: 'Beira- Moçambique',
      description: 'Criação de websites e E-commerce personalizados para pequenas e médias empresas, utilizando tecnologias modernas como React e Next.js.'
    }
  ];

  const education = [
    {
      degree: 'Certificação Profissional em Desenvolvimento de Software',
      school: 'UCM- Faculdade de Engenharia Informática',
      period: '2022 - 2025',
      description: 'Formação sólida em algoritmos, estruturas de dados e engenharia de software.'
    },
    {
      degree: 'Especialização em Sistemas de Informação',
      school: 'UCM- Faculdade de Engenharia Informática',
      period: '2022 - 2023',
      description: 'Fundamentos de programação, Redes e Sistemas operacionais, Inteligencia Artificial, Gestao de Banco de Dados, Gestao de Projectos e Metodologias Ágeis.'
    }
  ];

  const certifications = [
  'Estou atualmente finalizando o curso profissional de Tecnologia de Informação na UCM .',
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Meu Currículo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Trajetória profissional e formação acadêmica
          </p>
          
          {/* Download Button */}
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Experiência Profissional</h3>
                </div>
                
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-purple-500/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                        <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center">
                            <Briefcase size={14} className="mr-1" />
                            {exp.company}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Formação Acadêmica</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-blue-500/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                        <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center">
                            <GraduationCap size={14} className="mr-1" />
                            {edu.school}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Certifications & Skills Summary */}
            <div className="space-y-8">
              {/* Certifications */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Award size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Certificações</h3>
                </div>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xs">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Email</p>
                      <p className="text-white text-sm">batanezitodomingos@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xs">📱</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Telefone</p>
                      <p className="text-white text-sm">+258 865140228</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xs">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Localização</p>
                      <p className="text-white text-sm">Bira - Moçambique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;