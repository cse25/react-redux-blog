import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}

// data is available on action.payload.data
// reducer needs to return a new object when we return our state
