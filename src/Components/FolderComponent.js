import React from 'react';
import Checkbox from './Checkbox';
import EditableName from './EditableName';
import styles from './folderTreeCSS.css';

const FolderComponent = ({ level, checked, handleCheck, filename, toggleFolder, open, setMyName, selectMe, selected }) => (
  <div className={styles.folder} style={{marginLeft: getInden(level)}}>
    <Checkbox status={checked} handleCheck={handleCheck} />

    <a onClick={toggleFolder}><i className={open? [styles.arrowDown, styles.carat].join(' ')  : [styles.arrowRight, styles.carat].join(' ') } /> </a>

    <span className={selected ? [styles.folderText, styles.selected].join(' ') : styles.folderText} onClick={selectMe}>
      <i className={open? styles.foldeOpenIcon : styles.folderIcon} />   
      <EditableName filename={filename} setMyName={setMyName} selected={selected} />
    </span>

  </div>
);

FolderComponent.propTypes = {
  open: React.PropTypes.bool.isRequired,
  path: React.PropTypes.array.isRequired, 
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  filename: React.PropTypes.string.isRequired,
  selected: React.PropTypes.number.isRequired,

  selectMe: React.PropTypes.func.isRequired,
  setMyName: React.PropTypes.func.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
  toggleFolder: React.PropTypes.func.isRequired,
}

function getInden(level) {
  return `${5 * level}px`;
}

export default FolderComponent;