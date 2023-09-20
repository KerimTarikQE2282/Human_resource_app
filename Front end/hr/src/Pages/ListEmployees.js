import { Divider, Paper, Typography } from '@mui/material';
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeDetail from './EmployeeDetail';
import { MyEmployee } from '../actions/MyEmployee';
import { connect, useDispatch } from 'react-redux';
function ListEmployees({user}) {
    const [Employees,setEmployees]=React.useState([])
    const navigate=useNavigate()
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
        
        }
    }; 
    console.log('my user======>',user.email)
    React.useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Employee-List/${user.email}/`,config)
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
            <div elevation={10} className='EmployeeList'>
            <Paper elevation={5} onClick={()=>handleClick(emp.email)}>
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

const mapStateToProps = state =>({
    user:state.auth.user
});
export default connect(mapStateToProps, {MyEmployee})(ListEmployees);
