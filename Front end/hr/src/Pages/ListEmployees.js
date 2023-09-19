import { Divider, Paper, Typography } from '@mui/material';
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeDetail from './EmployeeDetail';

function ListEmployees() {
    const [Employees,setEmployees]=React.useState([])
    const navigate=useNavigate()
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
    const handleClick=(email)=>{
        EmployeeDetail(email)
        navigate('/EmployeeDetail')
    }
    console.log(Employees)
    const EmployeesCards = Employees.map((emp) => {
        return (
            <div elevation={10} className='EmployeeList'>
            <Paper elevation={15} onClick={()=>handleClick(emp.email)}>
            <img src={`http://127.0.0.1:8000${emp.employee_image}`}  />
                
                
                <h3 key={emp.id} className='userListName' >{`${emp.First_name} ${emp.Middle_name}`}</h3>
                <p key={emp.id} className='EmployeeListEmail'> {emp.email}</p>
              
                <Typography className='EmpphoneNumber'>{emp.phoneNumber}</Typography>
                <Typography className='Empdepartment'>Role:-{emp.department}</Typography>
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
