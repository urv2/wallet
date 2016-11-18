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
      assetId: 'La7RYbhpAUBS64VdnwoyGt63vMUUtp6RYukaJp',
      name: 'BitReal',
      symbol: 'bR$',
      pluralSymbol: 'bR$'
    }
  ],
  defaultAsset: 'La7RYbhpAUBS64VdnwoyGt63vMUUtp6RYukaJp',

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
