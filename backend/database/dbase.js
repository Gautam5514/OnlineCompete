const mongoose = require('mongoose');

function connectDB () {
    mongoose.connect(process.env.DB
    ).then(() => {
        console.log('Connect to DataBase');
    }).catch(err => console.log(err))
}

module.exports = connectDB;


// long way of code to connect the mongoDB
// const mongoose = require('mongoose');

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDB;
