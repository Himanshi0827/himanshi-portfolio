const express = require('express')
const app = express()
require("dotenv").config();
const dbconfig = require('./config/dbConfig')

const portfolioroute= require('./routes/portfolioroute')
// const path = require("path");

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname,"client/build")));
//     app.get("*",(req,res)=>{
//         res.sendFile(path.join(__dirname,"client/build/index.html"));
//         })
// }
app.use(express.json());
app.use("/api/portfolio", portfolioroute);
app.listen(5000,()=>{
    console.log('server running on port 5000')
});
