import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  addUniqIds,
  checkNode,
  setAllCheckedStatus,
  isValidCheckedStatus,
  toggleOpen,
  setAllOpenStatus,
  isValidOpenStatus,
  renameNode,
  deleteNode,
  addNode,
} from '../../utils/utils';
import TreeNode from '../TreeNode/TreeNode';
import UtilsContext from './context';
import { testData } from '../../utils/testData';

import './FolderTree.scss';

const FolderTree = ({
  data,
  onChange = console.log,
  initCheckedStatus = 'unchecked',
  initOpenStatus = 'open',
  iconComponents = {},
  indentPixels = 30,
}) => {
  const [treeState, setTreeState] = useState(null);

  const handleTreeStateChange = newState => {
    setTreeState(newState);
    onChange(newState);
  };

  useEffect(() => {
    let initState = addUniqIds(data);

    switch (initCheckedStatus) {
      case 'unchecked':
        initState = setAllCheckedStatus(initState, 0);
        break;

      case 'checked':
        initState = setAllCheckedStatus(initState, 1);
        break;

      default:
        if (!isValidCheckedStatus(initState)) {
          console.warn('checked status is not provided! Fell back to all unchecked.');
          initState = setAllCheckedStatus(initState, 0);
        }
    }

    switch (initOpenStatus) {
      case 'open':
        initState = setAllOpenStatus(initState, true);
        break;

      case 'close':
        initState = setAllOpenStatus(initState, false);
        break;

      default:
        if (!isValidOpenStatus(initState)) {
          console.warn('open status is not provided! Fell back to all opened.');
          initState = setAllCheckedStatus(initState, 0);
        }
    }

    handleTreeStateChange(initState);
  }, [data, initCheckedStatus]);

  const handleCheck = (path, status) => {
    const newState = checkNode(treeState, path, status);
    handleTreeStateChange(newState);
  };

  const handleRename = (path, newName) => {
    const newState = renameNode(treeState, path, newName);
    handleTreeStateChange(newState);
  };

  const handleDelete = path => {
    const newState = deleteNode(treeState, path);
    handleTreeStateChange(newState);
  };

  const handleAddNode = (path, type = 'file') => {
    const newState = addNode(treeState, path, type);
    handleTreeStateChange(newState);
  };

  const handleToggleOpen = (path, isOpen) => {
    const newState = toggleOpen(treeState, path, isOpen);
    handleTreeStateChange(newState);
  };

  if (!treeState) return null;

  const {
    name,
    checked,
    children,
    isOpen,
  } = treeState;

  return (
    <div className='FolderTree'>
      <UtilsContext.Provider
        value={{
          handleCheck,
          handleRename,
          handleDelete,
          handleAddNode,
          handleToggleOpen,
          iconComponents,
          indentPixels,
        }}
      >
        <TreeNode
          path={ [] }
          name={ name }
          checked={ checked }
          isOpen={ isOpen }
          childrenData={ children }
          handleCheck={ handleCheck }
        />
      </UtilsContext.Provider>
    </div>
  );
};

FolderTree.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func,

  initCheckedStatus: PropTypes.string,
  initOpenStatus: PropTypes.string,
  iconComponents: PropTypes.shape({
    FileIcon: PropTypes.func,
    FolderIcon: PropTypes.func,
    FolderOpenIcon: PropTypes.func,
    EditIcon: PropTypes.func,
    DeleteIcon: PropTypes.func,
    CancelIcon: PropTypes.func,
    AddFileIcon: PropTypes.func,
    AddFolderIcon: PropTypes.func,
    CaretRightIcon: PropTypes.func,
    CaretDownIcon: PropTypes.func,
  }),
  indentPixels: PropTypes.number,
};

export { testData };
export default FolderTree;
