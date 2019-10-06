import {SEARCH,NEWS_SOURCE} from '../actions/actionsTypes';

const initialState = {
 allNews:[],
 message:'',
 isLoading:false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH: {
      const {value} = action;
      const works = state.contents.filter((val) => val.includes(value));
      return {...state, value, works};
    }
    case NEWS_SOURCE:
      return {...state, allNews:action.allNews,message:action.successMessage, isLoading:!state.isLoading}
    default:
      return state;
  }
}
export function bindActionCreators(){
  return null;
}