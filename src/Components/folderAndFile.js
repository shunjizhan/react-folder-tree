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

const FolderComponent = ({ level, checked, handleCheck, filename, toggleFolder, open }) => (
  <div className={styles.folder}>
    {getInden(level)}
    <Checkbox status={checked} handleCheck={handleCheck} />
    <a onClick={toggleFolder}>
      <i className={open? styles.arrowDown : styles.arrowRight} /> <i className={open? styles.foldeOpenIcon : styles.folderIcon} /> {filename}
    </a>
  </div>
);

function getInden(level) {
  let iden = '', i = 0;
  while (i < level) {
    iden += ' ';
    i++;
  }
  return iden;
}

export {FileComponent, FolderComponent};