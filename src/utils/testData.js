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
  id: 0,
  children: [
    { name: 'Bitcoin', id: 1 },
    { name: 'Etherium', id: 2 },
    { name: 'Polkadot', id: 3 },
    {
      name: 'POW',
      id: 4,
      children: [
        { name: 'Bitcoin', id: 5 },
        { name: 'Litecoin', id: 6 },
        { name: 'Bitcoin Cash', id: 7 },
      ],
    },
    {
      name: 'Public Chains',
      id: 8,
      children: [
        { name: 'Ripple', id: 9 },
        { name: 'Chainlink', id: 10 },
        {
          name: 'POW',
          id: 11,
          children: [
            { name: 'Bitcoin', id: 12 },
            { name: 'Litecoin', id: 13 },
            { name: 'Bitcoin Cash', id: 14 },
          ],
        },
        {
          name: 'POS',
          id: 15,
          children: [
            { name: 'Etherium', id: 16 },
            { name: 'EOS', id: 17 },
            {
              name: 'Crosschain',
              id: 18,
              children: [
                { name: 'Polkadot', id: 19 },
                { name: 'Cosmos', id: 20 },
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
  id: 0,
  checked: 0,
  children: [
    { name: 'Bitcoin', id: 1, checked: 0 },
    { name: 'Etherium', id: 2, checked: 0 },
    { name: 'Polkadot', id: 3, checked: 0 },
    {
      name: 'POW',
      id: 4,
      checked: 0,
      children: [
        { name: 'Bitcoin', id: 5, checked: 0 },
        { name: 'Litecoin', id: 6, checked: 0 },
        { name: 'Bitcoin Cash', id: 7, checked: 0 },
      ],
    },
    {
      name: 'Public Chains',
      id: 8,
      checked: 0,
      children: [
        { name: 'Ripple', id: 9, checked: 0 },
        { name: 'Chainlink', id: 10, checked: 0 },
        {
          name: 'POW',
          id: 11,
          checked: 0,
          children: [
            { name: 'Bitcoin', id: 12, checked: 0 },
            { name: 'Litecoin', id: 13, checked: 0 },
            { name: 'Bitcoin Cash', id: 14, checked: 0 },
          ],
        },
        {
          name: 'POS',
          id: 15,
          checked: 0,
          children: [
            { name: 'Etherium', id: 16, checked: 0 },
            { name: 'EOS', id: 17, checked: 0 },
            {
              name: 'Crosschain',
              id: 18,
              checked: 0,
              children: [
                { name: 'Polkadot', id: 19, checked: 0 },
                { name: 'Cosmos', id: 20, checked: 0 },
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
