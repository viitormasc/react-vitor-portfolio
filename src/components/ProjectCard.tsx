import { IoCodeSlashOutline } from "react-icons/io5";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  techIcons: React.ReactNode[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  techIcons,
}) => {
  return (
    <div
      className="
        rounded-2xl 
        bg-[#f5f5f5] text-black
        hover:bg-[#e9e9e9]

        dark:bg-[#111111] dark:text-white
        dark:hover:bg-[#1a1a1a]

        p-6 shadow-lg transition
      "
    >
      {/* IMAGE */}
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>

      {/* TITLE */}
      <h3 className="mt-5 text-2xl font-semibold">{title}</h3>

      {/* DESCRIPTION */}
      <p className="mt-2 text-black/70 dark:text-neutral-400">{description}</p>

      {/* TECHNOLOGIES */}
      <div className="flex gap-3 mt-4 text-2xl">
        {techIcons.map((icon, idx) => (
          <div key={idx}>{icon}</div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-6">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className="
              rounded-lg px-4 py-2 font-medium transition
              bg-blue-600 text-white hover:bg-blue-500

              dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500
            "
          >
            Live App
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="
              rounded-lg px-4 py-2 font-medium flex gap-2 items-center transition

              bg-neutral-200 text-black hover:bg-neutral-300
              dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700
            "
          >
            <IoCodeSlashOutline size={21} />
            Source code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
