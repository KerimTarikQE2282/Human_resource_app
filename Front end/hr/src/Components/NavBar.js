
import React, { Fragment } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';

function NavBar({ logout, isAuthenticated }) {
  const navigate=useNavigate()
  const guestLinks = () => {
    return (
      <Fragment>
        <Button
        variant='contained'
        color='warning'
        >
          <Link to='/'>Home</Link>
        </Button>
      </Fragment>
    );
  };

  const authLinks = () => {
    return (
      <Button variant='contained' color='error' onClick={handleLogout}>
        Logout
      </Button>
    );
  };

  const handleLogout = () => {
    
    logout();
    navigate('/')
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className='NavBar'>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 20 }}></IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              HR system
            </Typography>
            {isAuthenticated ? authLinks() : guestLinks()}
          </Toolbar>
        </AppBar>
      </Box>
      <br />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);