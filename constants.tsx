
import { Project, Testimonial, Skill, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Boarding House Management Website",
    description: "A comprehensive management platform featuring automated billing, customizable tenant add-ons, and an integrated reporting system.",
    category: 'Web',
    imageUrl: "https://picsum.photos/seed/boarding/800/600"
  },
  {
    id: 2,
    title: "Face Similarity Deep Learning",
    description: "Implementing advanced Deep Learning models to perform real-time facial similarity analysis and attribute detection.",
    category: 'AI & Data',
    imageUrl: "https://picsum.photos/seed/face/800/600"
  },
  {
    id: 3,
    title: "BankIT: Transaction Gateway",
    description: "A central banking and e-commerce ecosystem featuring zero-fee transactions powered by MQTT-based integration.",
    category: 'Web',
    imageUrl: "https://picsum.photos/seed/bank/800/600"
  },
  {
    id: 4,
    title: "FloraMate: AI Plant Assistant",
    description: "Native Android application (Kotlin/MVVM) identifying plant species and monitoring growth via sensors.",
    category: 'Mobile',
    imageUrl: "https://picsum.photos/seed/flora/800/600"
  },
  {
    id: 5,
    title: "Kimia Farma Analytics",
    description: "End-to-end data analytics dashboard using BigQuery and Looker Studio to visualize performance trends.",
    category: 'AI & Data',
    imageUrl: "https://picsum.photos/seed/analytics/800/600"
  },
  {
    id: 6,
    title: "Cyber Security Certification",
    description: "Internal Audit ISO/IEC 27001:2022 and ISO/IEC 27002:2022 certification project.",
    category: 'Security',
    imageUrl: "https://picsum.photos/seed/security/800/600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Acintya Edria Sudarsono", text: "Dian possesses exceptional analytical skills in AI integration. Her solutions are not only functional but also highly focused on security and efficiency." },
  { name: "Tsaldia Hukma Cita", text: "Extremely helpful in managing web development. Dian’s communication is clear, and she always provides structured updates at every stage of the progress." },
  { name: "Rafika Az Zahra Kusumastuti", text: "A highly reliable teammate. Dian is able to translate user needs into technical features that are very clean and efficient." },
  { name: "Callista Meyra Azizah", text: "Dian’s dedication to code quality is impressive. She always ensures that every data integration runs smoothly without any security loopholes." },
  { name: "Nisrina Atiqah Dwiputri", text: "Working with Dian is a pleasure. She is a fast-responding problem solver, especially when facing complex technical challenges." },
  { name: "Fadlillah Cantika Sari", text: "In addition to her technical prowess, Dian has a great eye for detail. Her work always looks professional and is exceptionally user-friendly." },
  { name: "Agnes Zenobia Griselda", text: "Dian brings fresh perspectives to every project discussion. Her expertise in AI truly adds significant value to the applications we build." },
  { name: "Muhammad Iqbal", text: "Dian is a highly disciplined Software Engineer. Every target is met with a quality standard that consistently exceeds the team's expectations." },
  { name: "Riskiyatul Nur Oktarani", text: "Highly impressed with Dian's thoroughness in conducting security assessments. She made our system much more robust than it was before." },
  { name: "Aswalia Novitriasari", text: "A very supportive collaborator. Dian is generous with her technical knowledge and is always ready to assist teammates in need." },
  { name: "Govasye Rafael Haumahu", text: "Dian’s combination of AI expertise and software engineering is rare. She is an invaluable asset for any innovative project." }
];

export const SKILLS: Skill[] = [
  { name: "Kotlin", icon: "📱" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "JS" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "SQL", icon: "📊" },
  { name: "WebDev", icon: "🌐" }
];

export const SERVICES: Service[] = [
  { id: "01", title: "Web & Mobile Development", description: "Building responsive web systems and mobile applications. Focused on delivering functional, user-centered platforms with clean performance." },
  { id: "02", title: "AI & Data Integration", description: "Integrating machine learning and data analytics into digital products. Specializing in computer vision features like face similarity analysis." },
  { id: "03", title: "Security Assessment", description: "Performing vulnerability assessments and penetration testing. Analyzing security flaws and providing technical reports to strengthen system protection." }
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/studianggra",
  email: "mailto:dianggraaeni@gmail.com",
  medium: "https://medium.com/@dianggraaeni",
  linkedin: "https://www.linkedin.com/in/studianggra/",
  github: "https://github.com/dianggraaeni",
  cv: "https://drive.google.com/drive/folders/1STAkTd_giFG1lJVDltGJiqm9neg_Hbmh?usp=sharing"
};
