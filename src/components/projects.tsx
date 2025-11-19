import StudyTimerPhoto from '@/assets/Study Timer App PC Web Google Ad Landscape.png';
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
    liveUrl: "https://yourliveapp.com",
    githubUrl: "https://github.com/yourrepo",
    techIcons: [
      <SiReact color="#61dafb" />,
      <SiTailwindcss color="#38bdf8" />,
      <SiTypescript color="#3178c6" />,
      <SiNodedotjs color="#5fa04e" />,
      <SiMongodb color="#4db33d" />,
      <SiExpress color='white' />,
      <SiDocker color="#2496ed" />
    ],
  },

  {
    title: "E-commerce Payments",
    description:
      "A lightweight Stripe-powered checkout service with secure session creation and webhook handling.",
    image: '',
    liveUrl: "https://studytimerapp.com",
    githubUrl: "https://github.com/yourrepo",
    techIcons: [
      <SiTypescript color="#3178c6" />,
      <SiStripe color="#635bff" />,
      <SiNodedotjs color="#5fa04e" />,
      <SiDocker color="#2496ed" />,
    ],
  },

  {
    title: "Dashboard Analytics",
    description:
      "A fast performance dashboard with server-side rendering, charts, and responsive UI.",
    image: "/images/dashboard.png",
    liveUrl: "https://yourdashboard.com",
    techIcons: [
      <SiNextdotjs color="white" />,
      <SiReact color="#61dafb" />,
      <SiTailwindcss color="#38bdf8" />,
      <SiTypescript color="#3178c6" />,
    ],
  },
];

export default projects;
