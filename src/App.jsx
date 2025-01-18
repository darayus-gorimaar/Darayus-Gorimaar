import "./App.css";
import { Canvas } from "@react-three/fiber";

import { Experience } from "./components/Home/Experience";
import { useState } from "react";

function App() {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
        <Canvas
          style={{
            backgroundColor: "transparent",
            touchAction: "none", // Disable touch interactions
          }}
          onPointerDown={(event) => event.stopPropagation()}
          onPointerMove={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          camera={{ fov: 50 }}
        >
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
