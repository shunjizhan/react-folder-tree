import React from 'react';

import FolderTree from './FolderTree/FolderTree';
import testData from '../utils/testData';

const onChange = data => console.log(data);

const SandBox = () => (
  <div id='sandbox'>
    <FolderTree
      data={ testData }
      onChange={ onChange }
    />
  </div>
);

export default SandBox;
