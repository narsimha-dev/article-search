import {combineReducers} from 'redux';
import {REGISTER_USER, TOKEN, LOGIN_USER, INVALID_USER_EXISTING_USER, ALERT_MESSAGE} from '../actions/userAction';


const initialseState={
  token:'',
  message:'',
  isLoging:'',
  color:'',
  showAlert:''

}
function userGettingToken(state=initialseState,action) {
    switch (action.type) {
       
        case REGISTER_USER:
          return {...state, message:action.successRegister,color:action.color}
        case TOKEN:
              return {...state,token:action.token.data.token,  showAlert:!action.showAlert, message:action.successMessage,color:action.color}
        case LOGIN_USER:
          return {...state, isLoging:!action.isLoging}
        case INVALID_USER_EXISTING_USER:
          return {...state, message:action.errorMessage,color:action.color,showAlert:!action.showAlert}  
        default:
          return state;
      }
}  

function  showAlertMessages(state=initialseState, action) {
  switch(action.type){

    case ALERT_MESSAGE:
    return {...state, showAlert:!action.showAlert}
    default:
      return state;
  }
  
}
  const rootReducer = combineReducers({userGettingToken, showAlertMessages})
  export default rootReducer;