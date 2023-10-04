const mongoose=require('mongoose');

const {Schema}=mongoose

const roleSchema=new Schema({
    roleName: {
        type: String,
        unique: true,
        required: true,
      },
      roleDescription: {
        type: String,
      },
    
})

module.exports=mongoose.model('Role',roleSchema);