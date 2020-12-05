import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../CheckBox/CheckBox';

import './TreeNode.scss';

const indetPixels = 30;   // TODO: user can pass this to FolderTree and TreeNode can get is from context

const TreeNode = ({
  path,
  name,
  checked: checkedStatus,
  childrenData,
  handleCheck,
}) => {
  const treeNodeStyle = {
    marginLeft: path.length * indetPixels,
  };

  const handleCheckBoxChange = e => {
    const newStatus = +e.target.checked;
    handleCheck(path, newStatus);
  };

  return (
    <>
      <div className='TreeNode' style={ treeNodeStyle }>
        <CheckBox
          status={ checkedStatus }
          onChange={ handleCheckBoxChange }
        />

        { name }
      </div>

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
    </>
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
