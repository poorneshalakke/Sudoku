import axios from 'axios';

const API_URL = 'http://localhost:5000/api/sudoku';

// Fetch a new Sudoku puzzle
export const fetchSudoku = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Validate the user's Sudoku solution
export const validateSudoku = async (puzzle, userSolution) => {
  const response = await axios.post(`${API_URL}/validate`, { puzzle, userSolution });
  return response.data;
};
