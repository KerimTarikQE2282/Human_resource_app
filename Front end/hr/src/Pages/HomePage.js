
import React from 'react';

import Calendar from '../Components/HomePageComponents.js/Calendar';
import TaskList from '../Components/HomePageComponents.js/TaskList';
import Welcome from '../Components/HomePageComponents.js/Welcome';
import { load_user } from '../actions/auth';
import { connect, useSelector } from 'react-redux';
import NoticeBoard from '../Components/HomePageComponents.js/NoticeBoard';

function LandingPage({user,load_user}) {

  return (
    <div className='HomePage'>
      <Welcome props={user} />
      <Calendar />
      <br/>
      <NoticeBoard/>
      <TaskList  />
    
     
      
      
    
 
    </div>
  );
}
const mapStateToProps = state =>({
  isAuthenticated : state.auth.isAuthenticated,
  user:state.auth.user
});
export default connect(mapStateToProps,{load_user})(LandingPage);