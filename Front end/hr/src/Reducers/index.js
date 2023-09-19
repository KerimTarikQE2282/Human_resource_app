import {combineReducers} from 'redux';
import auth from './auth';
import Registrations from './Registrations_REDUCER'
import  MyEmployee  from './MyEmployee';


export default combineReducers({
  auth,Registrations,MyEmployee
})