import { Clone } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { positionToVec } from "./gameUtils";

const pieces = {
  p: (position, color) => <Pawn position={position} color={color} />,
  r: (position, color) => <Rook position={position} color={color} />,
  n: (position, color) => <Knight position={position} color={color} />,
  b: (position, color) => <Bishop position={position} color={color} />,
  q: (position, color) => <Queen position={position} color={color} />,
  k: (position, color) => <King position={position} color={color} />,
};

export function Piece({ type, position, color }) {
  const vecPosition = positionToVec(position);
  return pieces[type](vecPosition, color);
}

function Model({ position, piece, color, scale, rotation = [0, 0, 0] }) {
  const scene = useMemo(() => piece.scene.clone(), [piece]);
  return (
    <group scale={scale} position={position} rotation={rotation}>
      <Clone
        castShadow
        object={scene}
        inject={<meshStandardMaterial color={color} metalness={0.5} />}
      ></Clone>
    </group>
  );
}

function Pawn({ color, position }) {
  const piece = useLoader(GLTFLoader, "./pawn.glb");

  return (
    <Model
      scale={[0.45, 0.5, 0.45]}
      color={color}
      piece={piece}
      position={position}
    />
  );
}
function Rook({ color, position }) {
  const piece = useLoader(GLTFLoader, "./rook.glb");

  return (
    <Model
      scale={[0.6, 0.7, 0.5]}
      color={color}
      piece={piece}
      position={position}
    />
  );
}
function Knight({ color, position }) {
  const piece = useLoader(GLTFLoader, "./knight.glb");

  return (
    <Model
      scale={[0.45, 0.55, 0.45]}
      color={color}
      piece={piece}
      position={position}
      rotation={[0, color === "white" ? Math.PI * 0.5 : -Math.PI * 0.5, 0]}
    />
  );
}
function Bishop({ color, position }) {
  const piece = useLoader(GLTFLoader, "./bishop.glb");

  return (
    <Model
      scale={[0.6, 0.65, 0.6]}
      color={color}
      piece={piece}
      position={position}
    />
  );
}
function Queen({ color, position }) {
  const piece = useLoader(GLTFLoader, "./queen.glb");

  return (
    <Model
      scale={[0.6, 0.75, 0.6]}
      color={color}
      piece={piece}
      position={position}
    />
  );
}
function King({ color, position }) {
  const piece = useLoader(GLTFLoader, "./king.glb");

  return (
    <Model
      scale={[0.6, 0.7, 0.6]}
      rotation={[0, Math.PI * 0.5, 0]}
      color={color}
      piece={piece}
      position={position}
    />
  );
}
