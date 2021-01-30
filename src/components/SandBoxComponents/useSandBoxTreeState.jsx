import { useState } from 'react';
import { testData } from '../../utils/testData';

const useSandBoxTreeState = () => {
  const [treeState, setTreeState] = useState(testData);
  const onTreeStateChange = data => {
    // probably do something else here
    setTreeState(data);
  };

  return [treeState, onTreeStateChange];
};

export default useSandBoxTreeState;