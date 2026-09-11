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
      className={`rounded-xl border-2 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${isAdded ? "border-pink-300" : "border-gray-200"
        }`}
    >
      {/* Icon & Badge */}
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-2xl bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
          {badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-xl font-bold text-slate-800">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Category / Difficulty / Rating */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-slate-600">
          {category}
        </span>

        <span className="text-xs text-slate-500">
          {difficulty}
        </span>

        <span className="flex items-center gap-1 text-sm font-medium">
          <FaStar className="text-yellow-400" />
          {rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-3 text-sm font-bold transition ${isAdded
            ? "cursor-not-allowed bg-pink-200 text-pink-500"
            : "bg-black text-white hover:bg-gray-800"
          }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}