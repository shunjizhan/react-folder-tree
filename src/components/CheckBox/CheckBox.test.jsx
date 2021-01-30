import React from 'react';
import { mount } from 'enzyme';
import CheckBox from './CheckBox';

const onChange = jest.fn();

describe('CheckBox', () => {
  let checkbox;
  let input;
  let inputDOM;

  const render = status => {
    checkbox = mount((
      <CheckBox
        status={ status }
        onChange={ onChange }
      />
    ));
    input = checkbox.find('input.checkboxDOM');
    inputDOM = input.getDOMNode();
  };

  const clean = () => {
    checkbox.unmount();
    checkbox = null;
    input = null;
    inputDOM = null;
  };

  afterEach(clean);

  describe('renders correct check status', () => {
    it('when status is 0', () => {
      render(0);
      expect(input.prop('checked')).toEqual(false);
      expect(inputDOM.indeterminate).toEqual(false);
    });

    it('when status is 1', () => {
      render(1);
      expect(input.prop('checked')).toEqual(true);
      expect(inputDOM.indeterminate).toEqual(false);
    });

    it('when status is 0.5', () => {
      render(0.5);
      expect(input.prop('checked')).toEqual(false);
      expect(inputDOM.indeterminate).toEqual(true);
    });
  });

  it('trigger onChange when click', () => {
    render(0);
    input.simulate('change', { target: { checked: true } });
    expect(onChange).toHaveBeenCalled();
  });
});
