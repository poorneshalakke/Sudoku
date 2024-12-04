import React from 'react';

const SudokuGrid = ({ puzzle, onChange }) => {
  return (
    <div className="sudoku-grid">
      {puzzle.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="number"
              value={cell || ''}
              onChange={(e) => onChange(rowIndex, colIndex, e.target.value)}
              min="1"
              max="5"
              className={cell === 0 ? 'editable' : 'readonly'}
              disabled={cell !== 0}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
