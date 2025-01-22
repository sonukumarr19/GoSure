// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const userSchema = new mongoose.Schema({
//     fullName: {
//         firstName: {
//             type: String, 
//             required: true,
//             minlength: [3, 'First name must be at least 3 characters long'],
//         },
//         lastName: { 
//             type: String, 
//             required: true,
//             minlength: [3, 'Last name must be at least 3 characters long'],
//         },
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         minlength: [5, 'Email must be at least 5 characters long'],
//     },
//     password: {
//         type: String,
//         required: true,
//         select: false, 
//     },
//     socketId: {
//         type: String, 
//     },
// });

// // Instance method to generate authentication token
// userSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
//     return token;
// };

// // Instance method to compare passwords
// userSchema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };

// // Static method to hash a password
// userSchema.statics.hashPassword = async function (password) {
//     return await bcrypt.hash(password, 10);
// };

// // Create the model
// const userModel = mongoose.model('User', userSchema);

// module.exports = userModel;


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastName: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'], // Email format validation
    },
    password: {
        type: String,
        required: true,
        select: false, 
        minlength: [6, 'Password must be at least 6 characters long'], // Password validation
    },
    socketId: {
        type: String, 
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
