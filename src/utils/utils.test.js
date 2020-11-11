import {
  testData,
  testDataWithId,
  initializedTestData,
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
  expect(setCheckedStatus(addUniqIds(testData), 0)).toEqual(initializedTestData);
});

test('isValidCheckedStatus', () => {
  expect(isValidCheckedStatus(testData)).toEqual(true);
});
