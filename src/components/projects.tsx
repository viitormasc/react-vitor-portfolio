import { ReactNode } from "react";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import StudyTimerPhoto from "@/assets/Study Timer App PC Web Google Ad Landscape.png";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  techIcons: ReactNode[];
}

const projects: ProjectItem[] = [
  {
    title: "Study Timer App",
    description:
      "A productivity app to help you hit your goals! With time and goals tracking, nice downloadable dashboards to visualize your study habbits and help of the Foxy AI to keep you motivated and with nice insights about your habbits and make you hit your goals!",
    image: StudyTimerPhoto,
    liveUrl: "https://studytimerapp.com",
    githubUrl: "https://github.com/viitormasc/study-timer-dockerized-app",
    techIcons: [
      <SiReact color="#61dafb" />,
      <SiTailwindcss color="#38bdf8" />,
      <SiTypescript color="#3178c6" />,
      <SiNodedotjs color="#5fa04e" />,
      <SiMongodb color="#4db33d" />,
      <SiExpress color="white" />,
      <SiStripe color="#635bff" />,
      <SiDocker color="#2496ed" />,
    ],
  },

  {
    title: "Open source SaaS starter Kit",
    description:
      "A MERN stack SaaS starter kit with full authentication strategies (google and local, password recovery, email confirmation and more), payments with stripe, user management, and a nice UI with dark/light mode to help you start your next subscription based SaaS app in no time!",
    image: "",
    liveUrl: "https://studytimerapp.com",
    githubUrl: "https://github.com/yourrepo",
    techIcons: [
      <SiReact color="#61dafb" />,
      <SiTailwindcss color="#38bdf8" />,
      <SiTypescript color="#3178c6" />,
      <SiNodedotjs color="#5fa04e" />,
      <SiMongodb color="#4db33d" />,
      <SiExpress color="white" />,
      <SiStripe color="#635bff" />,
      <SiDocker color="#2496ed" />,
    ],
  },

  {
    title: "Code To Text AI",
    description:
      "A command line applicatio that help developers condense code on the same directorie on a sinle text file making it easier for LLMs to process and understand the codebase, give more accurate answers and get more context on small projects without the high cost of using API calls to read your files multiple times",
    image: "/images/dashboard.png",
    githubUrl: "https://github.com/viitormasc/code-to-text-forAi",
    techIcons: [
      <SiNextdotjs color="white" />,
      <SiReact color="#61dafb" />,
      <SiTailwindcss color="#38bdf8" />,
      <SiTypescript color="#3178c6" />,
    ],
  },
];

export default projects;
