import React from 'react';
import PropTypes from 'prop-types';

import './TreeNode.scss';

const indetPixels = 20;   // TODO: user can pass this to FolderTree and TreeNode can get is from context

const TreeNode = ({
  path,
  name,
  checked,
  childrenData,
  handleCheck,
}) => {
  const treeNodeStyle = {
    marginLeft: path.length * indetPixels,
  };

  const onCheck = e => {
    const status = +(e.target.value === 'on');
    console.log({ status });
    handleCheck(path, status);
  };

  return (
    <div className='TreeNode' style={ treeNodeStyle }>
      <input
        className='checkbox'
        type='checkbox'
        checked={ !!checked }
        onChange={ onCheck }
      />

      { name }

      {
        childrenData && childrenData.map((data, idx) => (
          <TreeNode
            path={ [...path, idx] }
            key={ data.id }
            name={ data.name }
            checked={ data.checked }
            childrenData={ data.children }
            handleCheck={ handleCheck }
          />
        ))
      }
    </div>
  );
};

TreeNode.propTypes = {
  path: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.number.isRequired,
  handleCheck: PropTypes.func.isRequired,

  childrenData: PropTypes.array,
};

export default TreeNode;
