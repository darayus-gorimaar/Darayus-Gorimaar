import { OrbitControls, ScrollControls } from "@react-three/drei";

import { Oscilloscope } from "./Oscilloscope";
import { Oscilloscope2 } from "./Oscilloscope2";
import { Helicopter } from "./Helicopter";

export const ResumeExperience = () => {
  return (
    <>
      <directionalLight position={[10, 10, 10]} intensity={10} />
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <Oscilloscope2 />
      {/* <Helicopter /> */}
    </>
  );
};
