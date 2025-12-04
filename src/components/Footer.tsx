import { Link } from "react-router-dom";
import resume from "../assets/Resume vitor dev.pdf";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer
      className="
        relative w-5xl py-5 px-15 my-0 mx-auto overflow-hidden
        bg-white text-black border-t border-l border-r border-black/20 shadow-2xl

        dark:bg-black dark:text-white dark:border-white/10
      "
      id="contact"
    >
      {/* CONTENT */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold leading-snug">
          Want the best on your team? Let’s connect{" "}
          <Link
            className="
              text-blue-600 underline decoration-blue-600 underline-offset-4
              hover:text-blue-500 transition

              dark:text-blue-400 dark:decoration-blue-400
              dark:hover:text-blue-300
            "
            to={`mailto:${siteConfig.email}`}
          >
            via email
          </Link>{" "}
          to collaborate!
        </h2>
      </div>

      {/* BOTTOM GRID */}
      <div
        className="
          grid grid-cols-1 gap-10 pt-12
          border-t border-black/10

          dark:border-white/10

          sm:grid-cols-2 lg:grid-cols-4
        "
      >
        {/* Name */}
        <div>
          <p className="text-lg font-semibold">Vitor Mascarenhas</p>
          <p className="mt-2 text-sm text-black/60 dark:text-white/60">
            © {new Date().getFullYear()} | All rights reserved.
          </p>
        </div>

        {/* Socials */}
        <div>
          <p className="mb-4 text-lg font-semibold">Socials</p>
          <ul className="space-y-2 text-black/70 dark:text-white/70">
            <li>
              <Link
                className="hover:text-black dark:hover:text-white transition"
                target="_blank"
                to={siteConfig.links.linkedin}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-black dark:hover:text-white transition"
                target="_blank"
                to={siteConfig.links.github}
              >
                Github
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-lg font-semibold">Contact</p>
          <ul className="space-y-2 text-black/70 dark:text-white/70">
            <li>
              <Link
                className="hover:text-black dark:hover:text-white transition"
                to={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-black dark:hover:text-white transition"
                target="_blank"
                to={siteConfig.links.whatsapp}
              >
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>

        {/* Extras */}
        <div>
          <p className="mb-4 text-lg font-semibold">More</p>
          <ul className="space-y-2 text-black/70 dark:text-white/70">
            <li>
              <Link
                className="hover:text-black dark:hover:text-white transition"
                target="_blank"
                to={resume}
              >
                Resume
              </Link>
            </li>
            <li>
              <a
                className="hover:text-black dark:hover:text-white transition"
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
