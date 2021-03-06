import {
    LOAD_CUSTOMERS,
    FILTER_CUSTOMERS
} from '../actions/types';

const INITIAL_STATE = {
  customers: [],
  filteredCustomers: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        filteredCustomers: action.payload
      };
    case FILTER_CUSTOMERS:
      return {
        ...state,
        filteredCustomers: action.payload
        };
    default:
      return state;
  }
};
