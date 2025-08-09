'use client'

// https://youtu.be/HN7FhKPTohA?si=eIBG_5GMkQwUN4SD
import { useState } from "react";

const DEFAULT_GRID_SIZE = 16;
const DEFAULT_GRID_COLOUR = "#fff";
const DEFAULT_SELECTED_COLOUR = "#000"

export default function Home() {
  const [gridSize, setGridSize] = useState(DEFAULT_GRID_SIZE);
  const [grid, setGrid] = useState(
    Array(gridSize * gridSize).fill(DEFAULT_GRID_COLOUR)
  );

  const [lastClicked, setLastClicked] = useState(0); // Temporary
  const [colour, setColour] = useState(DEFAULT_SELECTED_COLOUR);

  const handleCellClick = (index) => {
    const newGrid = [...grid];
    //newGrid[index] = "#000";
    newGrid[index] = grid[index] === colour ? "#fff" : colour;
    setGrid(newGrid);
    setLastClicked(lastClicked + 1);
  };

  const handleGridChange = (newGridSize) => {
    setGridSize(newGridSize)
    setGrid(Array(newGridSize * newGridSize).fill(DEFAULT_GRID_COLOUR))
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen">
      <h1 className="text-3xl">Pixelart Editor</h1>
      <div className="flex items-center space-x-4">
        <label>Choose grid size: </label>
        <input 
          type="number"
          value={gridSize}
          onChange={(e) => handleGridChange(+e.target.value)}
          className="border rounded p-0.5"
        />
        <label>Choose colour: </label>
        <input
          type="color"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          className="border rounded p-0.5"
        />
      </div>
      <div className="grid w-[30rem] h-[30rem]" style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      }}>
        {grid.map((colour, index) => (
          <div
            key={index}
            className="border"
            style={{ backgroundColor: colour, borderColor: "#171717"}}
            onClick={() => handleCellClick(index)}
          ></div>
        ))}
      </div>
      <p>Pixels changes: {lastClicked}</p>
    </div>
  );
}
