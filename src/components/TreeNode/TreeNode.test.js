import React, { createContext } from 'react';
import { mount } from 'enzyme';
import TreeNode from './TreeNode';

import { initializedTestData } from '../../utils/testData';
import ConfigContext from '../FolderTree/context';

let node;

const checkNode = jest.fn();
const renameNode = jest.fn();
const deleteNode = jest.fn();
const addNode = jest.fn();
const toggleOpen = jest.fn();
const onNameClick = jest.fn();

const render = ({
  iconComponents = {},
  indentPixels = 4,
  showCheckbox = true,
  readOnly = false,

  path,
  name,
  checked,
  isOpen,
  children,
  ...restData
}) => {
  const configs = {
    handleCheck: checkNode,
    handleRename: renameNode,
    handleDelete: deleteNode,
    handleAddNode: addNode,
    handleToggleOpen: toggleOpen,
    onNameClick,

    iconComponents,
    indentPixels,
    showCheckbox,
    readOnly,
  };

  node = mount((
    <ConfigContext.Provider
      value={ configs }
    >
      <TreeNode
        path={ path }
        name={ name }
        checked={ checked }
        isOpen={ isOpen }
        children={ children }
        { ...restData }
      />
    </ConfigContext.Provider>
  ));
};

test('render', () => {
  render({
    path: [],
    ...initializedTestData,
  });
});
