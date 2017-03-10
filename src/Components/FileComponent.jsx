import React from 'react';
import Checkbox from './Checkbox';
import styles from './folderTreeCSS.css'

const FileComponent = ({ level, checked, handleCheck, filename }) => (
  <div className={styles.file} style={{marginLeft: getInden(level)}}>
    <Checkbox status={checked} handleCheck={handleCheck} />
    <i className={styles.fileIcon} style={{marginLeft: '10px'}} /> {filename}
  </div>
);

FileComponent.propTypes = {
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
  filename: React.PropTypes.string.isRequired,
};

function getInden(level) {
  return `${5 * level}px`;
}

export default FileComponent;