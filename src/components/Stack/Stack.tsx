import type { Technology } from "../Types/Technologies";
import StackItem from "./StackItem";

interface StackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function Stack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackProps) {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Stack</h2>

          <p className="text-sm text-gray-500">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="flex min-h-64 items-center justify-center text-center">
          <div>
            <p className="text-lg font-semibold">Your stack is empty</p>

            <p className="mt-2 text-sm text-gray-500">
              Add technologies from the left side to build your development
              stack.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {selectedTechnologies.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </aside>
  );
}