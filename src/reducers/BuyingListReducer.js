import {
  ADD_TO_LIST,
  CHECK_AS_DONE,
  DELETE_ITEM,
  PUT_BACK
} from '../actions/types';
const INITIAL_STATE = {
  list: [],
  chekedList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_LIST: {
      const list = [...state.list, action.payload];
      return {...state, list};
    }
    case CHECK_AS_DONE: {
      const list = state.list.filter(item => item.id !== action.payload);
      const chekedItem = state.list.filter(item => item.id === action.payload)[0];
      const chekedList = [...state.chekedList, chekedItem];
      return {...state, list, chekedList};
    }
    case DELETE_ITEM: {
      const chekedList = state.chekedList.filter(item => item.id !== action.payload);
      return {...state, chekedList};
    }
    case PUT_BACK: {
      const chekedList = state.chekedList.filter(item => item.id !== action.payload);
      const getBackItem = state.chekedList.filter(item => item.id === action.payload)[0];
      const list = [...state.list, getBackItem];
      return {...state, list, chekedList};
    }
    default: return state;
  }
}
;
