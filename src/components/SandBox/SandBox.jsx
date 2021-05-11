import React from 'react';
import FolderTree, { testData } from '../FolderTree/FolderTree';

const SandBox = () => {
  const onTreeStateChange = state => console.log('tree state: ', state);

  return (
    <div className='demo-sandbox'>
      <FolderTree
        data={ testData }
        onChange={ onTreeStateChange }
      />
    </div>
  );
};

export default SandBox;
