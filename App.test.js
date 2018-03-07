import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import {
  degreesToRadians,
  orthodromicDistance
} from './src/helpers';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('converts grades to rads', () => {
  const grade = 45;
  const expectedResult = '0.7853981634';
  expect(degreesToRadians(grade).toFixed(10)).toEqual(expectedResult);
});

it('calculates the distance between two points', () => {
  const dublin = { latitude: 53.350140, longitude: -6.266155 };
  const madrid = { latitude: 40.416775, longitude: -3.703790 };
  const expectedResult = '1453';
  const acceptance = 0.02;
  const distance = orthodromicDistance(dublin, madrid);

  expect(distance).toBeGreaterThanOrEqual(expectedResult * (1 - acceptance));
  expect(distance).toBeLessThanOrEqual(expectedResult * (1 + acceptance));
});
