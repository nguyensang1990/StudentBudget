import {
  ADD_INCOME,
  ADD_EXPENSE,
  TOTAL_INCOME,
  TOTAL_EXPENSE,
  DELETE_INCOME,
  DELETE_EXPENSE
} from './types';

export const addIncome = ({idi, name, amount}) => ({
  type: ADD_INCOME,
  payload: {idi, name, amount}
});

export const addExpense = ({ide, name, amount}) => ({
  type: ADD_EXPENSE,
  payload: {ide, name, amount}
});

export const getTotalIncome = () => ({
  type: TOTAL_INCOME
});

export const getTotalExpense = () => ({
  type: TOTAL_EXPENSE
})
;

export const deleteIncome = (id) => ({
  type: DELETE_INCOME,
  payload: id
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id
});
