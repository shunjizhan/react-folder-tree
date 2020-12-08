import {
  testData,
  testDataWithId,
  initializedTestData,
} from './testData';
import {
  deepClone,
  addUniqIds,
  setAllCheckedStatus,
  isValidCheckedStatus,
  getNewCheckStatus,
  checkNode,
  renameNode,
  deleteNode,
} from './utils';

describe('addUniqIds', () => {
  it('add uniq ids to all nodes', () => {
    expect(addUniqIds(testData)).toEqual(testDataWithId);
    expect(addUniqIds({})).toEqual({ id: 0 });
  });
});

describe('setAllCheckedStatus', () => {
  const initData = setAllCheckedStatus(addUniqIds(testData), 0);

  it('set checked status to 0 for all nodes', () => {
    expect(initData).toEqual(initializedTestData);
  });
});

describe('getNewCheckStatus', () => {
  describe('when node is a leaf', () => {
    it('returns correct state', () => {
      expect(getNewCheckStatus({ name: 'BTC', checked: 1 })).toEqual(1);
      expect(getNewCheckStatus({ name: 'BTC', checked: 0 })).toEqual(0);
    });
  });

  describe('when new check status should be 0', () => {
    const node = {
      checked: 0,
      children: [
        { checked: 0 },
        { checked: 0 },
        { checked: 0 },
      ],
    };
    it('returns correct state', () => {
      expect(getNewCheckStatus(node)).toEqual(0);
    });
  });

  describe('when new check status should be 1', () => {
    const node = {
      checked: 1,
      children: [
        { checked: 1 },
        { checked: 1 },
        { checked: 1 },
      ],
    };
    it('returns correct state', () => {
      expect(getNewCheckStatus(node)).toEqual(1);
    });
  });

  describe('when new check status should be 0.5', () => {
    const node = {
      checked: 0.5,
      children: [
        { checked: 0 },
        { checked: 1 },
        { checked: 1 },
      ],
    };
    it('returns correct state', () => {
      expect(getNewCheckStatus(node)).toEqual(0.5);
    });
  });
});

describe('checkNode', () => {
  const initData = setAllCheckedStatus(addUniqIds(testData), 0);

  describe('when check root node', () => {
    it('returns correct state', () => {
      expect(checkNode(initData, [], 1)).toEqual(setAllCheckedStatus(initData, 1));
      expect(checkNode(initData, [], 0)).toEqual(setAllCheckedStatus(initData, 0));
    });
  });

  describe('when check other nodes', () => {
    describe('when parent becomes 1', () => {
      const node = {
        checked: 0.5,
        children: [
          { checked: 0 },
          { checked: 1 },
          { checked: 1 },
        ],
      };
      const expected = {
        checked: 1,
        children: [
          { checked: 1 },
          { checked: 1 },
          { checked: 1 },
        ],
      };
      it('returns correct state', () => {
        expect(checkNode(node, [0], 1)).toEqual(expected);
      });
    });

    describe('when parent becomes 0', () => {
      const node = {
        checked: 0.5,
        children: [
          { checked: 0 },
          { checked: 1 },
          { checked: 0 },
        ],
      };
      const expected = {
        checked: 0,
        children: [
          { checked: 0 },
          { checked: 0 },
          { checked: 0 },
        ],
      };
      it('returns correct state', () => {
        expect(checkNode(node, [1], 0)).toEqual(expected);
      });
    });

    describe('when parent becomes 0.5', () => {
      const node = {
        checked: 0,
        children: [
          { checked: 0 },
          { checked: 0 },
          { checked: 0 },
        ],
      };
      const expected = {
        checked: 0.5,
        children: [
          { checked: 0 },
          { checked: 0 },
          { checked: 1 },
        ],
      };

      it('returns correct state', () => {
        expect(checkNode(node, [2], 1)).toEqual(expected);
      });
    });

    describe('when parent does not change', () => {
      const node = {
        checked: 0.5,
        children: [
          { checked: 1 },
          { checked: 0 },
          { checked: 0 },
        ],
      };
      const expected = {
        checked: 0.5,
        children: [
          { checked: 1 },
          { checked: 0 },
          { checked: 1 },
        ],
      };
      it('returns correct state', () => {
        expect(checkNode(node, [2], 1)).toEqual(expected);
      });
    });
  });
});

describe('renameNode', () => {
  const node = {
    name: 'x',
    children: [
      { name: 'y' },
      { name: 'z' },
      {
        name: 'a',
        children: [
          { name: 'b' },
          { name: 'c' },
        ],
      },
    ],
  };

  const newName = 'RR';

  it('rename first level correctly', () => {
    const newNode = deepClone(node);
    newNode.name = newName;
    expect(renameNode(node, [], newName)).toEqual(newNode);
  });

  it('rename second level correctly', () => {
    const newNode = deepClone(node);
    newNode.children[1].name = newName;
    expect(renameNode(node, [1], newName)).toEqual(newNode);
  });

  it('rename last level correctly', () => {
    const newNode = deepClone(node);
    newNode.children[2].children[0].name = newName;
    expect(renameNode(node, [2, 0], newName)).toEqual(newNode);
  });
});

describe('deleteNode', () => {
  describe('when parent state doesn\'t change', () => {
    const node = {
      checked: 1,
      children: [
        { checked: 1 },
        { checked: 1 },
        {
          checked: 1,
          children: [
            { checked: 1 },
            { checked: 1 },
          ],
        },
      ],
    };

    const state1 = {
      checked: 1,
      children: [
        { checked: 1 },
        { checked: 1 },
        {
          checked: 1,
          children: [
            { checked: 1 },
          ],
        },
      ],
    };

    it('returns correct state', () => {
      expect(deleteNode(node, [2, 1])).toEqual(state1);
    });

    const state2 = {
      checked: 1,
      children: [
        { checked: 1 },
        { checked: 1 },
        {
          checked: 1,
          children: [],
        },
      ],
    };

    it('returns correct state', () => {
      expect(deleteNode(state1, [2, 0])).toEqual(state2);
    });

    const state3 = {
      checked: 1,
      children: [
        { checked: 1 },
        { checked: 1 },
      ],
    };

    it('returns correct state', () => {
      expect(deleteNode(state2, [2])).toEqual(state3);
    });
  });

  describe('when parent state change to 1', () => {
    const node = {
      checked: 0.5,
      children: [
        { checked: 1 },
        { checked: 1 },
        {
          checked: 0.5,
          children: [
            { checked: 1 },
            { checked: 0 },
            { checked: 1 },
          ],
        },
      ],
    };

    const expected = {
      checked: 1,
      children: [
        { checked: 1 },
        { checked: 1 },
        {
          checked: 1,
          children: [
            { checked: 1 },
            { checked: 1 },
          ],
        },
      ],
    };

    it('returns correct state', () => {
      expect(deleteNode(node, [2, 1])).toEqual(expected);
    });
  });

  describe('when parent state change to 0', () => {
    const node = {
      checked: 0.5,
      children: [
        { checked: 0 },
        { checked: 0 },
        {
          checked: 0.5,
          children: [
            { checked: 0 },
            { checked: 0 },
            { checked: 1 },
          ],
        },
      ],
    };

    const expected = {
      checked: 0,
      children: [
        { checked: 0 },
        { checked: 0 },
        {
          checked: 0,
          children: [
            { checked: 0 },
            { checked: 0 },
          ],
        },
      ],
    };
    it('returns correct state', () => {
      expect(deleteNode(node, [2, 2])).toEqual(expected);
    });
  });
});

describe('isValidCheckedStatus', () => {
  expect(isValidCheckedStatus(testData)).toEqual(true);
});
