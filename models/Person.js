const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var personSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
},{timestamps: true});

const Person = mongoose.model('Person', personSchema);
//Export the model
module.exports = Person