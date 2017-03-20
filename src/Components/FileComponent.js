import React from 'react';
import Checkbox from './Checkbox';
import EditableName from './EditableName';
import styles from './folderTreeCSS.css'

const FileComponent = ({ level, checked, handleCheck, filename, setMyName, selectMe, selected }) => (
  <div className={styles.file} style={{marginLeft: getInden(level)}}>
    <Checkbox status={checked} handleCheck={handleCheck} />

    <span className={selected ? [styles.fileText, styles.selected].join(' ') : styles.fileText} onClick={selectMe}>
      <i className={styles.fileIcon} style={{marginLeft: '10px'}} /> 
      <EditableName filename={filename} setMyName={setMyName} selected={selected} />
    </span>

  </div>
);

FileComponent.propTypes = {
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
  filename: React.PropTypes.string.isRequired,
  path: React.PropTypes.array.isRequired, 
  setMyName: React.PropTypes.func.isRequired,
  selectMe: React.PropTypes.func.isRequired,
  selected: React.PropTypes.number.isRequired,
};

function getInden(level) {
  return `${5 * level}px`;
}

export default FileComponent;