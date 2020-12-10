import React, {
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineFile,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
} from 'react-icons/ai';

import CheckBox from '../CheckBox/CheckBox';
import UtilsContext from '../FolderTree/context';
import EditableName from '../EditableName/EditableName';

import './TreeNode.scss';

const indetPixels = 30;   // TODO: user can pass this to FolderTree and TreeNode can get is from context

const TreeNode = ({
  path,
  name,
  checked,
  childrenData,
}) => {
  const {
    handleCheck,
    handleRename,
    handleDelete,
    handleAddNode,
  } = useContext(UtilsContext);

  const isFolder = !!childrenData;

  const treeNodeStyle = {
    marginLeft: path.length * indetPixels,
  };

  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const FileIcon = AiOutlineFile;
  const FolderIcon = AiOutlineFolder;
  const FolderOpenIcon = AiOutlineFolderOpen;
  const EditIcon = AiOutlineEdit;
  const DeleteIcon = AiOutlineDelete;
  const CancelIcon = AiOutlineClose;
  const AddFileIcon = AiOutlineFileAdd;
  const AddFolderIcon = AiOutlineFolderAdd;

  let TypeIcon = FileIcon;
  if (isFolder) {
    TypeIcon = isOpen
      ? FolderOpenIcon
      : FolderIcon;
  }

  const toggleOpen = () => setIsOpen(!isOpen);

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

  const addFile = () => handleAddNode(path, 'file');
  const addFolder = () => handleAddNode(path, 'folder');

  const IconContainerClassName = className => `iconContainer ${className}`;

  const NodeToolBar = (
    <span className={ IconContainerClassName('TreeNodeToolBar') }>
      <EditIcon onClick={ editMe } />
      <DeleteIcon onClick={ deleteMe } />
      { isFolder && <AddFileIcon onClick={ addFile } /> }
      { isFolder && <AddFolderIcon onClick={ addFolder } /> }

      <CancelIcon onClick={ unSelectMe } />
    </span>
  );

  return (
    <>
      <div className='TreeNode' style={ treeNodeStyle }>
        <CheckBox
          status={ checked }
          onChange={ handleCheckBoxChange }
        />

        {
          isFolder && (
            <span
              className={ IconContainerClassName('arrowContainer') }
              onClick={ toggleOpen }
            >
              {
                isOpen
                  ? <AiOutlineDown />
                  : <AiOutlineRight />
              }
            </span>
          )
        }

        <span className={ IconContainerClassName('typeIconContainer') }>
          <TypeIcon />
        </span>

        <span
          className={ IconContainerClassName('editableNameContainer') }
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
        isFolder && isOpen && childrenData.map((data, idx) => (
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
