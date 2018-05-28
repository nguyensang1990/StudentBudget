import { combineReducers } from 'redux';
import BudgetReducer from './BudgetReducer';
import BuyingListReducer from './BuyingListReducer';

export default combineReducers({
  budgetData: BudgetReducer,
  buyingListData: BuyingListReducer
});
