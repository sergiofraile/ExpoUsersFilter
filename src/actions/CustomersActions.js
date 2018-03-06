// import * as _ from 'lodash';
import CustomersData from '../assets/customers.json';
import {
    LOAD_CUSTOMERS,
    // FILTER_CUSTOMERS
} from './types';

export const getAllCustomers = () => (dispatch) => {
  // console.log('Customers data: ', CustomersData);
  dispatch({ type: LOAD_CUSTOMERS, payload: CustomersData });
};

// export const filterCustomers = () => (dispatch, getState) => {

// };
