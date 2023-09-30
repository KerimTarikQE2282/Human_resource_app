import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { getEmail } from '../../actions/EmailAction'
import axios from 'axios'
import DangerousIcon from '@mui/icons-material/Dangerous';
import DoneIcon from '@mui/icons-material/Done';
function Emails({getEmail,user,userEmails}) {
  React.useEffect(()=>{
    getEmail(user?.id)
  },[user])
  console.log(userEmails)

  const [availableEmployees, setAvailableEmployees] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:8000/api/Employee-List/${user?.Email}/`)
      .then(res => setAvailableEmployees(res.data))
      .catch(error => console.error(error));
  }, []);

  const tableRows= userEmails?.map((row) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      className='TabelRow'
    >
      <TableCell align="center">{row.EmailSubject}</TableCell>

      {/* {availableEmployees.map(emp=>{
      emp.id==row.SentBy &&  <TableCell align="right">{ emp.email}</TableCell>
      })} */}
      {row.seen ? <TableCell align="right" sx={{marginRight:15}}><DoneIcon/></TableCell> :<TableCell align="right" sx={{marginRight:15}}><DangerousIcon/></TableCell> }
      
    </TableRow>
  ))






  return (
    <Paper className='Email'>
      <Typography variant='h5'>Email</Typography>
      
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableBody>
    {tableRows}
    </TableBody>
    </Table>
    </TableContainer>
    </Paper>
  )
}
const mapStatetoProps=state=>({
  user:state.auth.user,
  userEmails:state.EmailReducer.Email
})
export default connect (mapStatetoProps,{getEmail})(Emails)
