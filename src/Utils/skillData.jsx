import {
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaReact,
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

export const skills = [
  {
    name: "React",
    category: "frontend",
    experience: "Primary frontend framework for production-grade apps",
    usedIn: [
      "Business Website",
      "Real Estate Platform",
      "Online Learning Platform",
      "E-Commerce Website",
      "Portfolio Website",
      "Paste App",
    ],
    icon: <FaReact className="text-sky-400" />,
  },

  {
    name: "JavaScript",
    category: "language",
    experience: "Core language for frontend logic and UI interactions",
    usedIn: [
      "Weather App",
      "Notes App",
      "Clock App",
      "Calculator",
      "LeetCode Metrics",
      "Text to Speech Tool",
    ],
  },

  {
    name: "Node.js",
    category: "backend",
    experience: "Server-side runtime for APIs and backend services",
    usedIn: ["E-Commerce Website"],
    icon: <FaNodeJs className="text-green-500" />,
  },

  {
    name: "Tailwind CSS",
    category: "styling",
    experience: "Utility-first styling system for scalable UI design",
    usedIn: [
      "Business Website",
      "Real Estate Platform",
      "Online Learning Platform",
      "E-Commerce Website",
      "Portfolio Website",
      "Paste App",
    ],
  },

  {
    name: "Express.js",
    category: "backend",
    experience: "Backend framework for building RESTful APIs",
    usedIn: ["E-Commerce Website"],
  },

  {
    name: "CSS",
    category: "styling",
    experience: "Custom layouts, animations, and responsive design",
    usedIn: [
      "Weather App",
      "Notes App",
      "Clock App",
      "Calculator",
      "LeetCode Metrics",
      "Text to Speech Tool",
    ],
    icon: <FaCss3 className="text-pink-500" />,
  },

  {
    name: "Redux",
    category: "state",
    experience: "Global state management for complex UI flows",
    usedIn: [
      "Business Website",
      "Real Estate Platform",
      "Online Learning Platform",
      "E-Commerce Website",
      "Portfolio Website",
      "Paste App",
    ],
  },

  {
    name: "SQL",
    category: "database",
    experience: "Relational database concepts and query writing",
    usedIn: ["Academic & Practice Projects"],
  },

  {
    name: "HTML",
    category: "language",
    experience: "Semantic markup and accessibility-focused structure",
    usedIn: [
      "Weather App",
      "Notes App",
      "Clock App",
      "Calculator",
      "LeetCode Metrics",
      "Text to Speech Tool",
    ],
    icon: <FaHtml5 className="text-orange-500" />,
  },

  {
    name: "Java",
    category: "language",
    experience: "Core Java concepts and object-oriented programming",
    usedIn: ["Core Java Practice"],
    icon: <FaJava className="text-orange-400" />,
  },

  {
    name: "MongoDB",
    category: "database",
    experience: "NoSQL database for modern web applications",
    usedIn: ["E-Commerce Website"],
  },

  {
    name: "C",
    category: "language",
    experience: "Data Structures and Algorithms foundation",
    usedIn: ["DSA Practice"],
  },
];
export const categories = [
  { id: "all", name: "All", icon: <FaLayerGroup /> },
  { id: "frontend", name: "Frontend", icon: <FaCode /> },
  { id: "backend", name: "Backend", icon: <FaRocket /> },
  { id: "language", name: "Languages", icon: <FaLayerGroup /> },
  { id: "styling", name: "Styling", icon: <FaLayerGroup /> },
  { id: "database", name: "Databases", icon: <FaLayerGroup /> },
  { id: "state", name: "State Management", icon: <FaLayerGroup /> },
];
