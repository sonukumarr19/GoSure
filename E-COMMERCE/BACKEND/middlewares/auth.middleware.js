const userModel = require('../models/user.model');  
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const isBlacklisted = await BlacklistToken.findOne({token : token});
    if(isBlacklisted){
        return res.status(401).json({ error: "Unauthorized" });
    }                           

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        next();

    } catch (error) {
        console.error("Error in authUser:", error);
        res.status(401).json({message: "Unauthorized user"});            
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const isBlacklisted = await BlacklistToken.findOne({token : token});

    if(isBlacklisted){
        return res.status(401).json({ error: "Unauthorized" });
    }                           

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        next(); //check if next is required or not

    } catch (error) {
        console.error("Error in authCaptain:", error);
        res.status(401).json({message: "Unauthorized captain"});            
    }
}