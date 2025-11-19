import { ReactNode } from "react";
import {
  SiCaddy,
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface TechItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const technologies: TechItem[] = [
  {
    icon: <SiTypescript color="#3178c6" />,
    title: "TypeScript",
    subtitle: "Typed JavaScript",
  },
  {
    icon: <SiJavascript color="#f7df1e" />,
    title: "JavaScript",
    subtitle: "Programming language",
  },
  { icon: <SiReact color="#61dafb" />, title: "React", subtitle: "UI library" },
  {
    icon: <SiNextdotjs color="white" />,
    title: "NextJS",
    subtitle: "React framework",
  },

  {
    icon: <SiTailwindcss color="#38bdf8" />,
    title: "Tailwind",
    subtitle: "CSS framework",
  },
  {
    icon: <SiGit color="#f05033" />,
    title: "Git",
    subtitle: "Version control",
  },
  {
    icon: <SiNodedotjs color="#5fa04e" />,
    title: "NodeJS",
    subtitle: "Backend runtime",
  },

  {
    icon: <SiMongodb color="#4db33d" />,
    title: "MongoDB",
    subtitle: "NoSQL database",
  },
  {
    icon: <SiPostgresql color="#336791" />,
    title: "PostgreSQL",
    subtitle: "SQL database",
  },
  {
    icon: <SiMariadb color="#003545" />,
    title: "MariaDB",
    subtitle: "SQL database",
  },

  {
    icon: <SiStripe color="#635bff" />,
    title: "Stripe",
    subtitle: "Payments API",
  },
  {
    icon: <SiDocker color="#2496ed" />,
    title: "Docker",
    subtitle: "Containers",
  },
  {
    icon: <SiCaddy color="#1f8dd6" />,
    title: "Caddy",
    subtitle: "Web server / Reverse proxy",
  },
  {
    icon: <SiNginx color="#009639" />,
    title: "Nginx",
    subtitle: "Reverse proxy",
  },
  {
    icon: <SiExpress className="" color="white" />,
    title: "Express",
    subtitle: "Web framework",
  },
];

export default technologies;
