const Sudoku = require('../models/sudoku');

// Fetch a random Sudoku puzzle
exports.getSudoku = async (req, res) => {
  try {
    const puzzles = await Sudoku.find();
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    res.json(randomPuzzle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch puzzle' });
  }
};

// Validate Sudoku Solution
exports.validateSudoku = (req, res) => {
  const { puzzle, userSolution } = req.body;

  const isValid = (grid) => {
    const checkUnique = (arr) =>
      arr.length === 5 && new Set(arr).size === 5 && arr.every((n) => n >= 1 && n <= 5);

    for (const row of grid) if (!checkUnique(row)) return false;

    for (let col = 0; col < 5; col++) {
      const column = grid.map((row) => row[col]);
      if (!checkUnique(column)) return false;
    }

    return true;
  };

  const isValidSolution = isValid(userSolution);

  if (!isValidSolution) {
    return res.status(400).json({ valid: false, message: 'sudoku wrong' });
  }

  res.json({ valid: true, message: 'Sudoku correct' });
};
