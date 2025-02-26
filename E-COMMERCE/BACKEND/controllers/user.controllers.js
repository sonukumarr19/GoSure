// const { validationResult } = require('express-validator');
// const userModel = require('../models/user.model');
// const userService = require('../services/user.service');


// module.exports.registerUser = async (req ,res , next) =>{
    
//     const errors = validationResult(req);

//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()});
//     }

//     console.log(req.body);

//     const {fullName ,email , password } = req.body;
    
//     const hashedPassword = await userModel.hashPassword(password);

//     const user = await userService.createUser({
//         firstName : fullName.firstName ,
//         lastName : fullName.lastName,
//         email,
//         password : hashedPassword
//     });

//     const token = user.generateAuthToken();

//     res.status(201).json({token , user});
// }

const { validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const userService = require('../services/user.service');  // Corrected import

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, password } = req.body;

        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthToken();

        res.status(201).json({ token, user });

    } catch (error) {
        console.error("Error in registerUser:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Validation Errors:", errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        console.log("Request body:", req.body); 

        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');//+password is used to select password field which is not selected by default in user model
        console.log("User found:", user);

        if (!user) {
            return res.status(401).json({ error: "Invalid Email or Password" });
        }

        const isMatch = await user.comparePassword(password);
        console.log("Password comparison result:", isMatch);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid Email or Password" });
        }

        const token = user.generateAuthToken();

        res.status(200).json({ token, user });
    } catch (error) {
        console.error("Error in loginUser:", error);
        res.status(500).json({ error: "Internal Server Error" });
     }
};
