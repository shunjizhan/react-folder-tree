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

export {
  testData,
  testDataWithId,
};
