export const deepClone = x => JSON.parse(JSON.stringify(x));

// assign uniq ids to each node
export const addUniqIds = rootNode => {
  let curId = 0;
  const _addId = node => {
    node.id = curId;  // eslint-disable-line
    curId += 1;

    if (node.children) {
      for (const child of node.children) {
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
  if (node.children) {
    for (const child of node.children) {
      setStatusDown(child, status);
    }
  }
  return node;
};

// calculate the check status of a node based on the check status of it's children
export const getNewCheckStatus = node => {
  const { children } = node;
  if (!children) return node.checked;

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

// set checked status for all nodes
export const setAllCheckedStatus = (rootNode, status) => (
  setStatusDown(deepClone(rootNode), status)
);

// handle state change when user (un)check a TreeNode
export const checkNode = (rootNode, path, status) => {
  const _rootNode = deepClone(rootNode);
  let curNode = _rootNode;
  const parentNodes = [curNode];        // parent nodes for getNewCheckStatus() upwards

  for (const idx of path) {
    curNode = curNode.children[idx];
    parentNodes.push(curNode);
  }

  setStatusDown(curNode, status);       // update check status of this node and all childrens, in place

  parentNodes.pop();            // don't need to check this node's level
  updateStatusUp(parentNodes);  // update check status up, from this nodes parent, in place

  return _rootNode;
};

export const renameNode = (rootNode, path, newName) => {
  const _rootNode = deepClone(rootNode);
  let curNode = _rootNode;
  for (const idx of path) {
    curNode = curNode.children[idx];
  }
  curNode.name = newName;

  return _rootNode;
};

export const deleteNode = (rootNode, path) => {
  const _rootNode = deepClone(rootNode);
  let curNode = _rootNode;
  const parentNodes = [curNode];
  const lastIdx = path.pop();

  for (const idx of path) {
    curNode = curNode.children[idx];
    parentNodes.push(curNode);
  }

  curNode.children.splice(lastIdx, 1);    // remove target node
  updateStatusUp(parentNodes);            // update check status up, from this nodes

  return _rootNode;
};

// check if the initial customed checked status is valid
export const isValidCheckedStatus = rootNode => true;   /* eslint-disable-line */
