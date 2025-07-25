import { useState } from "react";
import BlurCircle from "../components/CircleRadius";
import KryptSection from "../sections/KryptSection";
import Sidebar from "../sections/Sidebar";
import Aside from "../sections/Aside";
function Rekrypt() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>(["SHA_256", "BASE 64"]);
  return (
    <main className="z-10 h-screen w-screen lg:h-[85%] lg:w-[70%] shadow-custom overflow-hidden lg:rounded-3xl">
      <div className="bg-background flex flex-row h-full w-full">
        <Sidebar
          selectedMethods={selectedMethods}
          onMethodsChange={setSelectedMethods}
        ></Sidebar>
        <KryptSection selectedMethods={selectedMethods}></KryptSection>
        <Aside></Aside>
      </div>
      <BlurCircle
        x={150}
        y={550}
        size={400}
        color="rgba(140, 47, 173, 0.2"
      />
      <BlurCircle x={1100} y={10} size={370} color="rgba(140, 47, 173, 0.25)" />
    </main>
  );
}

export default Rekrypt;
