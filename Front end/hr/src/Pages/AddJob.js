import { TextField } from '@mui/material';
import React from 'react'

function AddJob() {
    console.log('hello from add Job');
  return (
    <div className='PostJob'>
        <form>
            <TextField
            variant='contained'
            label='Post Job'
            />
        </form>
    </div>
  )
}

export default AddJob