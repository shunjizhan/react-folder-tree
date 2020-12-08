import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './EditableName.scss';

const EditableName = ({
  name,
  isEditing,
  setIsEditing,
  onNameChange,
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
      <button
        type='submit'
        onClick={ handleNameChange }
      >
        ok
        { /* TODO: change this to better button */ }
      </button>
      <button
        type='submit'
        onClick={ cancelEditing }
      >
        cancel
      </button>
    </span>
  );

  const displayName = name;

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
};

export default EditableName;
