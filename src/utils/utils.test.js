import {
  testData,
  testDataWithId,
} from './testData';
import {
  addUniqIds,
  setCheckedStatus,
  isValidCheckedStatus,
} from './utils';

test('addUniqIds', () => {
  expect(addUniqIds(testData)).toEqual(testDataWithId);
  expect(addUniqIds({})).toEqual({ id: 0 });
});

test('setCheckedStatus', () => {
  expect(setCheckedStatus(testData)).toEqual(testData);
});

test('isValidCheckedStatus', () => {
  expect(isValidCheckedStatus(testData)).toEqual(true);
});
