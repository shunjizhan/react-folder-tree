import React from 'react';
import FolderTree, { testData } from '../FolderTree/FolderTree';

const SandBox = () => {
  const onTreeStateChange = (state, e) => console.log({ state, e });

  return (
    <div className='demo-sandbox'>
      <FolderTree
        data={ testData }
        onChange={ onTreeStateChange }
        // showCheckbox={ false }
      />
    </div>
  );
};

export default SandBox;
