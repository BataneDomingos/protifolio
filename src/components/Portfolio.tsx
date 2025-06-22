import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project } from '../types';

type ProjectImage = {
  src: string;
  label: string;
};

const Portfolio: React.FC = () => {
  const projects: (Project & { images: ProjectImage[] })[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de entregas.',
      technologies: ['React', 'Mysql', 'Node.js', 'Express'],
      image: '',
    images: [
   { src: '/imagens/1.png', label: 'Painel Principal (Cliente)' },
         { src: '/imagens/2.png', label: 'Produtos Cadastrados no Sistema' },
         { src: '/imagens/3.png', label: 'Rodapé Atraente' },
         { src: '/imagens/4.png', label: 'Tela de Login' },
         { src: '/imagens/5.png', label: 'Tela de Cadastro' },
         { src: '/imagens/6.png', label: 'Carrinho de Compras' },
         { src: '/imagens/7.png', label: 'Adicionar Endereço de Entrega' },
         { src: '/imagens/8.png', label: 'Confirmação de Frete' },
         { src: '/imagens/9.png', label: 'Dados de Pagamento' },
         { src: '/imagens/11.png', label: 'Compra Finalizada' },
         { src: '/imagens/22.png', label: 'Detalhes do Pedido' },
         { src: '/imagens/33.png', label: 'Painel de Administração' },
         { src: '/imagens/44.png', label: 'Gerenciamento de Pedidos' },
         { src: '/imagens/55.png', label: 'Configuração do Sistema' },
],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Sistema de Venda',
      description: 'Sistema de venda completa com gestão de estoque, produtos e recibos. Tudo para facilitar seu negocio. O sistema e protogido com um sistema de login logo no inicio.',
      technologies: ['React', 'PostgreSQL', 'Node.js', 'Express'],
      image: '',
      images: [
        { src: '/imagens/01.png', label: 'Painel do login para acessar o sistema' },
        { src: '/imagens/02.png', label: 'Painel administrativo' },
        { src: '/imagens/04.png', label: 'Gráficos de vendas por dia e mês' },
        { src: '/imagens/stock.png', label: 'Gestão de produtos e stock' },
        { src: '/imagens/07.png', label: 'Painel do cliente' },
        { src: '/imagens/troco.png', label: 'Painel de venda com cálculo de troco automático' },
        { src: '/imagens/08.png', label: 'Recibo de venda' },
        { src: '/imagens/09.png', label: 'Histórico de venda' }
       
      ],
      link: '#',
      github: '#',
    },
     {
      id: 3,
      title: 'Sistema de Reserva de Carros',
      description: 'Sistema moderno de reserva de carros, com visual agradável, gerenciamento de pedidos, painel do cliente e painel do administrador. Permite o cadastro, visualização de carros disponíveis, acompanhamento de pedidos e confirmação de pagamento.',
      technologies: ['React', 'Mysql', 'Node.js', 'Express'],
      image: '',
      images: [
        { src: '/imagens/001.png', label: 'Painel principal' },
        { src: '/imagens/002.png', label: 'Tela de login' },
        { src: '/imagens/carro.png', label: 'Painel administrativo' },
        { src: '/imagens/promo.png', label: 'Painel de promoções' },
        { src: '/imagens/cli.png', label: 'Painel do cliente' }
      ],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'ChatBot Inteligente',
      description: 'Um assistente virtual desenvolvido com tecnologias modernas, capaz de interagir com usuários de forma natural e eficiente. Utiliza inteligência artificial da OpenAI para compreender perguntas, gerar respostas contextuais e aprender com o tempo. Ideal para suporte ao cliente, automação de atendimento e integração com sites e aplicativos.',
      technologies: ['Python', 'javaScript', 'HTML/CSS', 'OpenIA'],
      image: '',
      images: [
        { src: '/imagens/a.png', label: 'Painel de Saudacao ' },
        { src: '/imagens/002.png', label: 'Resposta Automatizada e Moderna' },
     
      ],
      link: '#',
      github: '#',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [modalProject, setModalProject] = useState<(Project & { images: ProjectImage[] }) | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handlePrev = (projectId: number, imagesLength: number) => {
    setCurrentImageIndex((prev) => {
      const current = prev[projectId] ?? 0;
      return {
        ...prev,
        [projectId]: (current - 1 + imagesLength) % imagesLength,
      };
    });
  };

  const handleNext = (projectId: number, imagesLength: number) => {
    setCurrentImageIndex((prev) => {
      const current = prev[projectId] ?? 0;
      return {
        ...prev,
        [projectId]: (current + 1) % imagesLength,
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndexes: { [key: number]: number } = {};
        projects.forEach((project) => {
          const current = prev[project.id] ?? 0;
          newIndexes[project.id] = (current + 1) % project.images.length;
        });
        return newIndexes;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [projects]);

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Meu Portfólio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projetos que demonstram minha expertise em desenvolvimento full-stack e mobile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const currentIndex = currentImageIndex[project.id] ?? 0;
            const imagesLength = project.images.length;

            return (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-slate-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div
                  className="relative overflow-hidden h-48 cursor-pointer"
                  onClick={() => {
                    setModalProject(project);
                    setModalImageIndex(currentIndex);
                  }}
                >
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={`${project.title} - ${img.label}`}
                      className={`absolute inset-0 w-full h-48 object-cover transition-opacity duration-500 ease-in-out ${
                        idx === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}

                  {imagesLength > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev(project.id, imagesLength);
                        }}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext(project.id, imagesLength);
                        }}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => {
            setModalProject(null);
            setModalImageIndex(0);
          }}
        >
          <div
            className="relative max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={modalProject.images[modalImageIndex].src}
                alt={`Imagem ${modalImageIndex + 1} de ${modalProject.title}`}
                className="w-full h-auto rounded-lg shadow-lg object-contain max-h-[90vh]"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 px-6 py-2 rounded-full shadow-lg">
                <p className="text-white text-lg font-semibold tracking-wide drop-shadow-md transition-all duration-300">
                  {modalProject.images[modalImageIndex].label}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setModalProject(null);
                setModalImageIndex(0);
              }}
              className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
            >
              <X size={24} />
            </button>
            {modalProject.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setModalImageIndex((prev) =>
                      (prev - 1 + modalProject.images.length) % modalProject.images.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() =>
                    setModalImageIndex((prev) =>
                      (prev + 1) % modalProject.images.length
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
