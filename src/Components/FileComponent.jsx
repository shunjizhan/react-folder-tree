import React from 'react';
import Checkbox from './Checkbox';
import styles from './folderTreeCSS.css'

const FileComponent = ({ level, checked, handleCheck, filename }) => (
  <div className={styles.file}>
    {getInden(level)}
    <Checkbox status={checked} handleCheck={handleCheck} />
    {'   '}<i className={styles.fileIcon} /> {filename}
  </div>
);

FileComponent.propTypes = {
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
  filename: React.PropTypes.string.isRequired,
};

function getInden(level) {
  let iden = '', i = 0;
  while (i < level) {
    iden += ' ';
    i++;
  }
  return iden;
}

export default FileComponent;