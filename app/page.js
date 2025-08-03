'use client'

import { useState } from "react";

export default function Home() {
  const [gridSize, setGridSize] = useState(16);
  const [grid, setGrid] = useState(
    Array(gridSize * gridSize).fill('#fff')
  );

  return (
    <div className="grid w-[30rem] h-[30rem]" style={{
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    }}>
      {grid.map((colour, index) => {
        <div
          key={index}
          className="border"
          style={{ backgroundColor: colour}}
        ></div>
      })}
    </div>
  );
}
