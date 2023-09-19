import { Divider, Paper, Typography } from '@mui/material';
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeDetail from './EmployeeDetail';
import { MyEmployee } from '../actions/MyEmployee';
import { connect, useDispatch } from 'react-redux';
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
    const dispatch=useDispatch()
    const handleClick=(email)=>{
       
        dispatch(MyEmployee(email))
        navigate('/EmployeeDetail')
    }
    console.log(Employees)
    const EmployeesCards = Employees.map((emp) => {
        return (
            <div className='EmployeeList'>
            <Paper elevation={15} onClick={()=>handleClick(emp.email)}>
            <img src={`http://127.0.0.1:8000${emp.employee_image}`}  />
                
                
                <Typography key={emp.id} className='userListName' >{`${emp.First_name} ${emp.Middle_name}`}</Typography>
                <Typography key={emp.id} className='EmployeeListEmail'> {emp.email}</Typography>
               <Divider/>
                <Typography>{emp.phoneNumber}</Typography>
                <Typography>{emp.department}</Typography>
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

const mapStateToProps = state =>({
   
});
export default connect(mapStateToProps, {MyEmployee})(ListEmployees);
