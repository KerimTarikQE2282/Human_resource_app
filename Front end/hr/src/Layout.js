import React, { useEffect } from 'react';
import NavBar from './Components/NavBar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from './actions/auth';
import Drawer from './Components/MYDrawer';

function Layout({ checkAuthenticated, load_user, currentUser, children }) {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated, load_user]);

  React.useEffect(()=>{

  },[])
  return (
    
    <div className='Layout'>
      <div>
       {/* {currentUser?.title == "dwadwa" && } */}
       <Drawer /> 
      </div>
      <div>
        <NavBar />
        <div className='layoutChildren'>{children}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.user,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(Layout);