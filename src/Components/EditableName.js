import React from 'react';
import styles from './folderTreeCSS.css'

const EditableName = ({filename, setMyName}) => (
	<span>

    {' ' + filename + ' '}
    <i className={styles.pencilIcon} onClick={() => { setMyName('*' + filename + '*') }} />

  </span>
);

EditableName.propTypes = {
  filename: React.PropTypes.string.isRequired,
  setMyName: React.PropTypes.func.isRequired,
};

export default EditableName;