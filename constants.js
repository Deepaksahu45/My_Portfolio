// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';

import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import dockerLogo from './assets/tech_logo/docker.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

import upto from './assets/company_logo/uptoskill.jpg';

// Education Section Logo's
import baitlogo from './assets/education_logo/bait_logo.jpg';
import polylogo from './assets/education_logo/poly_logo.jpg';
import oxfLogo from './assets/education_logo/oxford_logo.jpg';

// Project Section Logo's
import finance from './assets/work_logo/finance.png';

// import noteslogo from './assets/work_logo/noteapp.png';

import intellichat from './assets/work_logo/chat.png';
import ecommerce from './assets/work_logo/e-commerce.png';
import bagcart from './assets/work_logo/bagcart.png';
import Customer from './assets/work_logo/Customer.png';
import Interview from './assets/work_logo/Interview.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Figma', logo: figmaLogo },
      { name: 'Docker', logo: dockerLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: upto,
    role: 'Fullstack Devp Intern',
    company: 'UptoSkills',
    date: 'Jul 2025 - Oct 2025',
    desc: 'Developed full stack web features using React, Tailwind CSS, Node.js, and MongoDB. Responsibilities included dynamic UI creation, REST API integration, database operations, performance optimization, and collaborative version control using GitHub.',
    skills: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Tailwind css',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Git&Github',
      'API',
    ],
  },
];

export const education = [
  {
    id: 0,
    img: baitlogo,
    school: 'Bhagwan Arihant Institute of Technology, Surat',
    date: 'Sept 2023 - July 2026',
    grade: '8.14 CGPA',
    desc: 'Completed my B.Tech in Computer Engineering from Bhagwan Arihant Institute of Technology, Surat, where I expanded my knowledge in advanced programming, software engineering, and system design while working on multiple technical projects and team-based assignments',
    degree: 'Bachelor of Technology - BTECh (Computer Engineering)',
  },
  {
    id: 1,
    img: polylogo,
    school: 'Bhagwan Mahavir Polytecnic, Surat',
    date: 'Sept 2020 - Aug 2023',
    grade: '7.33 CGPA',
    desc: 'Completed my Diploma in Computer Engineering from Bhagwan Mahavir Polytechnic, Surat, where I studied core subjects like Programming, Networking, and Database Systems. This experience helped me build a strong technical base and enhanced my practical skills through lab work and real-world projects.',
    degree: 'Diploma in (Computer Engineering)',
  },
  {
    id: 2,
    img: oxfLogo,
    school: 'Oxford English Higher Secondary School, Surat',
    date: 'Apr 2019 - March 2020',
    grade: '68%',
    desc: 'Completed Class 10 from Oxford English Higher Secondary School, Surat under the GSEB board, gaining a solid foundation in Science and Computer.',
    degree: 'GSEB(X), Science with Computer',
  },
];

export const projects = [
  {
    id: 0,
    title: 'AptaAI - AI Interview Preparation Platform',
    description:
      'An AI-powered interview preparation platform that helps candidates prepare smarter using personalized interview strategies, resume analysis, technical and behavioral questions, skill-gap analysis, and AI-generated preparation roadmaps. It also supports AI-optimized resume generation and downloadable interview reports.',
    image: Interview,
    tags: [
      'React JS',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Gemini AI',
      'Puppeteer',
      'Tailwind CSS',
      'Vercel',
      'Render',
    ],
    github:
      'https://github.com/Deepaksahu45/Apta_ai---Ai-powered-Interview-Preparation-.git',
    webapp: 'https://apta-ai-ai-powered-interview-prepar.vercel.app/',
  },
  {
    id: 1,
    title: 'Aegis - Customer Support Ticket System',
    description:
      'A full-stack real-time customer support ticketing system that enables users to create, manage, and track support requests efficiently. It features role-based authentication, live status updates using WebSockets, and a scalable backend architecture to handle concurrent requests seamlessly.',
    image: Customer,
    tags: [
      'React JS',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Socket.io',
      'Tailwind CSS',
    ],
    github: 'https://github.com/Deepaksahu45/customer-support-ticket-system.git',
    webapp: 'https://customer-support-ticket-system-livid.vercel.app/',
  },
  {
    id: 2,
    title: 'Ai-Personal-Finance-Manager',
    description:
      'A Next.js-based web application that allows users to manage their finances effectively. It provides features like expense tracking, budget planning, and financial goal setting, all within a user-friendly interface.',
    image: finance,
    tags: [
      'Next.js',
      'React JS',
      'API',
      'JavaScript',
      'Tailwind CSS',
      'Supabase',
      'Clerk auth',
      'Prisma',
    ],
    github: 'https://github.com/Deepaksahu45/Ai-Personal-Finance-Manager.git',
    webapp: 'https://finaura-zeta.vercel.app',
  },
  {
    id: 3,
    title: 'BagCart - E-commerce Platform',
    description:
      'A full-featured e-commerce web application that supports user authentication, product browsing, cart management, and order processing. Designed with a secure backend and dynamic product handling, ensuring smooth user experience and efficient session management.',
    image: bagcart,
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'EJS', 'Tailwind CSS'],
    github: 'https://github.com/Deepaksahu45/E-Commerce-Bag-shop.git',
    webapp: 'https://e-commerce-bag-shop.onrender.com/',
  },
  {
    id: 4,
    title: 'IntelliChat - AI-Powered Chat Application',
    description:
      'IntelliChat is a cutting-edge AI-powered chat application that provides seamless communication experiences. It leverages advanced natural language processing to deliver intelligent responses and enhance user engagement.',
    image: intellichat,
    tags: ['React JS', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Deepaksahu45/Intellichat-Ai.git',
    webapp: 'https://intellichat-ai-sigma.vercel.app/',
  },
  {
    id: 5,
    title: 'ElectroShop e-commerce',
    description:
      'ElectroShop is a responsive React-based e-commerce website offering a wide range of electronics with secure payments, worldwide shipping, smooth user experience, product filtering, and persistent shopping cart functionality',
    image: ecommerce,
    tags: ['React JS', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Deepaksahu45/Electroshop-e-commerce.git',
    webapp: 'https://electroshop-e-commerce.vercel.app',
  },
];
