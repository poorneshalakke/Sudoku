const express = require('express');
const connectDB = require('./config/db');
const sudokuRoutes = require('./routes/sudoku');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/sudoku', sudokuRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
