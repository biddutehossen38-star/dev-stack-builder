import type { Technology } from "../Types/Technologies";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export default function StackItem({
  technology,
  onRemove,
}: StackItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10"
        />

        <div>
          <h3 className="font-semibold">{technology.name}</h3>

          <p className="text-sm text-gray-500">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-lg text-gray-400 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  );
}