export const deepClone = x => JSON.parse(JSON.stringify(x));

// deepclone the initial data for internal use, and assign uniq ids to each node
// deepclone only happens once at initialization, other operations will be in-place
export const initStateWithUniqIds = rootNode => {
  let curId = 0;
  const _addId = node => {
    node._id = curId;  // eslint-disable-line
    curId += 1;

    const { children } = node;
    if (children) {
      for (const child of children) {
        _addId(child);
      }
    }

    return node;
  };

  return _addId(deepClone(rootNode));
};

// recursively set status for this node and all children, in place
const setStatusDown = (node, status) => {
  node.checked = status;  // eslint-disable-line
  const { children } = node;
  if (children) {
    for (const child of children) {
      setStatusDown(child, status);
    }
  }
  return { ...node };
};

// set checked status for all nodes
export const setAllCheckedStatus = (rootNode, status) => (
  setStatusDown(rootNode, status)
);

// calculate the check status of a node based on the check status of it's children
export const getNewCheckStatus = node => {
  const { children } = node;
  if (!children?.length > 0) return node.checked;

  let sum = 0;
  for (const c of children) {
    sum += c.checked;
  }

  let newCheckStatus = 0.5;   // some checked
  if (sum === children.length) {
    newCheckStatus = 1;       // all checked
  } else if (sum === 0) {
    newCheckStatus = 0;       // all unchecked
  }

  return newCheckStatus;
};

// recursively update check status up
export const updateStatusUp = nodes => {
  if (nodes.length === 0) return;

  const curNode = nodes.pop();
  curNode.checked = getNewCheckStatus(curNode);

  updateStatusUp(nodes);
};

// handle state change when user (un)check a TreeNode
export const checkNode = (rootNode, path, status) => {
  let curNode = rootNode;
  const parentNodes = [curNode];        // parent nodes for getNewCheckStatus() upwards

  for (const idx of path) {
    curNode = curNode.children[idx];
    parentNodes.push(curNode);
  }

  setStatusDown(curNode, status);       // update check status of this node and all childrens, in place

  parentNodes.pop();            // don't need to check this node's level
  updateStatusUp(parentNodes);  // update check status up, from this nodes parent, in place

  return { ...rootNode };
};

export const renameNode = (rootNode, path, newName) => {
  let curNode = rootNode;
  for (const idx of path) {
    curNode = curNode.children[idx];
  }
  curNode.name = newName;

  return { ...rootNode };
};

export const deleteNode = (rootNode, path) => {
  let curNode = rootNode;
  if (path.length === 0) {
    // this is root node
    // just remove every children and reset check status to 0
    curNode.children = [];
    curNode.checked = 0;

    return curNode;
  }

  const parentNodes = [curNode];
  const lastIdx = path.pop();

  for (const idx of path) {
    curNode = curNode.children[idx];
    parentNodes.push(curNode);
  }

  curNode.children.splice(lastIdx, 1);    // remove target node
  updateStatusUp(parentNodes);            // update check status up, from this nodes

  return { ...rootNode };
};

export const findMaxId = rootNode => {
  const { children } = rootNode;
  const curId = rootNode._id;

  return children
    ? Math.max(...[curId, ...children.map(findMaxId)])
    : curId;
};

export const addNode = (rootNode, path, type = 'file') => {
  const id = findMaxId(rootNode) + 1;
  const isFile = type === 'file';

  let curNode = rootNode;
  for (const idx of path) {
    curNode = curNode.children[idx];
  }

  const { children } = curNode;
  if (children) {
    if (isFile) {
      // files goes to front
      children.unshift({
        _id: id,
        name: 'new file',
        checked: Math.floor(curNode.checked),
      });
    } else {
      // folder goes to back
      children.push({
        _id: id,
        name: 'new folder',
        checked: Math.floor(curNode.checked),
        children: [],
      });
    }
  }

  return { ...rootNode };
};

export const toggleOpen = (rootNode, path, isOpen) => {
  let curNode = rootNode;
  for (const idx of path) {
    curNode = curNode.children[idx];
  }

  if (curNode.children) {
    // only parent node can have isOpen property
    curNode.isOpen = isOpen;
  }

  return { ...rootNode };
};

export const setAllOpenStatus = (node, isOpen) => {
  const newNode = { ...node };
  const { children } = newNode;

  if (children) {
    newNode.isOpen = isOpen;
    newNode.children = children.map(child => setAllOpenStatus(child, isOpen));
  }

  return newNode;
};

export const isValidOpenStatus = node => {
  const {
    children,
    isOpen,
  } = node;

  if (children && isOpen === undefined) return false;
  if (!children && isOpen !== undefined) return false;

  if (children) {
    for (const child of children) {
      if (!isValidOpenStatus(child)) return false;
    }
  }

  return true;
};

// check if the initial custom checked status is valid
// TODO: implement isValidCheckedStatus()
export const isValidCheckedStatus = rootNode => true;   /* eslint-disable-line */
