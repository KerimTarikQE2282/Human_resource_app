import React from 'react'
import UserStats from '../Components/HomePageComponents.js/UserStats'
import Calendar from '../Components/HomePageComponents.js/Calendar'
import TaskList from '../Components/HomePageComponents.js/TaskList'
function LandingPage() {
  return (
    <div>
      <h1>hello</h1>
        <UserStats/>
        <Calendar/>
        <TaskList/>

    </div>
  )
}

export default LandingPage