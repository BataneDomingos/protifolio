import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 70, category: 'frontend' },
    { name: 'Next.js', level: 55, category: 'frontend' },
    { name: 'Tailwind CSS', level: 65, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Python', level: 95, category: 'backend' },
    { name: 'PostgreSQL', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'Express.js', level: 90, category: 'backend' },
    { name: 'MySql', level: 97, category: 'backend' },

    // Mobile
    { name: 'React Native', level: 90, category: 'mobile' },
    { name: 'Flutter', level: 50, category: 'mobile' },
    { name: 'iOS Development', level: 75, category: 'mobile' },
    { name: 'Android Development', level: 80, category: 'mobile' },

    // Tools
    { name: 'Git', level: 50, category: 'tools' },
    { name: 'Docker', level: 45, category: 'tools' },
    { name: 'REST APIs', level: 60, category: 'tools' },
    { name: 'Firebase', level: 75, category: 'tools' },
    { name: 'Linux', level: 60, category: 'tools' },

    // Languages
    { name: 'Português', level: 95, category: 'languages' },
    { name: 'Inglês', level: 60, category: 'languages' },
  ];

  const categories = {
    frontend: { title: 'Frontend', color: 'from-blue-500 to-purple-500' },
    backend: { title: 'Backend', color: 'from-green-500 to-blue-500' },
    mobile: { title: 'Mobile', color: 'from-purple-500 to-pink-500' },
    tools: { title: 'Tools & DevOps', color: 'from-orange-500 to-red-500' },
    languages: { title: 'Idiomas', color: 'from-yellow-400 to-red-400' },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Minhas habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções digitais excepcionais
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="flex-grow flex-shrink basis-[280px] max-w-[320px] space-y-6"
              style={{ minWidth: '220px' }}
            >
              <div className="text-center">
                <h3
                  className={`text-xl font-bold bg-gradient-to-r ${categories[category as keyof typeof categories].color} bg-clip-text text-transparent mb-4`}
                >
                  {categories[category as keyof typeof categories].title}
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${categories[skill.category as keyof typeof categories].color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
