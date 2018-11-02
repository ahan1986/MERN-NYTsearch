import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    itemsromInitialStateInnewReducerjs: [],
    findTopicFromInitialStateInnewReducerjs: {}
    //findTopicFromSwitchStatementInNewReducerjs: {}  //cannot use the same name in the switch statement for the initialState. I'm sure there is a way using es6....
};

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCH_POSTS:
    state = { 
        ...state,
        findTopicFromSwitchStatementInNewReducerjs: action.payload
    };
    break;
  case NEW_POST:
    return {
        ...state,
        items: action.payload
    }
    
  default:
    break;
  }
  
  return state;
}
