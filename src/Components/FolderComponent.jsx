import React from 'react';
import Checkbox from './Checkbox';
import styles from './folderTreeCSS.css'

const FolderComponent = ({ level, checked, handleCheck, filename, toggleFolder, open }) => (
  <div className={styles.folder} style={{marginLeft: getInden(level)}}>
    <Checkbox status={checked} handleCheck={handleCheck} />
    <a onClick={toggleFolder}>
      <i className={open? styles.arrowDown : styles.arrowRight} /> <i className={open? styles.foldeOpenIcon : styles.folderIcon} /> {filename}
    </a>
  </div>
);

FolderComponent.propTypes = {
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
  filename: React.PropTypes.string.isRequired,
  toggleFolder: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired
}

function getInden(level) {
  return `${5 * level}px`;
}

export default FolderComponent;