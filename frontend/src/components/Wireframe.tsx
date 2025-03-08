import { Canvas, useFrame } from "@react-three/fiber";
import { TorusGeometry, WireframeGeometry, MeshBasicMaterial } from "three";
import { useRef } from "react";
import { Mesh } from "three";

const Wireframe = () => {
  return (
    <div className="absolute opacity-20 top-0 left-0 w-full h-full">
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
      ref.current.rotation.z -= 0.0002;
    }
  });

  const geometry = new TorusGeometry(3.7, 1, 21, 100);
  const wireframeGeo = new WireframeGeometry(geometry);
  const material = new MeshBasicMaterial({ color: 0x888899 });

  return (
    <lineSegments
      ref={ref}
      geometry={wireframeGeo}
      material={material}
      rotation={[Math.PI / -3.5, 0.5, 0]}
      position={[Math.PI / -5.7, 0.3, 1.2]}
    />
  );
};

export default Wireframe;
