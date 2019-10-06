import axios from 'axios';
import {NEWS_SOURCE, NEWS_ERROR_RECEIVE, SEARCH}  from './actionsTypes';


const URL="http://www.mocky.io/v2/5d8686a032000024b607b40e?callback?myfunction";

     function storeNewsObject(allNews) {
    return {
        type: NEWS_SOURCE,
        allNews:allNews,
        successMessage:'successfully news loading',
        color:'success'
}
}
function searchObject(value){
  return {
    type:SEARCH,
    inputSearch:value
  }
}
export function search(value){
 return dispatch=>{
   return dispatch(searchObject(value));
 }
}

export function invaldNewsORGetting(error) {
    return {
        type: NEWS_ERROR_RECEIVE,
        errorMessage:"invaldNewsORGetting",
        color:'danger',
        showAlert:false
        }
}
 export function loagNewsObject() {
    return dispatch => {
      return axios.get(URL)
        .then(response => dispatch(storeNewsObject(response.data)))
        .catch(error=>dispatch(invaldNewsORGetting(error)))
    }
  }

