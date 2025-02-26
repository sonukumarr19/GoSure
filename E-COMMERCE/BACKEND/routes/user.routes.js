const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');


const {body} = require('express-validator');

router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min : 3}).withMessage('First name must be at least 3 character long'),
    body('password').isLength({min : 6}).withMessage('Password must be at least 6 character long'),
    ],
    userController.registerUser,
)

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min : 6}).withMessage('Password must be at least 6 character long'),
    ],
    userController.loginUser,   //agar validation result me koi error nahi hoga to yeh function call hoga   aur 
                                //jo validation result pr jo bhi action perform karna h uska logic iss function me h   
)


module.exports = router;


 