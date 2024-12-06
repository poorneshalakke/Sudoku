import React from 'react';
import './sudokuGrid.css'; 

const SudokuGrid = ({ puzzle, onChange }) => {  
  return (
    <div className="grid">
      {puzzle.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="number"
              value={cell || ''}
              onChange={(e) => onChange(rowIndex, colIndex, e.target.value)}
              min="1"
              max="5"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
