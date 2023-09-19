

export const MyEmployee=(Email)=>async (dispatch)=>{
    
    dispatch({
        type:"SetEmail",
        payload:Email
    })
}