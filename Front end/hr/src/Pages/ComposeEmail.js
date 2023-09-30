import React, { useState, useEffect } from 'react';
import { Button, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { sendEmail } from '../actions/EmailAction';
import axios from 'axios';

function ComposeEmail({ sendEmail, user }) {
  const [email, setEmail] = useState({
    SentTo: null,
    SentBy:user.id,
    EmailSubject: null,
    EmailBody: null,

  });

  const [availableEmployees, setAvailableEmployees] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Employee-List/${user.Email}/`)
      .then(res => setAvailableEmployees(res.data))
      .catch(error => console.error(error));
  }, []);

  
  
  
  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    });
  };

  
  
  
  const handleSubmit = (e) => {
    sendEmail(email,user.id);
    e.preventDefault();
  };

  
  
  const Selector = availableEmployees.map(data => {
    return (
      <MenuItem key={data.id} value={data.id}>
        {data.First_name}
      </MenuItem>
    );
  });
console.log(user)
  return (
    <Paper className='composeEmail'>
      <Typography variant='h4'>Compose Email</Typography>
      <div className='EmailForm'>
        <form onSubmit={handleSubmit}>
       
       
        <Select
           
            value={email.SentTo}
            label="Recepient"
            onChange={handleChange}
            className='EmailRecipient'
            name='SentTo'

          >
            {Selector}
          
            </Select>
          <br />
          <TextField
            placeholder='Subject'
            name='EmailSubject'
            value={email.EmailSubject}
            className='EmailSubject'
            onChange={handleChange}
          />
          <br />
          <TextField
            placeholder='Body'
            name='EmailBody'
            value={email.EmailBody}
            className='Body'
            label="Body"
            multiline
            rows={10}
            onChange={handleChange}
          />
          <br />
          <Button type='submit' variant='contained'>Send</Button>
        </form>
      </div>
    </Paper>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { sendEmail })(ComposeEmail);