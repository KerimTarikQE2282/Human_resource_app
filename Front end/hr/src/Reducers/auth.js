import {
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGIN_USER_SUCCESS,
LOGIN_USER_FAIL

} from '../actions/types'


const initialState={
access:localStorage.getItem('access'),
refresh:localStorage.getItem('refresh'),
isAuthenticated:null,
user:null

}
export default function(state=initialState,action){
    const {type,payload}=action
    switch(type){
        case LOGIN_SUCCESS:
            return{
          localStorage.setItem('access',payload.access)
            }
        case LOGIN_FAIL:
            return{

                }
        default :
        return state
    }
}
 