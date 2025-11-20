import TechCard from "./TechCard";
import technologies from "./Technologies";

const TechSection: React.FC = () => {
  return (
    <section
      className="
        w-full px-6 py-20 
        bg-white text-black
        dark:bg-black dark:text-white
      "
      id="technologies"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold">Technologies</h2>

        <p className="mt-4 max-w-xl text-black/60 dark:text-neutral-400" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <TechCard
              key={tech.title}
              icon={tech.icon}
              subtitle={tech.subtitle}
              title={tech.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
