import React, {
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../CheckBox/CheckBox';
import UtilsContext from '../FolderTree/context';
import EditableName from '../EditableName/EditableName';

import './TreeNode.scss';

const indetPixels = 30;   // TODO: user can pass this to FolderTree and TreeNode can get is from context

const TreeNode = ({
  path,
  name,
  checked: checkedStatus,
  childrenData,
}) => {
  const {
    handleCheck,
    handleRename,
    handleDelete,
  } = useContext(UtilsContext);

  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const treeNodeStyle = {
    marginLeft: path.length * indetPixels,
  };

  const handleCheckBoxChange = e => {
    const newStatus = +e.target.checked;
    handleCheck(path, newStatus);
  };

  const onNameChange = newName => handleRename(path, newName);

  const selectMe = () => (!isEditing && setIsSelected(true));
  const unSelectMe = () => setIsSelected(false);

  const editMe = () => {
    setIsEditing(true);
    setIsSelected(false);
  };

  const deleteMe = () => handleDelete(path);

  const NodeToolBar = (
    <>
      <button type='submit' onClick={ editMe }>edit</button>
      <button type='submit' onClick={ deleteMe }>delete</button>
      <button type='submit' onClick={ unSelectMe }>cancel</button>
    </>
  );

  return (
    <>
      <div className='TreeNode' style={ treeNodeStyle }>
        <CheckBox
          status={ checkedStatus }
          onChange={ handleCheckBoxChange }
        />

        <span
          className='editableNameContainer'
          onClick={ selectMe }
        >
          <EditableName
            name={ name }
            isEditing={ isEditing }
            setIsEditing={ setIsEditing }
            onNameChange={ onNameChange }
          />
        </span>
        { isSelected && NodeToolBar }

      </div>

      {
        childrenData && childrenData.map((data, idx) => (
          <TreeNode
            path={ [...path, idx] }
            key={ data.id }
            name={ data.name }
            checked={ data.checked }
            childrenData={ data.children }
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

  childrenData: PropTypes.array,
};

export default TreeNode;
