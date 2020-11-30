const deepClone = x => JSON.parse(JSON.stringify(x));

// assign uniq ids to each node
export const addUniqIds = data => {
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

  const rootNode = deepClone(data);
  return _addId(rootNode);
};

// set checked status for all nodes
export const setCheckedStatus = (data, status) => {
  const _setStatus = (node, _status) => {
    node.checked = status;  // eslint-disable-line
    if (node.children) {
      for (const child of node.children) {
        _setStatus(child, _status);
      }
    }
    return node;
  };

  const rootNode = deepClone(data);
  return _setStatus(rootNode);
};

// handle state change when user (un)check a TreeNode
export const checkNode = (data, path, status) => {
  const rootNode = deepClone(data);
  let curNode = rootNode;
  for (const idx of path) {
    curNode = curNode.children[idx];
  }
  curNode.checked = status;

  return rootNode;
};

// check if the initial customed checked status is valid
export const isValidCheckedStatus = data => true;   /* eslint-disable-line */
