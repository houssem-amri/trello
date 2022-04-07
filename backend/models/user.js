const mongoose = require('mongoose')


const userSchema=mongoose.Schema({
    Email:{type:String},
    Password:{type:String},
    Address:{type:String},
    City:{type:String},
})

const user =mongoose.model('User',userSchema);
module.exports=user