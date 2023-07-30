import React, { Fragment } from 'react';
import { AppBar, Box, Button, IconButton, Input, Paper, TextField, Toolbar, Typography, Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, Navigate } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

function NavBar({ logout, isAuthenticated }) {
  const guestLinks = () => {
    return (
      <Fragment>
        <Button>
          <Link to='/' />
        </Button>
      </Fragment>
    );
  };
  const authLinks = () => {
    return (
      <Button variant='contained' color='error' onClick={logout}>
        Logout
      </Button>
    );
  };
  const HandleLogout = () => {
    logout();
  };
  if(!isAuthenticated){
    return  <Navigate replace to='/'/>
  }
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
      <br></br>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBar);