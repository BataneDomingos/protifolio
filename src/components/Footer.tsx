import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Batane Domingos
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor e apaixonado por criar soluções digitais que fazem a diferença. 
              Transformando ideias em realidade através do código.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Início', href: '#home' },
                { label: 'Sobre', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Currículo', href: '#resume' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-2">
              <a
                href="mailto:batanezitodomingos@gmail.com"
                className="block text-gray-400 hover:text-purple-400 transition-colors"
              >
                batanezitodomingos@gmail.com
              </a>
              <a
                href="tel:+244123456789"
                className="block text-gray-400 hover:text-purple-400 transition-colors"
              >
                +258 865140228
              </a>
              <p className="text-gray-400">Beira - Moçambique</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>Feito com</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>por Batane Domingos</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                © 2024 Todos os direitos reservados
              </span>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ArrowUp size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;