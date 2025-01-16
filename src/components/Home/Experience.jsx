import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Car } from "./Car";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={4} damping={0.25}>
        <Overlay />
        <Car />
      </ScrollControls>
    </>
  );
};
