import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navber";
import type { Technology } from "./components/Types/Technologies";
import Technologies from "./components/Technologies/Technologies";
import Stack from "./components/Stack/Stack";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTechnologies() {
      const response = await fetch("/technologies.json");

      const data = await response.json();

      setTechnologies(data);
      setLoading(false);
    }

    getTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const isExist = selectedTechnologies.find(
      (item) => item.id === technology.id
    );

    if (isExist) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (item) => item.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);
    toast.info("Technology removed from your stack!");
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);
    toast.error("All technologies removed!");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-semibold">Loading technologies...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Banner />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <Technologies
            technologies={technologies}
            onAddToStack={handleAddToStack}
            selectedTechnologies={selectedTechnologies}
          />

          <Stack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;