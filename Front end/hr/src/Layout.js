import React , {useEffect} from 'react'
import NavBar from './Components/NavBar'
import {connect} from 'react-redux'
import {checkAuthenticated , load_user} from './actions/auth'
import Drawer from './Components/MYDrawer'
function Layout(props) {
useEffect(()=>
{
props.checkAuthenticated();
props.load_user();
}
,[]
)
  return (

    <div className='Layout'>
      <div><Drawer/></div>
      <div><NavBar/>
      <div className='layoutChildren'>{props.children}</div>
    </div>
       
    </div>
  )
}

export default connect(null,{checkAuthenticated,load_user})(Layout)