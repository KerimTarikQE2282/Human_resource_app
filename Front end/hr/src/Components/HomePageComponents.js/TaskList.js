import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
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
    <TableCell align="left">{row.Task_name}</TableCell>
  
  </TableRow>
))
console.log(tasks)
  return (
    <Paper className='TaskList'  elevation={2}>
      <div className='InnerEmailAndTask'>
   <Typography variant='h5'> <strong>Task lists</strong></Typography>
   <Divider className='Divider'/>
    <TableContainer >
    <Table sx={{ minWidth: 100 }} aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell  align="left">Your Tasks</TableCell>
           
          </TableRow>
        </TableHead>
    <TableBody>
    {tableRows}
    </TableBody>
    </Table>
    </TableContainer>
    </div>
    </Paper>
  )
}
const mapStateToProps=State=>({
  //nothing yet
})
export default connect (mapStateToProps,{MyData})(TaskList)
