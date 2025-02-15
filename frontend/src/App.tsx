import Aside from "./sections/Aside";
import KryptSection from "./sections/KryptSection";
import Sidebar from "./sections/Sidebar";

function App() {
  return (
    <div className="bg-backgroud text-base h-screen w-screen py-28 px-52 font-display">
      <main className="border-2 border-stroke rounded-3xl flex flex-row">
        <Sidebar />
        <KryptSection></KryptSection>
        <Aside></Aside>
      </main>
    </div>
  );
}

export default App;
