import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  addUniqIds,
  setCheckedStatus,
  isValidCheckedStatus,
} from '../../utils/utils';

const FolderTree = ({ data, onChange, initCheckedStatus = 'unchecked' }) => {
  let initState = addUniqIds(data);
  switch (initCheckedStatus) {
    case 'unchecked':
      initState = setCheckedStatus(initState, 0);
      break

    case 'checked':
      initState = setCheckedStatus(initState, 1);
      break

    case 'customed':
    default:
      if (!isValidCheckedStatus(initState)) {
        console.warn('checked status is not valid! All checked status was reset to unchecked.')
        initState = setCheckedStatus(initState, 0);
      }
  }

  const [treeState, setTreeState] = useState(initState);
  console.log(treeState);

  return (
    <div id='FolderTree'>
      data
    </div>
  );
};

FolderTree.protoTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  initState: PropTypes.oneOf(['unchecked', 'checked', 'customed'])
}

export default FolderTree