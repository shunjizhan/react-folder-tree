import React from 'react';
import { mount } from 'enzyme';
import EditableName from './EditableName';

const onNameChange = jest.fn;

describe('EditableName', () => {
  let editableName;
  // let input;
  // let inputDOM;

  const render = name => {
    editableName = mount((
      <EditableName
        name={ name }
        onNameChange={ onNameChange }
      />
    ));
    // input = editableName.find('input.editingName');
    // inputDOM = input.getDOMNode();
  };

  const clean = () => {
    editableName.unmount();
    editableName = null;
    // input = null;
    // inputDOM = null;
  };

  afterEach(clean);

  it('renders', () => {
    render('bitcoin');
    expect(editableName.exists()).toEqual(true);
  });

  // TODO: add more tests
});
