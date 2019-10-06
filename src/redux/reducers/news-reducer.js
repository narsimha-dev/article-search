import {SEARCH,NEWS_SOURCE,CARD_IMAGE} from '../actions/actionsTypes';

const initialState = {
 allNews:[],
 message:'',
 isLoading:false,
 image:[],
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
    default:
      return state;
  }
}
export function bindActionCreators(){
  return null;
}