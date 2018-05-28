import {
  ADD_INCOME,
  ADD_EXPENSE,
  TOTAL_INCOME,
  TOTAL_EXPENSE,
  DELETE_INCOME,
  DELETE_EXPENSE
} from '../actions/types';

const INITIAL_STATE = {
  income: [],
  expense: [],
  totalIncome: 0,
  totalExpense: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_INCOME: {
      const income = [...state.income, action.payload];
      return {...state, income}; }
    case ADD_EXPENSE: {
      const expense = [...state.expense, action.payload];
      return {...state, expense}; }
    case TOTAL_INCOME: {
      const income = [...state.income];
      let totalIncome = 0;
      income.map(cur => {
        totalIncome += Number(cur.amount);
      });
      return {...state, totalIncome};
    }
    case TOTAL_EXPENSE: {
      const expense = [...state.expense];
      let totalExpense = 0;
      expense.map(cur => {
        totalExpense += Number(cur.amount);
      });
      return {...state, totalExpense};
    }
    case DELETE_INCOME: {
      const income = state.income.filter(item => item.idi !== action.payload);
      return {...state, income};
    }
    case DELETE_EXPENSE: {
      const expense = state.expense.filter(item => item.ide !== action.payload);
      return {...state, expense};
    }

    default: return state;
  }
}
;
