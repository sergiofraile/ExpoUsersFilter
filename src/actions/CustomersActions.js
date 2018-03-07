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

export const getAllCustomers = () => (dispatch) => {
  CustomersData.forEach((customer) => {
    const { latitude, longitude } = customer;
    customer.distanceToOffice = orthodromicDistance({ latitude, longitude }, OFFICE_LOCATION);
  });
  dispatch({ type: LOAD_CUSTOMERS, payload: _.sortBy(CustomersData, ['user_id']) });
  dispatch(filterCustomers(INITIAL_DISTANCE));
};

export const filterCustomers = (distance) => (dispatch, getState) => {
  const allCustomers = Array.from(getState().customers.customers);
  const filteredCustomers = _.filter(allCustomers,
    (customer) => customer.distanceToOffice <= distance
  );
  dispatch({ type: FILTER_CUSTOMERS, payload: filteredCustomers });
};
