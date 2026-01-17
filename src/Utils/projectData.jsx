import SkillSphare from '../assets/SkillSphare.png';
import myPortfolio from '../assets/myPortfolio.png';
import GrowBussiness from '../assets/GrowBussiness.png';
import RealState from '../assets/RealState.png';
import PasteApp from '../assets/PasteApp.png';
import ECommerce from '../assets/ECommerce.png';
import WeatherApp from '../assets/WeatherApp.png';
import TextToSpeech from '../assets/TextToSpeech.png';
import RazorpayClon from '../assets/RazorpayClon.png';
import ClockX from '../assets/ClockX.png';
import NotesApp from '../assets/NotesApp.png';
import ToDoApp from '../assets/ToDoApp.png';
import MyCalCulator from '../assets/MyCalCulator.png';
import MyStudyPoint from '../assets/MyStudyPoint.png';


import { FaCode, FaServer, FaMobile, FaPalette } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: "SkillSphere – EdTech Learning Platform",
    description:
      "A premium React + Tailwind-based EdTech platform featuring course filtering, blog system, route-based detail pages, and Framer Motion animations. Designed for scalability and learning engagement.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/SkillSphare.git",
    live: "https://skillsphare-tech.netlify.app/",
    image: SkillSphare,
  },
  {
    id: 2,
    title: "Advanced Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, achievements, and contact form. Features Framer Motion animations, glassmorphism UI, and modern design principles.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/advanced-portfolio", // update if needed
    live: "https://myportfolio-pritam.netlify.app/", // update if deployed
    image: myPortfolio,
  },
  {
    id: 3,
    title: "E-Commerce-WebSite",
    description:
      "A clean and responsive E-Commerce platform with tag-based filtering, dynamic detail pages. You Can Sell your Product online two Routes one admin another for user integrated payment method",
    technologies: ["React", "Tailwind CSS", "NodeJs", "ExpressJs", "MongoDB","Redux","React-Icons"],
    category: "fullstack",
    github: "https://github.com/pritam018-sin/OnlineStore.git", // update if available
    live: "https://ecartwallah.netlify.app/", // update if deployed
    image: ECommerce,
  },
  {
    id: 4,
    title: "Bussiness Management-website",
    description:
      "It combines a type-driven headline, interactive call-to-action input, and a professional developer image — all enclosed in a responsive, glassmorphic aesthetic. Cursor interactions, animated icons like SiBoosty, and a compelling color palette enhance the UI, ensuring it feels premium, forward-thinking, and conversion-focused.",
    technologies: ["React", "Tailwind","Framer Motion"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/GrowBusiness.git", // update if available
    live: "https://grow-business.netlify.app/", // update if deployed
    image: GrowBussiness,
  },
  {
    id: 5,
    title: "Real State bussiness website",
    description:
      "A comprehensive real estate platform featuring property listings, detailed views, and a user-friendly interface. Built with React and Tailwind CSS, it includes smooth animations using Framer Motion for an engaging user experience.",
    technologies: ["React", "Tailwind CSS","Framer-Motion"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/real-estate-portfolio.git", // update if available
    live: "https://real-estate-portfolio.netlify.app", // update if deployed
    image: RealState,
  },
  {
    id: 6,
    title: "PasteApp-MiniWebsite",
    description:
      "You can create a paste and update a paste and delete a paste. It is a simple website where you can create a paste and update a paste and delete a paste. and also you can share your paste",
    technologies: ["React", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/PasteApp.git", // update if available
    live: "https://mini-webapp-paste.netlify.app/", // update if deployed
    image: PasteApp,
  },
  {
    id: 7,
    title: "WeatherApp-MiniWebsite",
    description:
      "A simple weather application that provides weather updates and forecasts. Built with React and Tailwind CSS, it features a clean UI and smooth animations.",
    technologies: ["JavaScript", "CSS", "HTML", "OpenWeatherMap API"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/WeatherApp.git", // update if available
    live: "https://mini-webapp-weather.netlify.app/", // update if deployed
    image: WeatherApp,
  },
  {
    id: 8,
    title: "TextToSpeech-MiniWebsite",
    description:
      "A simple text-to-speech application that converts written text into spoken words. Built with JavaScript, HTML and CSS, it features a clean UI and smooth animations.",
    technologies: ["JavaScript", "CSS", "HTML",],
    category: "frontend",
    github: "https://github.com/pritam018-sin/TextToSpeech.git", // update if available
    live: "https://texttospeechminiapp-pritam.netlify.app/", // update if deployed
    image: TextToSpeech,
  },
  {
    id: 9,
    title: "RazorpayClon-Frontend",
    description:" Its Clone page-Frontend of website razorpay which i entirlly build it by Tailwind CSS ",
    technologies: ["Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/razorpay-frontend-clone", // update if available
    live: "https://razorpay-clone-frontend-web.netlify.app/", // update if deployed
    image: RazorpayClon,
  },
  {
    id: 10,
    title: "Mini-CLock-website",
    description:" A simple clock website that displays the current time and date. Built with HTML, CSS, and JavaScript, it features a clean UI and smooth animations.",
    technologies: ["CSS","HTML","JavaScript"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/CloCkX-miniClockWebSite.git", // update if available
    live: "https://mini-clockx.netlify.app/", // update if deployed
    image: ClockX,
  },
  {
    id: 11,
    title: "Mini-NotesApp-Website",
    description:" A simple Notes website that allows users to create, update, and delete notes. Built with HTML, CSS, and JavaScript, it features a clean UI and smooth animations.",
    technologies: ["CSS","HTML","JavaScript"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/NotesApp.git", // update if available
    live: "https://notesapp-mini-web.netlify.app/", // update if deployed
    image: NotesApp,
  },
  {
    id: 12,
    title: "Mini-ToDoApp-Website",
    description:" A simple Todo creater website that allows users to create, update, and delete Todo Lists and user and filter it out also. Built with HTML, CSS, and JavaScript, it features a clean UI and smooth animations.",
    technologies: ["CSS","HTML","JavaScript"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/ToDoApp.git", // update if available
    live: "https://mini-todo-web-app.netlify.app/", // update if deployed
    image: ToDoApp,
  },
  {
    id: 13,
    title: "Mini-Calculator-Website",
    description:" A simple calculator website that allows users to perform basic arithmetic operations. Built with HTML, CSS, and JavaScript, it features a clean UI and smooth animations.",
    technologies: ["CSS","HTML","JavaScript"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/MyCalculaterApp.git", // update if available
    live: "https://my-calculator-min-web-app.netlify.app/", // update if deployed
    image: MyCalCulator,
  },
  {
    id: 14,
    title: "MyStudyPoint-mini-Frontend-webApp",
    description:" A simple study point website that allows users to access various study materials. Built with HTML and CSS it features a clean UI and smooth animations.",
    technologies: ["CSS","HTML"],
    category: "frontend",
    github: "https://github.com/pritam018-sin/MyStudyPoint-mini-Frontend-webApp.git", // update if available
    live: "https://mystudypoint-mini-frontend-webapp.netlify.app/", // update if deployed
    image: MyStudyPoint,
  },
];

export const categories = [
  { id: "all", name: "All Projects", icon: <FaCode /> },
  { id: "frontend", name: "Frontend", icon: <FaCode /> },
  { id: "fullstack", name: "Full Stack", icon: <FaServer /> },
  { id: "mobile", name: "Mobile", icon: <FaMobile /> },
  { id: "ai", name: "AI/ML", icon: <FaServer /> },
  { id: "blockchain", name: "Blockchain", icon: <FaPalette /> },
];
