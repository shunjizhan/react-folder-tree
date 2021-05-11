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
  AiOutlineCheck,
} from 'react-icons/ai';

import CheckBox from '../CheckBox/CheckBox';
import ConfigContext from '../FolderTree/context';
import EditableName from '../EditableName/EditableName';
import {
  iconContainerClassName,
  iconClassName,
} from '../../utils/iconUtils';

const TreeNode = ({
  path,
  name,
  checked,
  isOpen,
  childrenData,
}) => {
  const {
    handleCheck,
    handleRename,
    handleDelete,
    handleAddNode,
    handleToggleOpen,
    iconComponents,
    indentPixels,
    showCheckbox,
  } = useContext(ConfigContext);

  const isFolder = !!childrenData;

  const treeNodeStyle = {
    marginLeft: path.length * indentPixels,
  };

  const [isSelected, setIsSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const {
    FileIcon = AiOutlineFile,
    FolderIcon = AiOutlineFolder,
    FolderOpenIcon = AiOutlineFolderOpen,
    EditIcon = AiOutlineEdit,
    DeleteIcon = AiOutlineDelete,
    CancelIcon = AiOutlineClose,
    AddFileIcon = AiOutlineFileAdd,
    AddFolderIcon = AiOutlineFolderAdd,
    CaretRightIcon = AiFillCaretRight,
    CaretDownIcon = AiFillCaretDown,
    OKIcon = AiOutlineCheck,
  } = iconComponents;

  let TypeIcon = FileIcon;
  let TypeIconType = 'FileIcon';
  if (isFolder) {
    TypeIcon = isOpen
      ? FolderOpenIcon
      : FolderIcon;

    TypeIconType = isOpen
      ? 'FolderOpenIcon'
      : 'FolderIcon';
  }

  const handleCheckBoxChange = e => {
    const newStatus = +e.target.checked;
    handleCheck(path, newStatus);
  };

  const onNameChange = newName => handleRename(path, newName);

  const selectMe = () => (!isEditing && setIsSelected(true));
  const unSelectMe = () => setIsSelected(false);

  const openMe = () => handleToggleOpen(path, true);
  const closeMe = () => handleToggleOpen(path, false);

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
        path={ path }
        name={ name }
      />
      <DeleteIcon
        className={ iconClassName('DeleteIcon') }
        onClick={ deleteMe }
        path={ path }
        name={ name }
      />
      {
        isFolder && (
          <>
            <AddFileIcon
              className={ iconClassName('AddFileIcon') }
              onClick={ addFile }
              path={ path }
              name={ name }
            />
            <AddFolderIcon
              className={ iconClassName('AddFolderIcon') }
              onClick={ addFolder }
              path={ path }
              name={ name }
            />
          </>
        )
      }

      <CancelIcon
        className={ iconClassName('CancelIcon') }
        onClick={ unSelectMe }
        path={ path }
        name={ name }
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
            <CaretDownIcon
              className={ iconClassName('CaretDownIcon') }
              onClick={ closeMe }
              path={ path }
              name={ name }
            />
          )
          : (
            <CaretRightIcon
              className={ iconClassName('CaretRightIcon') }
              onClick={ openMe }
              path={ path }
              name={ name }
            />
          )
      }
    </span>
  );

  return (
    <>
      <div className='TreeNode' style={ treeNodeStyle }>
        { showCheckbox && (
          <CheckBox
            status={ checked }
            onChange={ handleCheckBoxChange }
          />
        )}

        { isFolder && folderCaret }

        <span className={ iconContainerClassName('typeIconContainer') }>
          <TypeIcon
            className={ iconClassName(TypeIconType) }
            onClick={ selectMe }
            path={ path }
            name={ name }
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
            OKIcon={ OKIcon }
            CancelIcon={ CancelIcon }
            path={ path }
          />
        </span>
        { isSelected && TreeNodeToolBar }

      </div>

      {
        isFolder && isOpen && childrenData.map((data, idx) => (
          <TreeNode
            path={ [...path, idx] }
            key={ data._id }
            name={ data.name }
            isOpen={ data.isOpen }
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
  isOpen: PropTypes.bool,

  childrenData: PropTypes.array,
};

export default TreeNode;
