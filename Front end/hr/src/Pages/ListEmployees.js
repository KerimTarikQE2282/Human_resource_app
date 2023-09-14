import { Paper, Typography } from '@mui/material';
import axios from 'axios'
import React from 'react'

function ListEmployees() {
    const [Employees,setEmployees]=React.useState([])
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
        
        }
    }; 
    React.useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/Employee-List/',config)
        .then((res)=>{
            setEmployees(res.data)
        })
        .catch((error) => {
            // Handle error
          });
    },[])
    console.log(Employees)
    const EmployeesCards = Employees.map((emp) => {
        return (
            <div className='EmployeeList'>
            <Paper elevation={15}>
            <img src={`http://127.0.0.1:8000${emp.employee_image}`}  />
                <Typography key={emp.id}>name: {emp.First_name}</Typography>
                <Typography key={emp.id}>name: {emp.Middle_name}</Typography>
                <Typography key={emp.id}>name: {emp.Last_name}</Typography>
                <Typography key={emp.id}>name: {emp.email}</Typography>
                

                Middle_name
            </Paper>
            </div>
          
        );
      });
    
  return (
    <div>
     {EmployeesCards}
    </div>
  )
}

export default ListEmployees
