import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  addUniqIds,
  setCheckedStatus,
  isValidCheckedStatus,
} from '../../utils/utils';

const FolderTree = ({ data, onChange, initCheckedStatus = 'unchecked' }) => {
  const [treeState, setTreeState] = useState(null);
  useEffect(() => {
    let initState = addUniqIds(data);

    switch (initCheckedStatus) {
      case 'unchecked':
        initState = setCheckedStatus(initState, 0);
        break;

      case 'checked':
        initState = setCheckedStatus(initState, 1);
        break;

      case 'customed':
      default:
        if (!isValidCheckedStatus(initState)) {
          console.warn('checked status is not valid! All checked status was reset to unchecked.');
          initState = setCheckedStatus(initState, 0);
        }
    }

    setTreeState(initState);
  }, [data, initCheckedStatus]);

  return (
    <div id='FolderTree'>
      data
    </div>
  );
};

FolderTree.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  initCheckedStatus: PropTypes.oneOf(['unchecked', 'checked', 'customed']),
};

export default FolderTree;
