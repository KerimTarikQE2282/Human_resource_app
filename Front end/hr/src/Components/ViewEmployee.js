import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { AppBar, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function HireEmployee() {
    const [Employee,setEmployee]=React.useState([])
    const navigate = useNavigate();
 
    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
          .then(response => {
            console.log(response.data); // for debugging purposes
            setEmployee(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
      const handleFireClick=(id)=>{
        navigate(`/Fire/${id}`)
      }
      const EmployeeList = Employee.map(prev => {
        return (
            <>
    
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }}>
                  {prev.FirstName[0]}
                </Avatar>
              }
              title={prev.FirstName}
            />
            <CardActions  >
              <Button variant='outlined' sx={{ marginLeft: 'auto' }} onClick={()=>handleFireClick(prev.id)}>Fire</Button>
            </CardActions>
          </Card>
          </>
        );
      });
  return (
    <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR system
          </Typography>
          <Button color="inherit"><AddIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
      {EmployeeList}
      
      </div>
  )
}

export default HireEmployee