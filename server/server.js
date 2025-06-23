require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/movies');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/movies', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
