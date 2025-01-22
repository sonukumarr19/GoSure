// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/user.controllers');


// const {body} = require('express-validator');

// router.post('/register' , [
//     body('email').isEmail().withMessage('Invalid Email'),
//     body('fullName.firstName').isLength({min : 3}).withMessage('Fist name must be at least 3 character long'),
//     body('password').isLength({min : 6}).withMessage('Password must be at least 6 character long'),
//     ],
//     userController.registerUser,
// )


// module.exports = router;


const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');
const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullName.firstName')
            .exists()
            .isLength({ min: 3 })
            .withMessage('First name must be at least 3 characters long'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    validateRequest,
    userController.registerUser
);

module.exports = router;
