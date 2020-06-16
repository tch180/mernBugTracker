const mongoose = require('mongoose');


const bugSchema = new mongoose.Schema({
    name: {type: String, required:true },
    description: {type: String,required: true,   minlength: 144},
    status: {type: String,},
})

module.exports = Bug = mongoose.model("bug", bugSchema)