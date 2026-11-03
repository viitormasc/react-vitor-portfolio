import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

import photo from "../assets/perfilvitor.png";

import "./funny.css";
import {
  alerts,
  asSeenOn,
  marqueeText,
  pokeMessages,
  pricingTiers,
  projectJokes,
  reviews,
  rotatingTitles,
  techJokes,
  wrongFacts,
} from "./content";
import { CursorTrail } from "./CursorTrail";
import { MusicPlayer } from "./Music";
import { CookieBanner, FunnyPopups } from "./Popups";
import { ResumeDownload } from "./ResumeDownload";
import { RetroWindow } from "./RetroWindow";
import { VitorBot } from "./VitorBot";
import { AlertBanner, RedArrow, WrongFact } from "./WrongFact";

import projects from "@/components/projects";
import technologies from "@/components/Technologies";
import { siteConfig } from "@/config/site";

const mail = (subject: string) =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;

function Section({
  id,
  title,
  className,
  children,
}: {
  id?: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={clsx("relative px-4 py-16", className)} id={id}>
      <div className="relative mx-auto max-w-6xl">
        <h2 className="fn-impact fn-headline mb-10 text-center text-5xl md:text-6xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function RotatingTitle() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setI((v) => (v + 1) % rotatingTitles.length),
      1600,
    );

    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      key={i}
      className="fn-pop inline-block bg-[var(--fn-forest)] px-2 text-[var(--fn-lime)]"
    >
      {rotatingTitles[i]}
    </span>
  );
}

function VisitorCounter() {
  const [n, setN] = useState(() => 4821 + Math.floor(Math.random() * 500));

  useEffect(() => {
    const id = window.setInterval(
      () => setN((v) => v + 1 + Math.floor(Math.random() * 3)),
      2500,
    );

    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="fn-times text-sm">
      You are visiter #{" "}
      <span className="fn-counter">{String(n).padStart(7, "0")}</span>
    </p>
  );
}

function Hero() {
  const [pokes, setPokes] = useState(0);
  const pokeText =
    pokes < pokeMessages.length
      ? pokeMessages[pokes]
      : `poked ${pokes} times. maybe just email him? 📧`;

  return (
    <section className="relative px-4 pb-16 pt-10" id="home">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="relative text-center md:text-left">
          <p className="fn-blink fn-impact text-xl text-red-600">
            ★ NEW!!! ★ NOT A SCAM ★ 100% LEGIT ★
          </p>
          <h1 className="fn-impact fn-headline mt-2 text-6xl leading-none md:text-8xl">
            HIRE VITOR!!!
          </h1>
          <WrongFact
            className="-top-16 left-[55%]"
            direction="down"
            text={wrongFacts.title}
            tilt={6}
          />
          <p className="fn-impact mt-2 text-2xl">(cheap!!!*)</p>
          <p className="mt-6 text-2xl md:text-3xl">
            Your <RotatingTitle /> Sofware Enginer**
          </p>
          <p className="fn-impact mt-4 inline-block -rotate-2 border-4 border-black bg-[var(--fn-orange)] px-3 py-1 text-xl shadow-[4px_4px_0_#111] md:text-2xl">
            🐛 Senior Bug Writer · Junior Bug Fixer 🔧
          </p>
          <p className="mt-3 text-xs opacity-80">
            *not actualy cheap. **builds reliable, scalable backends in Go, Node
            and Lua (and frontends when nobody is looking). that part is real.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              className="fn-btn fn-btn-hot text-lg"
              href={mail("I want to hire you!!!")}
            >
              🔥 HIRE NOW
            </a>
            <a
              className="fn-btn"
              href={siteConfig.links.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              💼 LinkedIn (very profesional)
            </a>
            <a
              className="fn-btn"
              href={siteConfig.links.github}
              rel="noreferrer"
              target="_blank"
            >
              🟩 GitHub (side projcts)
            </a>
            <a
              className="fn-btn"
              href={siteConfig.links.gitlab}
              rel="noreferrer"
              target="_blank"
            >
              🦊 GitLab (where the REAL work lives)
            </a>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <VisitorCounter />
            <span className="border-2 border-black bg-white px-2 text-xs">
              ✅ 100% hand-writen code (mostly)
            </span>
            <WrongFact
              className="-bottom-24 left-0"
              direction="up"
              text={wrongFacts.counter}
              tilt={-3}
            />
          </div>
        </div>

        <div className="relative mx-auto">
          <WrongFact
            className="-left-56 top-6"
            direction="right"
            text={wrongFacts.photo}
            tilt={-8}
          />
          <div className="fn-starburst fn-wobble absolute -right-6 -top-6 z-10 flex h-28 w-28 items-center justify-center bg-red-600 text-center text-sm font-bold text-yellow-300">
            AVAILABLE
            <br />
            NOW!!!
          </div>
          <button
            aria-label="Poke Vitor"
            className="fn-photo block cursor-pointer border-8 border-double border-[var(--fn-orange)] bg-white p-2 shadow-[10px_10px_0_#111]"
            onClick={() => setPokes((p) => p + 1)}
          >
            <img
              alt="Vitor Mascarenhas"
              className="h-64 w-64 object-cover md:h-80 md:w-80"
              src={photo}
            />
          </button>
          <p className="mt-4 text-center text-sm">{pokeText}</p>
        </div>
      </div>
    </section>
  );
}

function AsSeenOn() {
  return (
    <div className="border-y-4 border-black bg-[var(--fn-cream)] px-4 py-4">
      <p className="fn-times text-center text-xs uppercase tracking-[0.3em]">
        As seen on
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-x-8 gap-y-2">
        {asSeenOn.map((name) => (
          <span key={name} className="fn-times text-lg italic opacity-70">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Technologies() {
  return (
    <Section
      className="bg-[var(--fn-teal)]"
      id="technologies"
      title="Tecnologies i use (bakend first!!)"
    >
      <WrongFact
        className="-top-6 -left-4"
        direction="right"
        text={wrongFacts.tech}
        tilt={-6}
      />
      <WrongFact
        className="-right-6 -top-10"
        direction="down"
        text={wrongFacts.techSide}
        tilt={5}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, i) => {
          const extra = techJokes[tech.title] ?? {
            joke: tech.subtitle,
            skill: 80,
          };
          const isBackend = i < 3;

          return (
            <div
              key={tech.title}
              className={clsx(
                "relative border-4 border-black bg-[var(--fn-cream)] p-4 shadow-[6px_6px_0_#111] transition-transform hover:rotate-0 hover:scale-105",
                isBackend && "bg-yellow-200",
              )}
              style={{ transform: `rotate(${((i % 5) - 2) * 1.2}deg)` }}
            >
              {isBackend && (
                <span className="fn-wobble absolute -right-3 -top-4 border-2 border-black bg-red-600 px-2 text-xs font-bold text-white">
                  ⭐ MAIN STAK
                </span>
              )}
              <div className="flex items-center gap-3">
                <span className="text-3xl [&_svg]:drop-shadow-[1px_1px_0_#111]">
                  {tech.icon}
                </span>
                <div>
                  <p className="fn-impact text-xl">{tech.title}</p>
                  <p className="text-sm">{extra.joke}</p>
                </div>
              </div>
              <div className="mt-3 h-4 border-2 border-black bg-white">
                <div
                  className="fn-skill-bar h-full"
                  style={{ width: `${extra.skill}%` }}
                />
              </div>
              <p className="fn-mono mt-1 text-xs">
                skil: {extra.skill}% · confidense: {extra.skill + 40}%
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projcts (they are real i swear)">
      <WrongFact
        className="-top-8 -left-6"
        direction="right"
        text={wrongFacts.projects}
        tilt={-5}
      />
      <WrongFact
        className="-right-4 top-[45%]"
        direction="left"
        text={wrongFacts.projectsSide}
        tilt={4}
      />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => {
          const joke = projectJokes.find((j) =>
            project.title.includes(j.match),
          );
          const exe = (joke?.name ?? project.title)
            .replace(/[^\w ]/g, "")
            .trim()
            .replace(/ +/g, "_")
            .toUpperCase();

          return (
            <RetroWindow
              key={project.title}
              title={`C:\\VITOR\\PROJECTS\\${exe}.EXE`}
            >
              <div className="bg-white p-2">
                <img
                  alt={project.title}
                  className="h-48 w-full object-contain"
                  src={project.image}
                />
              </div>
              <h3 className="fn-impact mt-4 text-3xl">
                {joke?.name ?? project.title}
              </h3>
              <p className="mt-2">{joke?.joke ?? project.description}</p>
              {joke && (
                <p className="fn-mono mt-2 bg-[var(--fn-forest)] p-2 text-xs text-[var(--fn-lime)]">
                  &gt; {joke.stat}
                </p>
              )}
              <details className="mt-3 text-sm">
                <summary className="cursor-pointer underline">
                  read the boring (real) descripton
                </summary>
                <p className="fn-times mt-2">{project.description}</p>
              </details>
              <div className="mt-3 flex gap-2 text-2xl">
                {project.techIcons.map((icon, i) => (
                  <span
                    key={i}
                    className="[&_svg]:drop-shadow-[1px_1px_0_#111]"
                  >
                    {icon}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    className="fn-btn fn-btn-hot"
                    href={project.liveUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    🌐 SEE IT LIVE (it works!!)
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    className="fn-btn"
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    👀 source code (dont read the commit msgs)
                  </a>
                )}
              </div>
            </RetroWindow>
          );
        })}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section
      className="bg-[var(--fn-orange)]"
      id="pricing"
      title="Pricng Plans"
    >
      <WrongFact
        className="-top-8 -left-4"
        direction="right"
        text={wrongFacts.pricing}
        tilt={-6}
      />
      <div className="grid gap-8 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={clsx(
              "relative flex flex-col border-4 border-black p-6 shadow-[8px_8px_0_#111]",
              tier.popular
                ? "bg-yellow-200 md:-mt-4 md:scale-105"
                : "bg-[var(--fn-cream)]",
            )}
          >
            {tier.popular && (
              <>
                <span className="fn-wobble absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-black bg-red-600 px-3 py-1 font-bold text-yellow-300">
                  {tier.note}
                </span>
                <div className="absolute -right-24 top-16 hidden lg:block">
                  <RedArrow direction="left" />
                </div>
              </>
            )}
            <h3 className="fn-impact text-3xl">{tier.name}</h3>
            <p className="mt-3">
              <span className="fn-impact text-5xl">{tier.price}</span>
              <span className="text-lg">{tier.period}</span>
            </p>
            {!tier.popular && <p className="text-xs">{tier.note}</p>}
            <ul className="mt-5 flex-1 space-y-2">
              {tier.features.map((f) => (
                <li key={f}>✅ {f}</li>
              ))}
            </ul>
            <a
              className={clsx(
                "fn-btn mt-6 justify-center",
                tier.popular && "fn-btn-hot",
              )}
              href={mail(`I'd like the "${tier.name}" plan`)}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Reviews() {
  return (
    <Section id="reviews" title="Reveiws ⭐⭐⭐⭐⭐">
      <WrongFact
        className="-top-8 -right-4"
        direction="down"
        text={wrongFacts.reviews}
        tilt={6}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <figure
            key={r.author}
            className={clsx(
              "border-4 border-dashed border-black p-5",
              /Mom|Wife/.test(r.author)
                ? "bg-yellow-100"
                : "bg-[var(--fn-cream)]",
            )}
            style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
          >
            <p className="text-xl text-[var(--fn-orange)] [text-shadow:1px_1px_0_#111]">
              {"★".repeat(r.stars)}
              <span className="text-gray-300 [text-shadow:none]">
                {"★".repeat(5 - r.stars)}
              </span>
            </p>
            <blockquote className="mt-2">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="fn-times mt-3 text-sm font-bold italic">
              — {r.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function Guestbook() {
  const links = [
    { label: "📧 Email", href: mail("Signing your guestbook") },
    {
      label: "💬 WhatsApp",
      href: siteConfig.links.whatsapp,
      external: true,
    },
    { label: "💼 LinkedIn", href: siteConfig.links.linkedin, external: true },
    { label: "🐙 GitHub", href: siteConfig.links.github, external: true },
    { label: "🦊 GitLab", href: siteConfig.links.gitlab, external: true },
  ];

  return (
    <footer className="relative" id="contact">
      <div className="fn-construction h-6" />
      <div className="relative bg-[var(--fn-forest)] px-4 py-16 text-white">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="fn-impact fn-headline text-5xl md:text-6xl">
            SING MY GUESTBOOK
          </h2>
          <p className="mt-4 text-lg">
            (its just my email. but it feels more 1999 this way)
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                className="fn-btn text-lg"
                href={l.href}
                rel={l.external ? "noreferrer" : undefined}
                target={l.external ? "_blank" : undefined}
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="fn-mono mt-8 text-sm text-[var(--fn-lime)]">
            {siteConfig.email}
          </p>

          <div className="mt-12">
            <ResumeDownload />
          </div>

          <div className="relative mt-12">
            <p className="fn-hand text-xl text-[#ff6b6b]">
              ↓ {wrongFacts.footer} ↓
            </p>
            <p className="fn-times mt-4 text-sm">
              ← prev · <b>the Vitor Webring</b> · next →
            </p>
            <p className="fn-times mt-2 text-xs opacity-80">
              © 1999–{new Date().getFullYear()} Vitor Mascarenhas Corp™ (its
              just me) · Webmaster: Vitor · This page is 🚧 under constuction 🚧
              forever
            </p>
          </div>
        </div>
      </div>
      <div className="fn-construction h-6" />
      <div className="h-32 bg-[var(--fn-forest)]" />
    </footer>
  );
}

export default function FunnyPortfolio() {
  useEffect(() => {
    const previous = document.title;

    document.title = "HIRE VITOR!!! 🤡 (not a scam)";

    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="fn-root">
      <div className="fn-marquee border-b-4 border-black bg-[var(--fn-forest)] py-1 text-[var(--fn-lime)]">
        <span className="fn-mono">{marqueeText}</span>
      </div>
      <div className="fn-float pointer-events-none fixed right-3 top-36 z-[999] hidden rotate-3 border-2 border-black bg-yellow-200 px-3 py-1 text-xs shadow-[3px_3px_0_#111] sm:block lg:top-16">
        👆 recruiter? scared? click 👔
      </div>
      <Hero />
      <AsSeenOn />
      <AlertBanner text={alerts[0]} />
      <Technologies />
      <AlertBanner text={alerts[1]} />
      <Projects />
      <Pricing />
      <AlertBanner text={alerts[2]} />
      <Reviews />
      <Guestbook />
      <div className="pointer-events-none fixed bottom-48 right-32 z-[1050] hidden h-24 w-80 lg:block">
        <WrongFact
          className="bottom-0 right-0"
          direction="right"
          text={wrongFacts.bot}
          tilt={-6}
        />
      </div>
      <CursorTrail />
      <FunnyPopups />
      <MusicPlayer />
      <VitorBot />
      <CookieBanner />
    </div>
  );
}
