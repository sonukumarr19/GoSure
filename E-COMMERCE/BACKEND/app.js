const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');        
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

const { ConnectToDb } = require('./db/db');
ConnectToDb();

// app.use(cors());
app.use(cors({
    origin: true, // Or use true to allow any origin
    credentials: true, // If you're using cookies/authentication
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/users', userRoutes);  // Register the routes here
app.use('/captains', captainRoutes);  // Register the routes here
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);


module.exports = app;
