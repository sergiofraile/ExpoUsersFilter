import { combineReducers } from 'redux';
import CustomersReducer from './CustomersReducer';

export default combineReducers({
    customers: CustomersReducer
});
