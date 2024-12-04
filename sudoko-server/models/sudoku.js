const mongoose = require('mongoose');

const sudokuSchema = new mongoose.Schema({
  puzzle: [[Number]],
  solution: [[Number]],
});

module.exports = mongoose.model('Sudoku', sudokuSchema);
