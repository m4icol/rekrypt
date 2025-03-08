import Wireframe from "./components/Wireframe";
import Rekrypt from "./pages/Rekrypt";

function App() {
  return (
    <div className="flex relative items-center justify-center w-screen h-screen text-base bg-background font-display">
      <Rekrypt></Rekrypt>
      <Wireframe />
    </div>
  );
}

export default App;
