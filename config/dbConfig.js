// const mongoose = require ('mongoose')
// // 'mongodb+srv://himanshisingh0827:h@<cluster-address>/mern-portfolio-himanshi?retryWrites=true&w=majority';
// const uri = 'mongodb+srv://himanshisingh0827:h@cluster0.w9k30d4.mongodb.net/mern-portfolio-himanshi?retryWrites=true&w=majority';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log('error in connection', err));
// // mongoose.connect(
// //     "mongodb+srv://himanshisingh0827:h@cluster0.w9k30d4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
// const connection = mongoose.connection;
// connection.on("error",()=>{
//     console.log("error in connection");
// });
// connection.on("connected",()=>{
//     console.log("connected to database");
// });
// module.exports=mongoose;


const mongoose = require('mongoose');

// Corrected and simplified connection string
const uri = 'mongodb+srv://himanshisingh0827:h@cluster0.w9k30d4.mongodb.net/mern-portfolio-himanshi?retryWrites=true&w=majority';

mongoose.connect(uri, { tls: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('error in connection', err));

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("error in connection");
});

connection.on("connected", () => {
  console.log("connected to database");
});

module.exports = mongoose;
