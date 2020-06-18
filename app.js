const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const user = require('./routes/userRouter');
const bugs = require('./routes/bugRouter');

const cors = require ('cors');
require('dotenv').config();


// set express 
 const app = express();

 app.use(express.json());

 app.use(cors());


 app.use(bodyParser.urlencoded({ extended: true }));

 const PORT = process.env.PORT || 3001
 app.listen(PORT, ()=> 
 console.log(`----------- Server is up and running on port:${PORT}-----------`));

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
     app.use(express.static(__dirname + "/client/build/"));
     app.use("/users", require("./routes/userRouter"));
     app.use("/bugs", bugs);