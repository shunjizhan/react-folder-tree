const testData = {
  name: 'All Cryptos',
  children: [
    { name: 'Bitcoin' },
    { name: 'Etherium' },
    { name: 'Polkadot' },
    {
      name: 'POW',
      children: [
        { name: 'Bitcoin' },
        { name: 'Litecoin' },
        { name: 'Bitcoin Cash' },
      ],
    },
    {
      name: 'Public Chains',
      children: [
        { name: 'Ripple' },
        { name: 'Chainlink' },
        {
          name: 'POW',
          children: [
            { name: 'Bitcoin' },
            { name: 'Litecoin' },
            { name: 'Bitcoin Cash' },
          ],
        },
        {
          name: 'POS',
          children: [
            { name: 'Etherium' },
            { name: 'EOS' },
            {
              name: 'Crosschain',
              children: [
                { name: 'Polkadot' },
                { name: 'Cosmos' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const testDataWithId = {
  name: 'All Cryptos',
  _id: 0,
  children: [
    { name: 'Bitcoin', _id: 1 },
    { name: 'Etherium', _id: 2 },
    { name: 'Polkadot', _id: 3 },
    {
      name: 'POW',
      _id: 4,
      children: [
        { name: 'Bitcoin', _id: 5 },
        { name: 'Litecoin', _id: 6 },
        { name: 'Bitcoin Cash', _id: 7 },
      ],
    },
    {
      name: 'Public Chains',
      _id: 8,
      children: [
        { name: 'Ripple', _id: 9 },
        { name: 'Chainlink', _id: 10 },
        {
          name: 'POW',
          _id: 11,
          children: [
            { name: 'Bitcoin', _id: 12 },
            { name: 'Litecoin', _id: 13 },
            { name: 'Bitcoin Cash', _id: 14 },
          ],
        },
        {
          name: 'POS',
          _id: 15,
          children: [
            { name: 'Etherium', _id: 16 },
            { name: 'EOS', _id: 17 },
            {
              name: 'Crosschain',
              _id: 18,
              children: [
                { name: 'Polkadot', _id: 19 },
                { name: 'Cosmos', _id: 20 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const initializedTestData = {
  name: 'All Cryptos',
  _id: 0,
  checked: 0,
  children: [
    { name: 'Bitcoin', _id: 1, checked: 0 },
    { name: 'Etherium', _id: 2, checked: 0 },
    { name: 'Polkadot', _id: 3, checked: 0 },
    {
      name: 'POW',
      _id: 4,
      checked: 0,
      children: [
        { name: 'Bitcoin', _id: 5, checked: 0 },
        { name: 'Litecoin', _id: 6, checked: 0 },
        { name: 'Bitcoin Cash', _id: 7, checked: 0 },
      ],
    },
    {
      name: 'Public Chains',
      _id: 8,
      checked: 0,
      children: [
        { name: 'Ripple', _id: 9, checked: 0 },
        { name: 'Chainlink', _id: 10, checked: 0 },
        {
          name: 'POW',
          _id: 11,
          checked: 0,
          children: [
            { name: 'Bitcoin', _id: 12, checked: 0 },
            { name: 'Litecoin', _id: 13, checked: 0 },
            { name: 'Bitcoin Cash', _id: 14, checked: 0 },
          ],
        },
        {
          name: 'POS',
          _id: 15,
          checked: 0,
          children: [
            { name: 'Etherium', _id: 16, checked: 0 },
            { name: 'EOS', _id: 17, checked: 0 },
            {
              name: 'Crosschain',
              _id: 18,
              checked: 0,
              children: [
                { name: 'Polkadot', _id: 19, checked: 0 },
                { name: 'Cosmos', _id: 20, checked: 0 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export {
  testData,
  testDataWithId,
  initializedTestData,
};
