import React, { PropTypes, Component } from 'react';
import Checkbox from './Checkbox';
import FontAwesome from 'react-fontawesome';

const FileComponent = ({ level, checked, handleCheck, filename }) => {
  return (
    <div>
      {getInden(level)}
      <Checkbox status={checked} handleCheck={handleCheck} />
      {'   '}<FontAwesome name='file-o'/> {filename}
    </div>
  )
};

const FolderComponent = ({ level, checked, handleCheck, filename, toggleFolder, open }) => (
  <div>
    {getInden(level)}
    <Checkbox status={checked} handleCheck={handleCheck} />
    <a onClick={toggleFolder}>
      <FontAwesome name={open? 'caret-down': 'caret-right'}/> <FontAwesome name={open? 'folder-open': 'folder'}/> {filename}
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