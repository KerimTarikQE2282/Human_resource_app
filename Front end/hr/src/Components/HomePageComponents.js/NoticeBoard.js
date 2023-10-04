import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'

function NoticeBoard() {
  const [notice,setNotice]=React.useState([])
  
  React.useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/View_Jobs/')
    .then(res=>{
      setNotice(res.data)})
    .catch(err=>{
      console.log(err)
    })
  },[])
  const tableRows= notice?.map((row) => (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      className='TabelRow'
    >
      <TableCell align="center">{row.JobName}</TableCell>
    
    </TableRow>
  ))
  console.log(notice)
  return (
    
   <Paper className='NoticeDiv' elevation={2}>
    
    <Typography
    variant='h5'
    >Notice Board</Typography>
    <Divider className='Divider'/>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 100 }} aria-label="simple table">
    <TableBody>
    {tableRows}
    </TableBody>
    </Table>
    </TableContainer>
   </Paper>
  )
}

export default NoticeBoard