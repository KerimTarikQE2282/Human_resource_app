import React from 'react'
import UserStats from '../Components/HomePageComponents.js/UserStats'
import Calendar from '../Components/HomePageComponents.js/Calendar'
import TaskList from '../Components/HomePageComponents.js/TaskList'
import Welcome from '../Components/HomePageComponents.js/Welcome'
function LandingPage() {
  return (
    <div className='HomePage'>
      <Welcome/>
      <TaskList/>
        <UserStats/>
        <Calendar/>
       

    </div>
  )
}

export default LandingPage