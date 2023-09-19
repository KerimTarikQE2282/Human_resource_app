import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

function EmployeeDetail({ Email }) {
  const [Employee,setEmployee]=React.useState()
  const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
    
    }
}; 
React.useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/api/Employee_Detailed/${Email}/`,config)
  .then(res=>{
    setEmployee(res.data)
  })
},[])
  console.log("my Email==============>", Email);
  
  console.log(Employee)
  return (
    <div>
    <img src={Employee.employee_image}></img>
    <h5>{Employee.First_name}</h5>
    <h5>{Employee.Middle_name}</h5>
    <h5>{Employee.Last_name}</h5>
    <h5>{Employee.email}</h5>
    <h5>{Employee.department}</h5>
    <h5>​
{Employee.phoneNumber}</h5>
    <h5>​
{Employee.salary}</h5>
    <h5>{Employee.title}</h5>
 
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Email: state.MyEmployee.Email, // Access the email property from the MyEmployee reducer
  };
};

export default connect(mapStateToProps)(EmployeeDetail);
