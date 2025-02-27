const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');        
const userRoutes = require('./routes/user.routes');

const { ConnectToDb } = require('./db/db');
ConnectToDb();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/users', userRoutes);  // Register the routes here
app.use('/login', userRoutes);


module.exports = app;
