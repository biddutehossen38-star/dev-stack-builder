import type { Technology } from "../Types/Technologies";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAddToStack: (technology: Technology) => void;
}

export default function Technologies({
  technologies,
  selectedTechnologies,
  onAddToStack,
}: TechnologiesProps) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-2 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAddToStack={onAddToStack}
            isAdded={selectedTechnologies.some(
              (item) => item.id === technology.id
            )}
          />
        ))}
      </div>
    </section>
  );
}