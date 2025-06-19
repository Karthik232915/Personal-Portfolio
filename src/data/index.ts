import { Project, Skill, Education, Certification, Experience, Achievement, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'HTML', level: 90, category: 'technical' },
  { name: 'CSS', level: 85, category: 'technical' },
  { name: 'JavaScript', level: 80, category: 'technical' },
  { name: 'Python', level: 90, category: 'technical' },
  { name: 'C/C++', level: 75, category: 'technical' },
  { name: 'UI/UX Design', level: 85, category: 'design' },
  { name: 'Adobe Illustrator', level: 80, category: 'design' },
  { name: 'Adobe Photoshop', level: 75, category: 'design' },
  { name: 'Adobe XD', level: 70, category: 'design' },
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'Firebase', level: 70, category: 'technical' },
  { name: 'Microsoft Power BI', level: 75, category: 'technical' },
  { name: 'Web Development', level: 85, category: 'soft' },
  { name: 'Time Management', level: 80, category: 'soft' },
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description: 'Created a personal portfolio website to showcase skills and projects using HTML, CSS, and JS.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    tags: ['HTML', 'CSS', 'JavaScript','React', 'Web Design'],
    github: 'https://github.com/karthik232915',
  },
  {
    id: 'water-quality',
    title: 'Water Quality Monitoring System',
    description: 'Developed a real-time water quality monitoring system using a turbidity sensor and C++, improving data accuracy by 70%.',
    image: 'https://images.pexels.com/photos/8943269/pexels-photo-8943269.jpeg',
    tags: ['C++', 'IoT', 'Hardware','Arduino', 'Data Analysis'],
    github: 'https://github.com/karthik232915',
  },
  {
    id: 'ui-ux-portal',
    title: 'Student Portal UI/UX Redesign',
    description: 'Enhanced UI/UX design for student portal, increasing user satisfaction by 60%. Redesigned navigation and improved accessibility.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    tags: ['UI/UX', 'Figma', 'Adobe XD', 'Design'],
    link: '#',
  },
];

export const education: Education[] = [
  {
    institution: 'Sri Ramakrishna College of Arts & Science',
    degree: 'Bachelor of Information Technology',
    duration: '08/2023 - Present',
    description: 'Currently pursuing an undergraduate degree in Information Technology with focus on software development and data analysis.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2023',
    link: '#',
  },
  {
    title: 'Oracle Cloud Data Management 2023 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2023',
    link: '#',
  },
];

export const courses: Certification[] = [
  {
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    date: '2023',
  },
  {
    title: 'Association Analysis using Python',
    issuer: 'Infosys Springboard',
    date: '2023',
  },
  {
    title: 'Exploratory Data Analysis',
    issuer: 'Infosys Springboard', 
    date: '2023',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Water Quality System',
    description: 'Developed turbidity sensor project improving data accuracy',
    metric: '70%',
  },
  {
    title: 'UI/UX Design Improvement',
    description: 'Enhanced UI/UX design for student portal, increasing user satisfaction',
    metric: '60%',
  },
  {
    title: 'Top Competition Rank',
    description: 'Achieved top ranking in an academic web development competition',
    metric: '25%',
  },
  {
    title: 'Team Project Contribution',
    description: 'Contributed to a team project resulting in reduction in project delivery time',
    metric: '25%',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Student Developer',
    company: 'Sri Ramakrishna College of Arts & Science',
    duration: '2023 - Present',
    description: [
      'Working on web development projects using HTML, CSS, and JavaScript',
      'Designing user interfaces and enhancing user experience for various college applications',
      'Collaborating with teams to develop innovative solutions for academic projects',
    ],
  },
];

export const aboutMe = `
Information Technology professional with ongoing education in B.Sc. IT and experience in web development and data analysis, expert in Python and UI/UX design. Key achievements include the creation of a personal portfolio website using HTML, CSS, and React, and the development of a real-time water quality monitoring system using a turbidity sensor and C++.

Seeking a Developer position, where my web development and data analysis skills can support your mission. Demonstrated excellence in competitions underscores my dedication and innovative approach. Certified in Oracle Cloud Infrastructure and Data Management, showcasing commitment to foundational and advanced technological proficiencies.
`;

export const contactInfo = {
  email: 'karthik231529@gmail.com',
  phone: '9843441214',
  location: 'Site no:6 Sri Sai Nivas Singai Nagar Singanallur - 05',
  linkedin: 'https://www.linkedin.com/in/karthik2329',
  github: 'https://github.com/karthik2329',
};
