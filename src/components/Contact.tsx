import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'batane123.',              // Seu Service ID
        'template_sbnlmb4',        // Seu Template ID
        {
          name: form.name,         // corrigido para {{name}}
          email: form.email,       // corrigido para {{email}}
          title: form.subject,
          message: form.message
        },
        'XUq7pNz5ezIu1Oe-G'        // Sua Public Key
      );

      setSubmitStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'batanezitodomingos@gmail.com',
      link: 'mailto:batanezitodomingos@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+258 865140228',
      link: 'tel:+258865140228'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Beira-Manga, Moçambique',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu próximo projeto!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>

              {submitStatus === 'success' && (
                <div className="flex items-center p-4 mb-6 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <CheckCircle size={20} className="text-green-400 mr-3" />
                  <span className="text-green-300">Mensagem enviada com sucesso!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center p-4 mb-6 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <AlertCircle size={20} className="text-red-400 mr-3" />
                  <span className="text-red-300">Erro ao enviar mensagem. Tente novamente.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.title}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Pronto para começar?</h3>
                <p className="text-purple-100 mb-6">
                  Vamos transformar sua visão em uma solução digital excepcional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:batanezitodomingos@gmail.com"
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Email Direto
                  </a>
                  <a
                    href="tel:+258865140228"
                    className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30"
                  >
                    Ligar Agora
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Disponibilidade</h3>
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-400 font-medium">Disponível para novos projetos</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Respondendo emails em até 24 horas. Horário de atendimento:
                  Segunda à Domingo, das 8h às 22h .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
