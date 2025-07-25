import { lazy, Suspense } from "react";

const Rekrypt = lazy(() => import("./pages/Rekrypt"));
const Wireframe = lazy(() => import("./components/Wireframe"));

function App() {
  return (
    <div className="relative flex lg:items-center justify-center w-screen h-screen text-base-white bg-background font-display">
      <Suspense fallback={<div>Loading Rekrypt...</div>}>
        <Rekrypt />
        <Wireframe />
      </Suspense>
    </div>
  );
}

export default App;
