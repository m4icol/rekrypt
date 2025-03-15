import { Canvas, useFrame } from "@react-three/fiber";
import { TorusGeometry, WireframeGeometry, MeshBasicMaterial } from "three";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";

const Wireframe = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full opacity-30">
      <Canvas>
        <ambientLight intensity={0.1} />
        <WireframeTorus />
      </Canvas>
    </div>
  );
};

const WireframeTorus = () => {
  const ref = useRef<Mesh | null>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.0002;
      ref.current.rotation.x -= 0.0001;
      ref.current.rotation.y += 0.0002;
    }
  });

  const geometry = new TorusGeometry(3, 1, 5, 20);
  const wireframeGeo = new WireframeGeometry(geometry);
  const material = new MeshBasicMaterial({ color: 0x888899 });

  return (
    <lineSegments
      ref={ref}
      geometry={wireframeGeo}
      material={material}
      rotation={[Math.PI / 1.9, 3, 0]}
      position={[Math.PI / -8, 0.01, 1]}
    />
  );
};

export default Wireframe;
