# React Folder Tree
A powerful and customizable react treeview library.


## Core Features
- **Half Check** (indeterminate checkboxes): when some of the children nodes are checked, parent node automatically becomes half check.
- **Inline CRUD** operations: rename nodes, create new nodes, and delete nodes.
- **Customizable**: all icons are customizable, so you can build your favorite styles, as well as custom functionalities for user interactions.

## Quick Preview
![folder-tree-demo](/assets/folder-tree-demo.gif)


## Demos & Code Examples
[===== HERE =====](https://shunjizhan.github.io/react-folder-tree-demos/)
[===== HERE =====](https://shunjizhan.github.io/react-folder-tree-demos/)
[===== HERE =====](https://shunjizhan.github.io/react-folder-tree-demos/)


## Basic Usage & Props
```tsx
import FolderTree, { testData } from 'react-folder-tree';

const BasicTree = () => {
  const onTreeStateChange = state => console.log('tree state: ', state);

  return (
    <FolderTree
      data={ testData }
      onChange={ onTreeStateChange }
    />
  );
};

```

| prop              | description                             | type     | options                                        |
|-------------------|-----------------------------------------|----------|------------------------------------------------|
| data              | initial tree state data (required)      | object   | N/A                                            |
| onChange          | callback when tree state changes        | function | console.log (default)                          |
| initCheckedStatus | initial check status of all nodes       | string   | 'unchecked' (default) \| 'checked' \| 'custom' |
| initOpenStatus    | initial open status of all treenodes    | string   | 'open' (default) \| 'close' \| 'custom'        |
| iconComponents    | custom icon components                  | object   | N/A                                            |
| indentPixels      | ident pixels of 1x level treenode       | number   | 30 (default)                                   |
| showCheckbox      | show check box?                         | bool     | true (default) | false                         |

## Note
After upgrading to `v4.0`, old versions are no compatible anymore, please try out new version or specify old version when installing!

## Contributions
Welcome! 
