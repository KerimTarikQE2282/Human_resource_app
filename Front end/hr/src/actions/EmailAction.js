import axios from "axios";



export const sendEmail=(email)=>async dispatch=>{
    const config = {
     headers: {
       'Content-Type':  'application/json',
     },
   }; 
   const body = JSON.stringify(email);
        try{
        
         const res=await axios.post('http://127.0.0.1:8000/api/Create_Email/',body,config)
        
         dispatch({
           type: 'EMAIL_SEND_SUCCESS',
           })
        }
        catch(err){
         dispatch({
           type: 'EMAIL_SEND_FAIL',
         })
         console.log('EMAIL SEND ERROR',err)
        }
   
   
     }
     export const getEmail=(currentUser)=>async dispatch=>{
      const config = {
       headers: {
         'Content-Type':  'application/json',
       },
     }; 
        try{
          
           const res=await axios.get(`http://localhost:8000/api/${currentUser}/View_Email/`,config)
          
           dispatch({
             type: 'EMAIL_GET_SUCCESS',
             payload:res.data
             })
          }
          catch(err){
           dispatch({
             type: 'EMAIL_GET_FAIL',
           })
           console.log('EMAIL SEND ERROR',err)
          }
     
     
       }