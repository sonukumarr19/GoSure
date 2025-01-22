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
