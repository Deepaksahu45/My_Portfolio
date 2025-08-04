// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.jpg';
import upto from './assets/company_logo/uptoskill.jpg'

// Education Section Logo's
import baitlogo from './assets/education_logo/bait_logo.jpg';
import polylogo from './assets/education_logo/poly_logo.jpg';
import oxfLogo from './assets/education_logo/oxford_logo.jpg'

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import currency from './assets/work_logo/Currency.png'
import noteslogo from './assets/work_logo/noteapp.png'
import weather from './assets/work_logo/WeatherApp.png'
import imagesearchLogo from './assets/work_logo/image_search.png';
import intellichat from './assets/work_logo/chat.png'
import ecommerce from './assets/work_logo/e-commerce.png'



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
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
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
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
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
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [

  {
    id: 1,
    img: upto,
    role: "Fullstack Devp Intern",
    company: "UptoSkills",
    date: "Jul 2025 - Oct 2025",
    desc: "Developed full stack web features using React, Tailwind CSS, Node.js, and MongoDB. Responsibilities included dynamic UI creation, REST API integration, database operations, performance optimization, and collaborative version control using GitHub.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Tailwind css",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git&Github",
      "API",
    ],
  },

];

export const education = [
  {
    id: 0,
    img: baitlogo,
    school: "Bhagwan Arihant Institute of Technology, Surat",
    date: "Sept 2023 - July 2026",
    grade: "8.14 CGPA",
    desc: "Completed my B.Tech in Computer Engineering from Bhagwan Arihant Institute of Technology, Surat, where I expanded my knowledge in advanced programming, software engineering, and system design while working on multiple technical projects and team-based assignments",
    degree: "Bachelor of Technology - BTECh (Computer Engineering)",
  },
  {
    id: 1,
    img: polylogo,
    school: "Bhagwan Mahavir Polytecnic, Surat",
    date: "Sept 2020 - Aug 2023",
    grade: "7.33 CGPA",
    desc: "Completed my Diploma in Computer Engineering from Bhagwan Mahavir Polytechnic, Surat, where I studied core subjects like Programming, Networking, and Database Systems. This experience helped me build a strong technical base and enhanced my practical skills through lab work and real-world projects.",
    degree: "Diploma in (Computer Engineering)",
  },
  {
    id: 2,
    img: oxfLogo,
    school: "Oxford English Higher Secondary School, Surat",
    date: "Apr 2019 - March 2020",
    grade: "68%",
    desc: "Completed Class 10 from Oxford English Higher Secondary School, Surat under the GSEB board, gaining a solid foundation in Science and Computer.",
    degree: "GSEB(X), Science with Computer",
  },
];

export const projects = [
  {
    id: 0,
    title: "Intellichat Ai",
    description:
      "Intellichat AI is a responsive React-based chatbot application that answers user queries using AI. It features recent search history, dynamic conversation display, and an intuitive interface, delivering a seamless and engaging user experience.",
    image: intellichat,
    tags: ["React JS", "Gemini API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deepaksahu45/Intellichat-Ai.git",
    webapp: "https://intellichat-ai-sigma.vercel.app",
  },
  {
    id: 1,
    title: "ElectroShop e-commerce",
    description:
      "ElectroShop is a responsive React-based e-commerce website offering a wide range of electronics with secure payments, worldwide shipping, smooth user experience, product filtering, and persistent shopping cart functionality",
    image: ecommerce,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deepaksahu45/Electroshop-e-commerce.git",
    webapp: "https://electroshop-e-commerce.vercel.app",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deepaksahu45/Movie-app.git",
    webapp: "https://movie-app-eta-sooty.vercel.app",
  },
  {
    id: 3,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Deepaksahu45/github-search.git",
    webapp: "https://github-search-xi-ten.vercel.app",
  },
  {
    id: 4,
    title: "Currency-Converter",
    description:
      "A React-based web application that allows users to convert currencies in real-time using live exchange rates. The clean interface and quick results make it a handy tool for travelers, traders, and anyone dealing with multiple currencies.",
    image: currency,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Deepaksahu45/CurrencyConverter.git",
    webapp: "https://currency-converter-seven-rosy.vercel.app",
  },
  {
    id: 5,
    title: "NotesApp with Firebase",
    description:
      "A React-based Notes App integrated with Firebase for real-time data storage and retrieval. Users can create, edit, and delete notes securely, with changes instantly saved to the cloud — perfect for quick personal note-taking on any device.",
    image: noteslogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/Deepaksahu45/NotesApp.git",
    webapp: "https://notes-app-zeta-lac.vercel.app",
  },


];  