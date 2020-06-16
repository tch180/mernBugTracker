const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
require('dotenv').config();


// set express 
 const app = express();

 app.use(express.json());

 app.use(cors());



 const PORT = process.env.PORT || 3000
 app.listen(PORT, ()=> console.log(`----------- Server is up and running on port:${PORT}-----------`));

 //Mongoose setup 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true, 
    }, (err)=>{
         if (err) throw err;
         console.log("--------MongoDb Connection Up and running.  ")
     });



     //Routes 
     app.use("/users", require("./routes/userRouter"));
