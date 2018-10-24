import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    findTopic: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCH_POSTS:
    return { 
        ...state,
        findTopic: action.payload
    };
  case NEW_POST:
    return {
        ...state,
        items: action.payload
    }
  default:
    return state
  }
}
