import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  addUniqIds,
  setAllCheckedStatus,
  isValidCheckedStatus,
  checkNode,
} from '../../utils/utils';
import TreeNode from '../TreeNode/TreeNode';

const FolderTree = ({ data, onChange, initCheckedStatus = 'unchecked' }) => {
  const [treeState, setTreeState] = useState(null);
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

    setTreeState(initState);
  }, [data, initCheckedStatus]);

  const handleTreeStateChange = newState => {
    setTreeState(newState);
    onChange(newState);
  };

  const handleCheck = (path, status) => {
    const newState = checkNode(treeState, path, status);
    handleTreeStateChange(newState);
  };

  if (!treeState) return null;

  const {
    name,
    checked,
    children: childrenData,
  } = treeState;

  return (
    <div id='FolderTree'>
      <TreeNode
        path={ [] }
        name={ name }
        checked={ checked }
        childrenData={ childrenData }
        handleCheck={ handleCheck }
      />
    </div>
  );
};

FolderTree.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  initCheckedStatus: PropTypes.oneOf(['unchecked', 'checked', 'customed']),
};

export default FolderTree;
