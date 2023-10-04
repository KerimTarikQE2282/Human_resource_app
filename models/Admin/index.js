const mongoose =require('mongoose');

const {Schema} = mongoose

const adminSchema=new Schema({
    userName: {
        type: String,
        required: true,
      },
    email: {
        type: String,

    },
    password: {
        type: String,
        required: true,
    }
},{timestamps:true});

module.exports=mongoose.model('Admin',adminSchema);