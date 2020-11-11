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
  return data;
};

// check if the initial customed checked status is valid
export const isValidCheckedStatus = data => {
  return true;
};
