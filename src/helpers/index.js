
import {
  EARTH_RADIUS
} from '../config/constants';

// Helper method to convert degrees to radians
export const degreesToRadians = (degrees) => (
  degrees * (Math.PI / 180)
);

// Method to calculate the orthodromic distance
export const orthodromicDistance = (locationA, locationB) => {
  const φ1 = degreesToRadians(locationA.latitude);
  const φ2 = degreesToRadians(locationB.latitude);
  const λ1 = degreesToRadians(locationA.longitude);
  const λ2 = degreesToRadians(locationB.longitude);
  const Δλ = degreesToRadians(Math.abs(λ2 - λ1));

  const firstOperator = Math.sin(φ1) * Math.sin(φ2);
  const secondOperator = Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ);

  // Distance in kilometers
  const distance = (EARTH_RADIUS * Math.acos(firstOperator + secondOperator)) / 1000;

  return distance;
};
