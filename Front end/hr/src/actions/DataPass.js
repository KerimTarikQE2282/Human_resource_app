
export const MyData=(Data)=>(dispatch)=>{
    
    dispatch({
        type:"SetData",
        payload:Data
    })
}