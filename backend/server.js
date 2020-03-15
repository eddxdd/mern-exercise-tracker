const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Environment variables in one file
require('dotenv').config();

// Creating express server, port, etc
const app = express();
const port = process.env.PORT || 5000;

// CORS middleware; allows us to parse JSON
app.use(cors());
app.use(express.json());

// DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

// Connect to routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});