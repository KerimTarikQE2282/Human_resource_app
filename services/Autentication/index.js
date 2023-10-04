const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const adminModel=require('../../models/Admin')
const employeeModel=require('../../models/Employee')

const jwtSecret='sdgsdfgsdfdf';

module.exports={
    adminRegister: async(data)=>{
        try {
            
            const admin=await adminModel.findOne({email:data.email});
            if (admin.length !== 0){
                return {
                    status:400,
                    message: "User Already Exists!",
                }
            }
            const hashedPassword=await bcrypt.hash(data.password,10);
            data.password=hashedPassword;
            const newAdmin=await adminModel.create(data);

            if(!newAdmin) return {status: 400, message:'error registering user'};

            const token=jwt.sign({id:newAdmin._id},jwtSecret,{
                expiresIn: 31536000, //expires in one year
            })
            return{
                status:200,
                message: 'Admin Created Successfully',
                newAdmin,
                token,
            }
        } catch (error) {
            return{
                status:500,
                message:"this is the error",
            }
        }
    },

    adminLogin: async(data)=>{
        try {
            const admin=await adminModel.findOne({email:data.email})
            if (!admin){
                return{
                    status:404,
                    message:'user does not exist',
                }
            }
            const result=await bcrypt.compare(data.password,admin.password)
            if (result){
                const token=jwt.sign({id:admin._id},jwtSecret,{
                    expiresIn: 31536000, // expires in a year
                })
                return {
                    status:200,
                    message: 'User Logged in successfully',
                    admin,
                    token,
                }
            }
            return{
                status: 400,
                message: 'Incorrect Password'
            }
        } catch (error) {
            return {
                status:500,
                message: error.message,
            }
        }
    },

    employeeRegister: async(data)=>{
        try {
            const employee=await employeeModel.findOne({email:data.email});
            if(employee.length !== 0){
                return {
                    status:500,
                    message:'Employee already exists',
                }
            }
            const hashedPassword=await bcrypt.hash(data.password,10);
            data.password=hashedPassword;
            const newEmployee=await employeeModel.create(data);

            if(!newEmployee){
                return {
                    status:400,
                    message: 'error registering employee',
                }
            }
            const token=jwt.sign({id:newEmployee._id},jwtSecret,{
                expiresIn: 31536000, //expires in one year
            })
            return {
                status: 200,
                message: 'Employee Registerd Successfully',
                newEmployee,
                token,
            }
        } catch (error) {
            return{
                status:500,
                message: error.message,
            }
        }
    },

    employeeLogin: async(data)=>{
        try {
            const employee=await employeeModel.findOne({email:data.email});
            if (!employee) return {status: 404, message :'employee not found'};
            const result=await bcrypt.compare(employee.password,data.password)
            if (result){
                const token = jwt.sign({id:employee._id},jwtSecret,{
                    expiresIn: 31536000, //expires in one year
                })

                return{
                    status:200,
                    message:"Logged in successfully",
                    employee,
                    token,
                }
            }
            return {
                status:400,
                message:'Incorrect Password',
            }
        } catch (error) {
            return{
                status:500,
                message:error.message,
            }
        }
    }

}