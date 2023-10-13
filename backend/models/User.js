const mongoose = require('mongoose');
const { Schema } = mongoose;



const UserSchema=new mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        unique:true,
        required:true
    },
    password:{
        type:"string",
        required:true
    },
    gender:{
        type:"string",
        required:true
    },
    gdate:{
        type:Date,
        default:Date.now
    },
    

})
const User=mongoose.model('user',UserSchema);
User.createIndexes()
module.exports=User;