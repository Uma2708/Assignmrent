const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    phone:Number,
    project:String,
})

const UserModel = mongoose.model('users', UserSchema);
module.exports=UserModel;