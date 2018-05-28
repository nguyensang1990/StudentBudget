import {
  ADD_TO_LIST,
  CHECK_AS_DONE,
  DELETE_ITEM,
  PUT_BACK
} from './types';

export const addToList = (item) => ({
  type: ADD_TO_LIST,
  payload: item
});

export const checkAsDone = (id) => ({
  type: CHECK_AS_DONE,
  payload: id
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id
});

export const putItBack = (id) => ({
  type: PUT_BACK,
  payload: id
});
