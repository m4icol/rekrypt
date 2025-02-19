import { useState } from "react";
import Aside from "./sections/Aside";
import KryptSection from "./sections/KryptSection";
import Sidebar from "./sections/Sidebar";
import BlurCircle from "./components/CircleRadius";

function App() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  return (
    <div className="bg-backgroud text-base h-screen w-screen font-display flex justify-center items-center">
      <main className="w-[1300px] h-[750px] shadow-custom overflow-hidden rounded-3xl flex flex-row justify-between">
        <Sidebar
          selectedMethods={selectedMethods}
          onMethodsChange={setSelectedMethods}
        ></Sidebar>
        <KryptSection selectedMethods={selectedMethods}></KryptSection>
        <Aside></Aside>
        <BlurCircle
          x={100}
          y={30}
          size={420}
          color="rgba(114, 57, 134, 0.17)"
        />
        <BlurCircle
          x={450}
          y={800}
          size={470}
          color="rgba(114, 57, 134, 0.18)"
        />
        <BlurCircle
          x={1350}
          y={500}
          size={420}
          color="rgba(114, 57, 134, 0.16)"
        />
      </main>
    </div>
  );
}

export default App;
