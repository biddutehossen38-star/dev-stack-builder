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
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
      {/* Stack Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty Stack */}
      {selectedTechnologies.length === 0 ? (
        <div className="flex min-h-64 items-center justify-center text-center">
          <div>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
              🧩
            </div>

            <p className="text-lg font-semibold text-slate-700">
              Your stack is empty
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Add technologies from the left side to build your development
              stack.
            </p>
          </div>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-6 space-y-3">
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