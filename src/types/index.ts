export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'tools'| 'languages';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}