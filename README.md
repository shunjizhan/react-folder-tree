# React Folder Tree
[![travis build](https://img.shields.io/travis/com/shunjizhan/react-folder-tree?logo=travis)](https://travis-ci.com/shunjizhan/react-folder-tree) [![codecov](https://codecov.io/gh/shunjizhan/react-folder-tree/branch/master/graph/badge.svg?token=26EEM3JIUY)](https://codecov.io/gh/shunjizhan/react-folder-tree) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-folder-tree?color=light%20green&label=zipped%20only&logo=webpack)  
[![npm](https://img.shields.io/npm/v/react-folder-tree?logo=npm)](https://www.npmjs.com/package/react-folder-tree) [![npm](https://img.shields.io/npm/dm/react-folder-tree?logo=DocuSign&color=blue)](https://www.npmjs.com/package/react-folder-tree) ![GitHub top language](https://img.shields.io/github/languages/top/shunjizhan/react-folder-tree?logo=react)

A versatile and customizable react treeview library. Features:  
✅ custom icons  
✅ custom event handlers  
✅ inline add, modify, and delete tree nodes  
✅ checkbox with half check (indeterminate check)  
✅ read-only mode

It uses [use-tree-state](https://www.npmjs.com/package/use-tree-state) hook internally for convenient state management.
### Quick Preview
![folder-tree-demo](/assets/folder-tree-demo.gif)

### Live Demos
live demos and code examples can be found [here](https://shunjizhan.github.io/react-folder-tree-demos/)

---
## Basic Usage
### 🌀 install
```bash
$ yarn add react-folder-tree
$ npm install react-folder-tree --save
```
### 🌀 basic tree
```tsx
import FolderTree, { testData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';

const BasicTree = () => {
  const onTreeStateChange = (state, event) => console.log(state, event);

  return (
    <FolderTree
      data={ testData }
      onChange={ onTreeStateChange }
    />
  );
};
```

### 🌀 custom initial state
Initial tree state is an object that describes a nested tree node structure, which looks like:
```jsx
{
  // reserved keys, can customize initial value
  name: 'root node',  
  checked (optional): 0 (unchecked, default) | 0.5 (half checked) | 1(checked),
  isOpen (optional): true (default) | false,
  children (optional): [array of treenode],

  // internal keys (auto generated), plz don't include them in the initial data
  path: [],    // path is an array of indexes to this node from root node
  _id: 0,

  // not reserved, can carry any extra info about this node
  nickname (optional): 'pikachu',
  url (optional): 'url of this node',
}
```
`checked` and `isOpen` status could be auto initialized by props `initCheckedStatus` and `initOpenStatus`. We can also provide data with custom `checked` and `isOpen` status, and set `initCheckedStatus` and `initOpenStatus` to `'custom'`.

This example shows how to render a tree with custom initial state
```tsx
const treeState = {
  name: 'root [half checked and opened]',
  checked: 0.5,   // half check: some children are checked
  isOpen: true,   // this folder is opened, we can see it's children
  children: [
    { name: 'children 1 [not checked]', checked: 0 },
    {
      name: 'children 2 [half checked and not opened]',
      checked: 0.5,
      isOpen: false,
      children: [
        { name: 'children 2-1 [not checked]', checked: 0 },
        { name: 'children 2-2 [checked]', checked: 1 },
      ],
    },
  ],
};

const CustomInitState = () => (
  <FolderTree
    data={ treeState }
    initCheckedStatus='custom'  // default: 0 [unchecked]
    initOpenStatus='custom'     // default: 'open'
  />
);
```

### 🌀 hate checkbox?
```jsx
<FolderTree
  data={ treeState }
  showCheckbox={ false }    // default: true
/>
```

### 🌀 love indentation?
```jsx
<FolderTree
  data={ treeState }
  indentPixels={ 99999 }    // default: 30
/>
```

### 🌀 read only?
we can use it as a classical view-only tree
```jsx
<FolderTree
  data={ treeState }
  showCheckbox={ false }    // hiding checkbox is not required but recommended for better UX
  readOnly                  // <== here!!
/>
```
---
## Advanced Usage
### 🔥 sync tree state
In order to perform more complex operations, we can sync and keep track of the current tree state outside.

This example shows how to download all selected files.
```jsx
const SuperApp = () => {
  const [treeState, setTreeState] = useState(initState);
  const onTreeStateChange = (state, event) => setTreeState(state);

  const onDownload = () => downloadAllSelected(treeState);

  return (
    <>
      <FolderTree
        data={ initState }
        onChange={ onTreeStateChange }
      />
      <DownloadButton onClick={ onDownload } />
    </>
  );
};
```

### 🔥 custom icons 
There are 9 icons and all of them are customizable.
- FileIcon
- FolderIcon
- FolderOpenIcon
- EditIcon
- DeleteIcon
- CancelIcon
- CaretRightIcon
- CaretDownIcon
- OKIcon

This example shows how to customize the FileIcon (same interface for all other icons).
```jsx
import { FaBitcoin } from 'react-icons/fa';

const BitcoinApp = () => {
  const FileIcon = ({ onClick: defaultOnClick, nodeData }) => {
    const {
      path,
      name,
      checked,
      isOpen,
      ...restData
    } = nodeData;

    // custom event handler
    const handleClick = () => {   
      doSthBad({ path, name, checked, isOpen, ...restData });

      defaultOnClick();
    };

    // custom Style
    return <FaBitcoin onClick={ handleClick } />;
  };

  return (
    <FolderTree
      data={ initState }
      iconComponents={{
        FileIcon,
        /* other custom icons ... */
      }}
    />
  );
};
```

### 🔥 hide icons / disable interaction
This usage is a subset of custom icons.

For example, if we want to disable editing, we can hide `EditIcon` by passing in a dummy custom icon, so nothing will be rendered.
```tsx
const EditIcon = (...args) => null;
```

A little more complex but more flexible way is to have extra node data, say `editable`, then build a custom icon that utilize this data
```ts
const EditIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { editable } = nodeData;

  // if this node is editable, render an EditIcon, otherwise render air
  return editable ? (<FaEdit onClick={ defaultOnClick } />) : null;

  // or render a 'not editable' icon
  return editable ? (<FaEdit onClick={ defaultOnClick } />) : (<DontEdit />));
};
```

### 🔥 custom `onClick` for node names
This example shows how to download the file when click on the node name.
```tsx
const dataWithUrl = {
  name: 'secret crypto file',
  url: 'polkadot.network',      // wew can provide any custom data to the FolderTree!
  // ...
};

const onNameClick = ({ defaultOnClick, nodeData }) => {
  defaultOnClick();

  const {
    // internal data
    path, name, checked, isOpen, 
    // custom data
    url, ...whateverRest
  } = nodeData;

  download(url);
};

const Downloader = () => (
  <FolderTree
    data={ dataWithUrl }
    onNameClick={ onNameClick }
  />
);
```

---
## APIs Summary

| prop              | description                             | type     | options                                        |
|-------------------|-----------------------------------------|----------|------------------------------------------------|
| data              | initial tree state data (required)      | object   | N/A                                            |
| initCheckedStatus | initial check status of all nodes       | string   | 'unchecked' (default) \| 'checked' \| 'custom' |
| initOpenStatus    | initial open status of all treenodes    | string   | 'open' (default) \| 'closed' \| 'custom'        |
| iconComponents    | custom icon components                  | object   | ant design icons (default)                     |
| onChange          | callback when tree state changes        | function | console.log (default)                          |
| onNameClick       | callback when click treenode name       | function | open treenode inline toolbox (default)         |
| indentPixels      | ident pixels of 1x level treenode       | number   | 30 (default)                                   |
| showCheckbox      | show check box?                         | bool     | true (default) | false                         |
| readOnly          | readOnly mode? can't click/check node   | bool     | false (default) | true                       |

---
## Bugs? Questions? Contributions?
Feel free to [open an issue](https://github.com/shunjizhan/react-folder-tree/issues), or create a pull request!
