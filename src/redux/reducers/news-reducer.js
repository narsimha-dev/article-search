import {SEARCH,NEWS_SOURCE,CARD_IMAGE,SEARCH_TEXT} from '../actions/actionsTypes';

const initialState = {
 allNews:[],
 message:'',
 isLoading:false,
 image:[],
 searchText: '',
    items: [ 'hello', 'wahhh', 'yo' ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH: {
      const {value} = action;
      const works = state.contents.filter((val) => val.includes(value));
      return {...state, value, works};
    }
    case NEWS_SOURCE:
      return {...state, allNews:action.allNews,message:action.successMessage, isLoading:!state.isLoading};
    case CARD_IMAGE:
      return {...state, image:action.image};
      case SEARCH_TEXT:
            return Object.assign({}, state, {
                searchText: action.text
            });
    default:
      return state;
  }
}
export function bindActionCreators(){
  return null;
}