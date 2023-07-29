import React , {useEffect} from 'react'
import NavBar from './Components/NavBar'
import {connect} from 'react-redux'
import {checkAuthenticated , load_user} from './actions/auth'
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
       <NavBar/>
    {props.children}
    </div>
  )
}

export default connect(null,{checkAuthenticated,load_user})(Layout)