import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    itemsromInitialStateInnewReducerjs: [],
    findTopicFromInitialStateInnewReducerjs: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCH_POSTS:
    return { 
        ...state,
        findTopicFromSwitchStatementInNewReducerjs: action.payload
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
