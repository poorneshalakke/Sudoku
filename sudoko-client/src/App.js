import React, { useState, useEffect } from 'react';
import { fetchSudoku, validateSudoku } from './services/api';
import SudokuGrid from './components/sudokuGrid';
import './App.css';

function App() {
  const [puzzle, setPuzzle] = useState([]);
  const [solution, setSolution] = useState([]);
  const [userSolution, setUserSolution] = useState([]);
  const [message, setMessage] = useState('');

  // Function to load Sudoku from the backend
  const loadSudoku = async () => {
    try {
      const { puzzle, solution } = await fetchSudoku();
      console.log('Fetched Puzzle:', puzzle); // Log the fetched puzzle
      setPuzzle(puzzle);
      setSolution(solution);
      setUserSolution(puzzle.map((row) => [...row])); // Reset user solution
      setMessage('');
    } catch (error) {
      setMessage('Error loading puzzle');
      console.error('Error loading puzzle:', error);
    }
  };

  useEffect(() => {
    loadSudoku(); // Load the puzzle when the component mounts
  }, []);

  // Function to handle input change
  const handleInputChange = (row, col, value) => {
    const updatedSolution = [...userSolution];
    updatedSolution[row][col] = parseInt(value, 10) || 0;
    setUserSolution(updatedSolution);
  };

  // Function to handle Sudoku validation
  const handleValidate = async () => {
    try {
      const result = await validateSudoku(puzzle, userSolution);
      setMessage(result.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="App">
      <h1>5x5 Sudoku</h1>
      {/* Render the Sudoku grid */}
      <SudokuGrid puzzle={userSolution} onChange={handleInputChange} />
      <div className="controls">
        <button onClick={loadSudoku}>Reset</button>
        <button onClick={handleValidate}>Check Sudoku</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
