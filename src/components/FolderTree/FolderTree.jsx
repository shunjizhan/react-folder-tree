import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  addUniqIds,
  setAllCheckedStatus,
  isValidCheckedStatus,
  checkNode,
  renameNode,
  deleteNode,
  addNode,
} from '../../utils/utils';
import TreeNode from '../TreeNode/TreeNode';
import UtilsContext from './context';

import './FolderTree.scss';

const FolderTree = ({
  data,
  onChange,
  initCheckedStatus = 'unchecked',
  iconComponents = {},
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

      case 'customed':
      default:
        if (!isValidCheckedStatus(initState)) {
          console.warn('checked status is not valid! All checked status was reset to unchecked.');
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

  if (!treeState) return null;

  const {
    name,
    checked,
    children: childrenData,
  } = treeState;

  return (
    <div className='FolderTree'>
      <UtilsContext.Provider
        value={{
          handleCheck,
          handleRename,
          handleDelete,
          handleAddNode,
          iconComponents,
        }}
      >
        <TreeNode
          path={ [] }
          name={ name }
          checked={ checked }
          childrenData={ childrenData }
          handleCheck={ handleCheck }
        />
      </UtilsContext.Provider>
    </div>
  );
};

FolderTree.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  initCheckedStatus: PropTypes.oneOf(['unchecked', 'checked', 'customed']),
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
};

export default FolderTree;
