import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import TaskDetail from './TaskDetail'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import {MyData} from '../../actions/DataPass'





function TaskList({MyData}) {


 const navigate=useNavigate() 
const [tasks,setTasks]=React.useState([])
React.useEffect(()=>{
axios.get('http://127.0.0.1:8000/api/3/View_Tasks/')
.then(res=>{
  setTasks(res.data)
})
},[])

const handleClick=(row)=>{
  MyData(row)
  navigate('/TaskDetail')
}

const tableRows= tasks?.map((row) => (
  <TableRow
    key={row.name}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    className='TabelRow'
    onClick={()=>handleClick(row)}
  >
    <TableCell align="center">{row.Task_name}</TableCell>
  
  </TableRow>
))
console.log(tasks)
  return (
    <Paper className='TaskList'  elevation={2}>
   <Typography variant='h5'> Task lists</Typography>
   <Divider className='Divider'/>
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
const mapStateToProps=State=>({
  //nothing yet
})
export default connect (mapStateToProps,{MyData})(TaskList)
