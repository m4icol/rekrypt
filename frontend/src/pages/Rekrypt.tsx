import { useState } from "react";
import Aside from "../sections/Aside";
import KryptSection from "../sections/KryptSection";
import Sidebar from "../sections/Sidebar";
import BlurCircle from "../components/CircleRadius";
function Rekrypt() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);

  return (
    <main className="bg-background z-50 w-[1300px] h-[750px] shadow-custom overflow-hidden rounded-3xl flex flex-row justify-between">
      <Sidebar
        selectedMethods={selectedMethods}
        onMethodsChange={setSelectedMethods}
      ></Sidebar>
      <KryptSection selectedMethods={selectedMethods}></KryptSection>
      <Aside></Aside>
      <BlurCircle
        x={250}
        y={750}
        size={270}
        color="rgba(140, 47, 173, 0.5)"
      />{" "}
      <BlurCircle x={1600} y={10} size={270} color="rgba(140, 47, 173, 0.5)" />
    </main>
  );
}

export default Rekrypt;
