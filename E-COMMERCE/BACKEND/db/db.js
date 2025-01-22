// const mongoose = require("mongoose");

// require("dotenv").config();

// exports.ConnectToDb = () => {
//     mongoose.connect(process.env.MONGODB_URL, {
//         //    useNewUrlParser: true,
//         //    useUnifiedTopology: true,
//             })
//     .then( ()=>{
//         console.log("db connectionn successful");
//     })
//     .catch((error) => {
//         console.log("DB facing connection issue");
//         console.log(error);
//         process.exit(1); 
//     });
// }

const mongoose = require("mongoose");

require("dotenv").config();

exports.ConnectToDb = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        // useNewUrlParser: true, // Recommended option
        // useUnifiedTopology: true, // Recommended option
    })
    .then(() => {
        console.log("db connection successful");
    })
    .catch((error) => {
        console.log("DB facing connection issue");
        console.log(error);
        process.exit(1); 
    });
};
