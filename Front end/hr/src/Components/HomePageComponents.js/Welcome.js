import { Paper, Typography } from '@mui/material'
import React from 'react'

function Welcome(props) {
  const name=props.props.name
 
  return (
    <Paper className='TaskList'>
    <Typography variant='h5'>{name}</Typography>
     
     </Paper>
  )
}

export default Welcome
