import axios from 'axios';
import {CARD_IMAGE,NEWS_ERROR_RECEIVE}  from './actionsTypes';

//const URL="https://www.newsbtc.com/wp-content/uploads/2019/09/shutterstock_680368252-4-1200x780.jpg";
const URL="https://www.newsbtc.com/wp-content/uploads/2019/09/shutterstock_680368252-4-1200x780.jpg?mocky-delay=100ms";

     function storeCardImage(image) {

    return {
        type: CARD_IMAGE,
        image:image,
        successMessage:'successfully image loading',
        color:'success'
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
 export function loadCardImage() {
    return dispatch => {
      return axios.get(URL,{
         responseType: 'arraybuffer'
    })
    .then(response => new Buffer(response.data, 'binary').toString('base64'))
    .then(data => dispatch(storeCardImage(data)))
    .catch(error=>dispatch(invaldNewsORGetting(error)))
    }
  //   axios.get(URL, { responseType:"blob" })
  //   .then(response=> {
  //       var reader = new window.FileReader();
  //       reader.readAsDataURL(response.data); 
  //       reader.onload = function() {
  //           var imageDataUrl = reader.result;
  //           imageElement.setAttribute("src", imageDataUrl);
  //       }
  //   })
  //   .then(data=>dispatch(storeCardImage(data)))
  //   .catch(error=>dispatch(invaldNewsORGetting(error)))
  // };
  }

