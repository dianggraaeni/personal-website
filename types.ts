
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Web' | 'Mobile' | 'AI & Data' | 'Security';
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}
