import React from 'react'
import NavBar from './Components/NavBar'

function Layout(props) {

  return (

    <div className='Layout'>
       <NavBar/>
    {props.children}
    </div>
  )
}

export default Layout