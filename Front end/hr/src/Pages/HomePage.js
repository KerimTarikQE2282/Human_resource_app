
import React from 'react';
import UserStats from '../Components/HomePageComponents.js/UserStats';
import Calendar from '../Components/HomePageComponents.js/Calendar';
import TaskList from '../Components/HomePageComponents.js/TaskList';
import Welcome from '../Components/HomePageComponents.js/Welcome';
import { load_user } from '../actions/auth';
import { connect, useSelector } from 'react-redux';

function LandingPage({user,load_user}) {
console.log('user at home ===>',user)
React.useEffect(()=>{
load_user()
},[])
  return (
    <div className='HomePage'>
      <Welcome props={user} />
    <img src={user}/>
      <TaskList />
      <UserStats />
      <Calendar />
    </div>
  );
}
const mapStateToProps = state =>({
  isAuthenticated : state.auth.isAuthenticated,
  user:state.auth.user
});
export default connect(mapStateToProps,{load_user})(LandingPage);