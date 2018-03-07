
// import CustomersData from '../assets/customers.json';
import {
  EARTH_RADIUS,
  // OFFICE_LOCATION
} from '../config/constants';

// export const processCustomersFromFile = () => {
//   CustomersData.forEach((customer) => {
//     const { latitude, longitude } = customer;
//     customer.distanceToOffice = orthodromicDistance({ latitude, longitude }, OFFICE_LOCATION);
//   });
//   console.log(CustomerData);
//   return CustomersData;
// };

// const filteredCustomers = _.filter(allCustomers,
//   (customer) => customer.distanceToOffice <= distance
// );

export const degreesToRadians = (degrees) => (
  degrees * (Math.PI / 180)
);

export const orthodromicDistance = (locationA, locationB) => {
  const φ1 = degreesToRadians(locationA.latitude);
  const φ2 = degreesToRadians(locationB.latitude);
  const λ1 = degreesToRadians(locationA.longitude);
  const λ2 = degreesToRadians(locationB.longitude);
  const Δλ = degreesToRadians(Math.abs(λ2 - λ1));

  const firstOperator = Math.sin(φ1) * Math.sin(φ2);
  const secondOperator = Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ);

  // Distance in meters
  const distance = (EARTH_RADIUS * Math.acos(firstOperator + secondOperator)) / 1000;

  return distance;
};
