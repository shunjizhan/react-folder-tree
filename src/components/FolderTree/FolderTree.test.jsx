import React from 'react';
import { mount } from 'enzyme';
import FolderTree from './FolderTree';

import { testData } from '../../utils/testData';

let tree;

const render = ({
  data,
  onChange = console.log,   // eslint-disable-line
  initCheckedStatus = 'unchecked',
  initOpenStatus = 'open',
  iconComponents = {},
  showCheckbox = true,
  indentPixels = 30,
  onNameClick = null,
  readOnly = false,
}) => {
  tree = mount((
    <FolderTree
      data={ data }
      onChange={ onChange }
      initCheckedStatus={ initCheckedStatus }
      initOpenStatus={ initOpenStatus }
      iconComponents={ iconComponents }
      showCheckbox={ showCheckbox }
      indentPixels={ indentPixels }
      onNameClick={ onNameClick }
      readOnly={ readOnly }
    />
  ));
};

test('render', () => {
  render({ data: testData });
});
