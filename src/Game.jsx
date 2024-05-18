import { Suspense } from "react";
import { Piece } from "./Pieces";
import {
  getColor,
  positionToVec,
  COL_TO_NUM,
  INITIAL_BOARD,
} from "./gameUtils";

export function Game() {
  return (
    <>
      <Board />
      <Legend />
    </>
  );
}

export function Board() {
  const rows = Object.keys(INITIAL_BOARD).map((column) =>
    INITIAL_BOARD[column].map((square, rowIndex) => {
      return (
        <>
          <Square
            position={column + rowIndex}
            key={String(column) + String(rowIndex)}
          />
          {square !== 0 ? (
            <Suspense key={square}>
              <Piece
                type={square[0]}
                position={column + rowIndex}
                color={square.includes("w") ? "white" : "darkgrey"}
              />
            </Suspense>
          ) : null}
        </>
      );
    })
  );

  return <>{rows}</>;
}

function Legend() {}

function Square({ position }) {
  const color = getColor(COL_TO_NUM[position[0]], position[1]);
  const [x, y, z] = positionToVec(position);

  return (
    <mesh scale={1} position={[x, y - 0.05, z]} receiveShadow>
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
