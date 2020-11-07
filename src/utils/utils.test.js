import testData from './testData';
import {
  addUniqIds,
  setCheckedStatus,
  isValidCheckedStatus,
} from './utils';

test('addUniqIds', () => {
  expect(addUniqIds(testData)).toEqual(testData);
});

test('setCheckedStatus', () => {
  expect(setCheckedStatus(testData)).toEqual(testData);
});

test('isValidCheckedStatus', () => {
  expect(isValidCheckedStatus(testData)).toEqual(true);
});