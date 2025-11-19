import React from "react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white text-black dark:bg-[#111111] p-5 shadow-md transition hover:bg-zinc-100 dark:hover:bg-[#1a1a1a]">
      <div className="p-4 bg-black/5 rounded-2xl dark:bg-zinc-800">
        <div className="text-3xl">{icon}</div>
      </div>

      <div>
        <p className="text-lg font-semibold dark:text-white">{title}</p>
        <p className="text-sm text-neutral-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default TechCard;
