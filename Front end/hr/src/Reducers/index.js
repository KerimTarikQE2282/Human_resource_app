import {combineReducers} from 'redux';
import auth from './auth';
import Registrations from './Registrations_REDUCER'
import  MyEmployee  from './MyEmployee';
import DataPass from './DataPass';
import EmailReducer from './EmailReducer';

export default combineReducers({
  auth,Registrations,MyEmployee,DataPass,EmailReducer
})