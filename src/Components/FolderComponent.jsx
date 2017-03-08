import React from 'react';
import Checkbox from './Checkbox';
import styles from './folderTreeCSS.css'

const FolderComponent = ({ level, checked, handleCheck, filename, toggleFolder, open, setMyName }) => (
  <div className={styles.folder}>
    {getInden(level)}
    <Checkbox status={checked} handleCheck={handleCheck} />
    <a onClick={toggleFolder}>
      <i className={open? styles.arrowDown : styles.arrowRight} /> <i className={open? styles.foldeOpenIcon : styles.folderIcon} /> 
    </a>
    {filename}
    <button onClick={() => { setMyName('*' + filename + '*') }}>change</button>
  </div>
);

FolderComponent.propTypes = {
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
  filename: React.PropTypes.string.isRequired,
  toggleFolder: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
  path: React.PropTypes.array.isRequired, 
  setMyName: React.PropTypes.func.isRequired,
}

function getInden(level) {
  let iden = '', i = 0;
  while (i < level) {
    iden += ' ';
    i++;
  }
  return iden;
}

export default FolderComponent;