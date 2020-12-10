import React, {
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  AiFillCaretRight,
  AiFillCaretDown,
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
import {
  iconContainerClassName,
  iconClassName,
} from '../../utils/iconUtils';

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
  const CaretRight = AiFillCaretRight;
  const CaretDown = AiFillCaretDown;

  let TypeIcon = FileIcon;
  if (isFolder) {
    TypeIcon = isOpen
      ? FolderOpenIcon
      : FolderIcon;
  }

  const handleCheckBoxChange = e => {
    const newStatus = +e.target.checked;
    handleCheck(path, newStatus);
  };

  const onNameChange = newName => handleRename(path, newName);

  const selectMe = () => (!isEditing && setIsSelected(true));
  const unSelectMe = () => setIsSelected(false);

  const openMe = () => setIsOpen(true);
  const closeMe = () => setIsOpen(false);

  const editMe = () => {
    setIsEditing(true);
    setIsSelected(false);
  };

  const deleteMe = () => handleDelete(path);

  const addFile = () => handleAddNode(path, 'file');
  const addFolder = () => handleAddNode(path, 'folder');

  const TreeNodeToolBar = (
    <span className={ iconContainerClassName('TreeNodeToolBar') }>
      <EditIcon
        className={ iconClassName('EditIcon') }
        onClick={ editMe }
      />
      <DeleteIcon
        className={ iconClassName('DeleteIcon') }
        onClick={ deleteMe }
      />
      {
        isFolder && (
          <>
            <AddFileIcon
              className={ iconClassName('AddFileIcon') }
              onClick={ addFile }
            />
            <AddFolderIcon
              className={ iconClassName('AddFolderIcon') }
              onClick={ addFolder }
            />
          </>
        )
      }

      <CancelIcon
        className={ iconClassName('CancelIcon') }
        onClick={ unSelectMe }
      />
    </span>
  );

  const folderCaret = (
    <span
      className={ iconContainerClassName('caretContainer') }
    >
      {
        isOpen
          ? (
            <CaretDown
              className={ iconClassName('CaretDown') }
              onClick={ closeMe }
            />
          )
          : (
            <CaretRight
              className={ iconClassName('CaretRight') }
              onClick={ openMe }
            />
          )
      }
    </span>
  );

  return (
    <>
      <div className='TreeNode' style={ treeNodeStyle }>
        <CheckBox
          status={ checked }
          onChange={ handleCheckBoxChange }
        />

        { isFolder && folderCaret }

        <span className={ iconContainerClassName('typeIconContainer') }>
          <TypeIcon
            className={ iconClassName('TypeIcon') }
            onClick={ selectMe }
          />
        </span>

        <span
          className={ iconContainerClassName('editableNameContainer') }
          onClick={ selectMe }
        >
          <EditableName
            name={ name }
            isEditing={ isEditing }
            setIsEditing={ setIsEditing }
            onNameChange={ onNameChange }
          />
        </span>
        { isSelected && TreeNodeToolBar }

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
