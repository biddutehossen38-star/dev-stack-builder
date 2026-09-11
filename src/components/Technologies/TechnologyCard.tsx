import { FaStar } from "react-icons/fa";
import type { Technology } from "../Types/Technologies";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

export default function TechnologyCard({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <div
      className={`rounded-xl border-2 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${isAdded ? "border-pink-300" : "border-gray-200"
        }`}
    >

      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={name}
          className="h-12 w-12"
        />

        <span className="rounded-2xl bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold">{name}</h3>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 text-slate-600 px-3 py-1 text-xs">
          {category}
        </span>

        <span className="text-xs text-slate-500">
          {difficulty}
        </span>

        <span className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />
          {rating}
        </span>
      </div>

      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-bold text-pink-500 transition ${isAdded
          ? "cursor-not-allowed bg-pink-200"
          : "bg-black text-white hover:opacity-90"
          }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}