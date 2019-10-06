import axios from 'axios';
import { NEWS_SOURCE, NEWS_ERROR_RECEIVE, SEARCH, SEARCH_TEXT, SEARCH_ITEMS } from './actionsTypes';

const URL = "http://www.mocky.io/v2/5d8686a032000024b607b40e?callback?myfunction";

function storeNewsObject(allNews) {
  return {
    type: NEWS_SOURCE,
    allNews: allNews,
    successMessage: 'successfully news loading',
    color: 'success'
  }
}
// throw error message 
export function handelError(error) {
  return {
    type: NEWS_ERROR_RECEIVE,
    errorMessage: "News information is not load, please try again...",
    color: 'danger',
    showAlert: false
  }
}
function searchObject(value) {
  return {
    type: SEARCH,
    inputSearch: value
  }
}
// store search text
function storeSearchText(text) {
  return {
    type: SEARCH_TEXT,
    searchText: text
  }
}
// fetch all search items
function storFilterItems(names) {
  return {
    type: SEARCH_ITEMS,
    searchNames: names
  }
}
//  calling component
export function search(value) {
  return dispatch => {
    return dispatch(searchObject(value));
  }
}
// calling component 
export function loagNewsObject() {
  return dispatch => {
    return axios.get(URL)
      .then(response => dispatch(storeNewsObject(response.data)))
      .catch(error => dispatch(handelError(error)))
  }
}
export function searchText(text) {
  return dispatch => {
    return dispatch(storeSearchText(text))
  }
}
export function filterItems(text) {
  return dispatch => {
    return dispatch(storFilterItems(text))
  }
}

