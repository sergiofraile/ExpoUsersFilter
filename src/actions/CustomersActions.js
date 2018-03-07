import _ from 'lodash';
import CustomersData from '../assets/customers.json';
import { orthodromicDistance } from '../helpers';
import {
    LOAD_CUSTOMERS,
    FILTER_CUSTOMERS
} from './types';
import {
   OFFICE_LOCATION,
   INITIAL_DISTANCE
} from '../config/constants';

// Redux action for the initial load of all customers
export const getAllCustomers = () => (dispatch) => {
  CustomersData.forEach((customer) => {
    const { latitude, longitude } = customer;
    // Precalculating distance to a fixed point during
    // the initial load. Proven more efficience than
    // recalculating the distance each time the list filters.
    customer.distanceToOffice = orthodromicDistance({ latitude, longitude }, OFFICE_LOCATION);
  });
  // Initial sort of the customers list. Won't be necessary to sort
  // each iteration of the filter.
  dispatch({ type: LOAD_CUSTOMERS, payload: _.sortBy(CustomersData, ['user_id']) });
  // Firing initial filtering based on the INITIAL_DISTANCE value.
  dispatch(filterCustomers(INITIAL_DISTANCE));
};

export const filterCustomers = (distance) => (dispatch, getState) => {
  // Getting original customers list from redux state
  const allCustomers = Array.from(getState().customers.customers);
  // Filtering with lodash based on distanceToOffice
  const filteredCustomers = _.filter(allCustomers,
    (customer) => customer.distanceToOffice <= distance
  );
  dispatch({ type: FILTER_CUSTOMERS, payload: filteredCustomers });
};
