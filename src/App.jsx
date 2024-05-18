import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Game } from "./Game";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas style={{ height: "100%", width: "100%" }}>
      <Perf position="top-left" />
      <PerspectiveCamera makeDefault position={[-1, 10, 0]} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        castShadow
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <OrbitControls />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Center>
        <Game />
      </Center>
    </Canvas>
  );
}

export default App;
