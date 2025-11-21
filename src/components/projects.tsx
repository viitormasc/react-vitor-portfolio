import { ReactNode } from "react";
import {
  SiCaddy,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import React from "react";

import sassStarterKit from "../assets/print2.png";
import codetotext from "../assets/codetotext.png";

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
      "A productivity app designed to help you hit your goals! It features time and goal tracking, downloadable dashboards to visualize your study habits, and support from Foxy AI to keep you motivated with helpful insights — all aimed at helping you stay consistent and achieve your objectives.",
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
      <SiCaddy color="#3fa14a" />,
    ],
  },

  {
    title: "Open source SaaS starter Kit",
    description:
      "A MERN-stack SaaS starter kit featuring full authentication (Google and local), password recovery, email confirmation, Stripe payments, user management, and a polished UI with dark/light mode — everything you need to kickstart your next subscription-based SaaS app in no time!",
    image: sassStarterKit,
    // liveUrl: "https://studytimerapp.com",
    githubUrl:
      "https://github.com/viitormasc/SaaS-Subscription-Auth-Starter-Kit",
    techIcons: [
      <SiReact color="#61dafb" />,
      <SiTailwindcss color="#38bdf8" />,
      <SiTypescript color="#3178c6" />,
      <SiNodedotjs color="#5fa04e" />,
      <SiMongodb color="#4db33d" />,
      <SiExpress color="white" />,
      <SiStripe color="#635bff" />,
      <SiDocker color="#2496ed" />,
      <SiCaddy color="#3fa14a" />,
    ],
  },

  {
    title: "Code To Text AI",
    description:
      "A command-line application that helps developers condense code from the same directory into a single text file, making it easier for LLMs to process and understand the codebase, provide more accurate answers, and gain more context on small projects — all without the high cost of using API calls to read your files multiple times.",
    image: codetotext,
    githubUrl: "https://github.com/viitormasc/code-to-text-forAi",
    techIcons: [
      <SiTypescript color="#3178c6" />,
      <SiNodedotjs color="#5fa04e" />,
    ],
  },
];

export default projects;
