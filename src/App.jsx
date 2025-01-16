import "./App.css";
import { Canvas } from "@react-three/fiber";

import { Experience } from "./components/Home/Experience";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          width: "100vw",
          height: "100vh",
          backgroundColor: "transparent",
        }}
      >
        <Canvas style={{ backgroundColor: "transparent" }} camera={{ fov: 50 }}>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
