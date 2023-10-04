const mongoose=require('mongoose');

const {Schema}=mongoose;

const roleEmployeePivotSchema=new Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
    },
    role:{
        type:mongoose.Schema.ObjectId,
        ref:'Roles'
    }
})

module.exports=mongoose.model('RoleEmployeePivot',roleEmployeePivotSchema);