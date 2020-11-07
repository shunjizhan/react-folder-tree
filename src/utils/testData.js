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
      ]
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
          ]
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
              ]
            },
          ]
        },
      ]
    }
  ]
};

export default testData;