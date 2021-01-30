import {
  iconContainerClassName,
  iconClassName,
} from './iconUtils';

describe('iconContainerClassName', () => {
  it('returns correct class name', () => {
    expect(iconContainerClassName('xxx')).toEqual('iconContainer xxx');
  });
});

describe('iconClassName', () => {
  it('returns correct class name', () => {
    expect(iconClassName('xxx')).toEqual('icon xxx');
  });
});
