import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Linkedin } from "lucide-react";

import photo from "../assets/CodeByVitor-withotu-bg.png";

import TypingText from "./ui/shadcn-io/typing-text/index";

import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export const Hero = () => {
  function handleMouseMove(e) {
    console.log(e.currentTarget.getBoundingClientRect());
  }

  return (
    <section
      id="home"
      className="relative h-[600px] mt-[-50px] 
        bg-white dark:bg-black
        [background-image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)]
        [background-size:48px_48px]
        mx-[-50px]
        [--grid-color:rgba(0,0,0,0.05)]
        dark:[--grid-color:rgba(255,255,255,0.05)]"
      onMouseMove={handleMouseMove}
    >
      <div
        className="
      pointer-events-none 
      absolute top-0 left-0 w-full h-32
      bg-gradient-to-b from-white to-transparent 
      dark:from-black dark:to-transparent
    "
      />
      <div
        className="
      pointer-events-none 
      absolute bottom-0 left-0 w-full h-32
      bg-gradient-to-t from-white to-transparent 
      dark:from-black dark:to-transparent
    "
      />
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
        <Avatar
          alt="Profile photo"
          className="bg-transparent border-1 border-black/10 dark:border-white/20 size-25 "
          name="Profile photo"
          src={photo}
        />
        <div className="inline-block max-w-screen text-center justify-center">
          <span className={title()}>Meet &nbsp;</span>
          <span className={title({ color: "violet" })}>
            Vitor Mascarenhas&nbsp;
          </span>
          <br />

          <span className={title()}>Your &nbsp;</span>
          {/* <span className={title({ color: "violet" })}>Full-Stack &nbsp;</span> */}
          <TypingText
            className={title({ color: "violet" })}
            cursorCharacter="|"
            pauseDuration={1500}
            showCursor={true}
            text={["Full-Stack", "Backend", "Frontend"]}
            // textColors={["violet"]}
            typingSpeed={75}
            variableSpeed={{ min: 50, max: 120 }}
          />
          <br />
          <span className={title()}> Software Engineer</span>
          <div className={subtitle({ class: "mt-4" })}>
            Building beautiful responsive frontends and reliable scalable
            backends!
          </div>
        </div>

        <div className="flex gap-3 ">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.linkedin}
          >
            <Linkedin size={14} />
            Linkedin
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};
