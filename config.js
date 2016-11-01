window.unicoisaConfig = {

  // wallet UI configuration
  walletName: 'urv2',
  mainColor: '',      // if blank default color will be used
  secondaryColor: '', // if blank default color will be used
  logo: '',           // if blank default logo will be used
  allowAssetChange: true,
  noUserColors: false,
  needsBackup: true,

  // Assets configuration
  assets: [
    {
      assetId: 'Ua74rW7rfTTC3s5XFvFNT6GHsoatmdAsUFAsNr',
      name: 'BitReal',
      symbol: 'bR$',
      pluralSymbol: 'bR$'
    },
    {
      assetId: 'Ua3osB8YMt1aU43jt15WaypJgSXoDPu3fhDv5k',
      name: 'CT Coin',
      symbol: 'CT',
      pluralSymbol: 'CT'
    },
    {
      assetId: 'La8eGyyx4qrckmNt1Wjw515quQhpaeRKqKJorU',
      name: 'Coffee',
      symbol: 'cup',
      pluralSymbol: 'cups'
    }
  ],
  defaultAsset: 'Ua74rW7rfTTC3s5XFvFNT6GHsoatmdAsUFAsNr',

  // Colu connectivity configuration
  // see https://github.com/troggy/colu-copay-addon
  colu: {
    mode: 'rpc',
    rpcConfig: {
      livenet: {
        baseUrl: 'https://carteira.urv2.com.br:8190'
      },
      testnet: {
        baseUrl: 'https://carteira.urv2.com.br:8290'
      }
    }
  }
};
