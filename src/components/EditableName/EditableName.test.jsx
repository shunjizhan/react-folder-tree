import React from 'react';
import { mount } from 'enzyme';
import {
  AiOutlineClose,
  AiOutlineCheck,
} from 'react-icons/ai';

import EditableName from './EditableName';
import { getDefaultIcon } from '../../utils/iconUtils';

describe('EditableName', () => {
  const _OKIcon = getDefaultIcon(AiOutlineCheck);
  const _CancelIcon = getDefaultIcon(AiOutlineClose);

  const _onNameChange = jest.fn;
  const _setIsEditing = jest.fn;
  const _nodeData = {
    name: 'bitcoin',
    path: [0, 1],
    url: '/btc/eth',
  };

  let editableName;
  // let input;
  // let inputDOM;

  const render = ({
    isEditing = false,
    setIsEditing = _setIsEditing,
    onNameChange = _onNameChange,
    OKIcon = _OKIcon,
    CancelIcon = _CancelIcon,
    nodeData = _nodeData,
  } = {}) => {
    editableName = mount((
      <EditableName
        onNameChange={ onNameChange }
        isEditing={ isEditing }
        setIsEditing={ setIsEditing }
        nodeData={ nodeData }
        OKIcon={ OKIcon }
        CancelIcon={ CancelIcon }
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
    render();
    expect(editableName.exists()).toEqual(true);
  });

  // TODO: add more tests
});
