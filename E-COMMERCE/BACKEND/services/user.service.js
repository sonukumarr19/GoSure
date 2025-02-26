//service used to interech with database

const userModel = require('../models/user.model');


module.exports.createUser = async({
    firstName , lastName , email , password
}) =>{
    if(!firstName || !email || !password){
        throw new Error('All fields are required');
    }

    const user = userModel.create({
         fullName : {
            firstName ,
            lastName,
         },
         email , 
         password
    })

    return user;
}

// const userModel = require('../models/user.model');
// const bcrypt = require('bcrypt');

// module.exports.createUser = async ({ firstName, lastName, email, password }) => {
//     try {
//         if (!firstName || !email || !password) {
//             throw new Error('All fields are required');
//         }

//         // Check if the user already exists
//         const existingUser = await userModel.findOne({ email });
//         if (existingUser) {
//             throw new Error('User with this email already exists');
//         }

//         // Hash the password
//         const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // Create the user
//         const user = await userModel.create({
//             fullName: {
//                 firstName,
//                 lastName,
//             },
//             email,
//             password: hashedPassword,
//         });

//         return user;
//     } catch (err) {
//         console.error('Error creating user:', err.message);
//         throw err;
//     }
// };
