import { ScrollControls } from "@react-three/drei";
import { Car } from "./Car";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <ambientLight intensity={1} />
      <ScrollControls
        pages={window.innerWidth > 1024 ? 4.5 : window.innerWidth > 768 ? 5 : 7}
        damping={0.25}
      >
        <Overlay />
        <Car />
      </ScrollControls>
    </>
  );
};
