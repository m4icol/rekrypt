import { useState } from "react";
import Aside from "./sections/Aside";
import KryptSection from "./sections/KryptSection";
import Sidebar from "./sections/Sidebar";
import BlurCircle from "./components/CircleRadius";

function App() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  return (
    <div className="bg-backgroud text-base h-screen w-screen py-28 px-52 font-display">
      <main className="shadow-custom overflow-hidden rounded-3xl flex flex-row">
        <Sidebar
          selectedMethods={selectedMethods}
          onMethodsChange={setSelectedMethods}
        ></Sidebar>
        <KryptSection selectedMethods={selectedMethods}></KryptSection>
        <Aside></Aside>
        <BlurCircle
          x={100}
          y={30}
          size={300}
          color="rgba(114, 57, 134, 0.25)"
        />
        <BlurCircle
          x={450}
          y={800}
          size={400}
          color="rgba(114, 57, 134, 0.25)"
        />
        <BlurCircle
          x={1350}
          y={500}
          size={350}
          color="rgba(114, 57, 134, 0.25)"
        />
      </main>
    </div>
  );
}

export default App;
