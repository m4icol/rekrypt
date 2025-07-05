import { useState } from "react";
import BlurCircle from "../components/CircleRadius";
import KryptSection from "../sections/KryptSection";
import Sidebar from "../sections/Sidebar";
import Aside from "../sections/Aside";
function Rekrypt() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>(["SHA_256", "BASE 64"]);
  return (
    <main className="z-10 h-screen w-screen lg:h-4/5 lg:w-2/3 shadow-custom overflow-hidden lg:rounded-3xl">
      <div className="bg-background flex flex-row h-full w-full">
        <Sidebar
          selectedMethods={selectedMethods}
          onMethodsChange={setSelectedMethods}
        ></Sidebar>
        <KryptSection selectedMethods={selectedMethods}></KryptSection>
        <Aside></Aside>
      </div>
      <BlurCircle
        x={250}
        y={750}
        size={370}
        color="rgba(140, 47, 173, 0.25"
      />
      <BlurCircle x={1100} y={10} size={370} color="rgba(140, 47, 173, 0.25)" />
    </main>
  );
}

export default Rekrypt;
