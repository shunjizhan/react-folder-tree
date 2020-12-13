import React from 'react';

import FolderTree from '../FolderTree/FolderTree';
import useSandBoxTreeState from './useSandBoxTreeState';
import { testData } from '../../utils/testData';

/* eslint-disable-next-line */
const SectionTitle = ({ children }) => (
  <div
    style={{
      display: 'inline-block',
      padding: '2px 5px',
      border: '2px solid black',
      marginBottom: '10px',
    }}
  >
    { children}
  </div>
);

const TreeStateViewer = () => {
  const [treeState, onTreeStateChange] = useSandBoxTreeState();

  return (
    <div id='sandbox'>
      <div
        id='folderTreeContainer'
        style={{
          width: '49%',
          float: 'left',
        }}
      >
        <SectionTitle>
          Real Tree
        </SectionTitle>

        <FolderTree
          data={ testData }
          onChange={ onTreeStateChange }
        />
      </div>

      <div
        id='folderTreeContainer'
        style={{
          width: '49%',
          float: 'right',
          paddingLeft: '10px',
          borderLeft: '1px solid black',
          fontSize: '80%',
        }}
      >
        <SectionTitle>
          Tree State
        </SectionTitle>

        <pre style={{ margin: 0 }}>
          {JSON.stringify(treeState, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default TreeStateViewer;
