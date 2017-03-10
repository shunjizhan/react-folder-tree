import React from 'react';
import Checkbox from './Checkbox';
import EditableName from './EditableName';
import styles from './folderTreeCSS.css'

const FileComponent = ({ level, checked, handleCheck, filename, setMyName, selectMe, selected }) => (
  <div className={styles.file}>
    {getInden(level)}
    <Checkbox status={checked} handleCheck={handleCheck} />

    <span className={selected ? [styles.fileText, styles.selected].join(' ') : styles.fileText} onClick={selectMe}>
      {'   '}<i className={styles.fileIcon} /> 
      <EditableName filename={filename} setMyName={setMyName} />
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
  let iden = '', i = 0;
  while (i < level) {
    iden += ' ';
    i++;
  }
  return iden;
}

export default FileComponent;