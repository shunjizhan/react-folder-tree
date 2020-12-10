import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';

import {
  iconContainerClassName,
  iconClassName,
} from '../../utils/iconUtils';

const EditableName = ({
  name,
  isEditing,
  setIsEditing,
  onNameChange,
  OKIcon = AiOutlineCheck,
  CancelIcon = AiOutlineClose,
}) => {
  const [inputVal, setInputVal] = useState(name);

  const onInputChange = e => setInputVal(e.target.value);

  const cancelEditing = () => {
    setInputVal(name);
    setIsEditing(false);
  };

  const handleNameChange = () => {
    onNameChange(inputVal);
    setIsEditing(false);
  };

  const editingName = (
    <span className='editingName'>
      <input
        type='text'
        value={ inputVal }
        onChange={ onInputChange }
      />
      <span className={ iconContainerClassName('editableNameToolbar') }>
        <OKIcon
          className={ iconClassName('OKIcon') }
          onClick={ handleNameChange }
        />
        <CancelIcon
          className={ iconClassName('CancelIcon') }
          onClick={ cancelEditing }
        />
      </span>
    </span>
  );

  const displayName = (
    <span className='displayName'>
      { name }
    </span>
  );

  return (
    <span className='EditableName'>
      { isEditing ? editingName : displayName }
    </span>
  );
};

EditableName.propTypes = {
  name: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  OKIcon: PropTypes.element,
  CancelIcon: PropTypes.element,
};

export default EditableName;
