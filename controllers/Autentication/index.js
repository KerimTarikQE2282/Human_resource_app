const autenticationService=require('../../services/Autentication');

module.exports={
    adminLogin:async(req,res)=>{
        try {

            const result=await autenticationService.adminLogin(req.body);
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },
    adminRegister:async(req,res)=>{
        try {
            console.log('request: ',req.body)
            const result=await autenticationService.adminRegister(req.body);
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },
    employeeRegister:async (req,res)=>{
        try {
            const result=await autenticationService.employeeRegister(req.body);
            res.status(result.status).json(result)
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    employeeLogin: async (req,res)=>{
        try {
            const result=await autenticationService.employeeLogin(req.body);
            res.status(500).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

}