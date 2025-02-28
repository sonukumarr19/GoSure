const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const BlacklistToken = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain with this email already exists' });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token , captain });

}

module.exports.loginCaptain = async (req, res) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password'); 

    if (!captain) {
        return res.status(401).json({ error: "Invalid Email or Password bro" });
    }

    const isPasswordValid = await captain.comparePassword(password);

    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid Email or Password" });
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, captain });

}

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({ captain: req.captain }); 
}

module.exports.logoutCaptain = async (req, res) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await BlacklistToken.create({ token});

    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}