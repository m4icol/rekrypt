import Wireframe from "./components/Wireframe";
import Rekrypt from "./pages/Rekrypt";

function App() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen text-base-white bg-background font-display">
      <Rekrypt></Rekrypt>
      <Wireframe />
    </div>
  );
}

export default App;
