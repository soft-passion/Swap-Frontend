import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    // FIXME:
    pid: 0,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'DINO',
    lpAddresses: {
      97: '0xa0d2502Ac6d862596325Cd1B724589fe14902D99',
      56: '0xa0d2502Ac6d862596325Cd1B724589fe14902D99',
      // DINO
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      97: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
      56: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    // FIXME:
    pid: 1,
    risk: 2,
    lpSymbol: 'DINO-BUSD',
    lpAddresses: {
      97: '0xa0d2502Ac6d862596325Cd1B724589fe14902D99',
      56: '0xa0d2502Ac6d862596325Cd1B724589fe14902D99',
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      97: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
      56: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    // FIXME:
    pid: 2,
    risk: 2,
    lpSymbol: 'DINO-BNB',
    lpAddresses: {
      97: '0xE6BDEa4578329b908461EB76A6705fa18b22a1C6',
      56: '0xE6BDEa4578329b908461EB76A6705fa18b22a1C6', // FIXME:
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      97: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
      56: '0x9510b145010f0eAc5a3aefd9a5A07A0a14B2241d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 14,
    risk: 1,
    lpSymbol: 'SIL-BNB',
    lpAddresses: {
      97: '0xae1af9510049138e7a1927b741a542a8bcc78b0d',
      56: '0xae1af9510049138e7a1927b741a542a8bcc78b0d', // FIXME:
    },
    tokenSymbol: 'SIL',
    tokenAddresses: {
      97: '0xc66e4de0d9b4f3cb3f271c37991fe62f154471eb',
      56: '0xc66e4de0d9b4f3cb3f271c37991fe62f154471eb', // FIXME:
      // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },
  {
    // FIXME:
    pid: 6,
    risk: 1,
    lpSymbol: 'BSCPAD-BNB',
    lpAddresses: {
      97: '0x1e47da535d9e96e2f9348d00c18fbe967566bc28',
      56: '0x1e47da535d9e96e2f9348d00c18fbe967566bc28', // FIXME:
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
      56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700', // FIXME:
      // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },

  {
    pid: 15,
    risk: 1,
    lpSymbol: 'ALICE-BNB',
    lpAddresses: {
      97: '',
      56: '0xe022baa3E5E87658f789c9132B10d7425Fd3a389', // FIXME:
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '',
      56: '0xAC51066d7bEC65Dc4589368da368b212745d63E8', // FIXME:
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },

  {
    pid: 16,
    risk: 1,
    lpSymbol: 'BTCB-BNB',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524', // FIXME:
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', // FIXME:
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },


  {
    // FIXME:
    pid: 4,
    risk: 1,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // FIXME:
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // FIXME:
      // https://bscscan.com/address/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd, // FIXME: use contracts.bnb instead
  },
  {
    // FIXME:
    pid: 3,
    risk: 1,
    lpSymbol: 'CAKE-BNB',
    lpAddresses: {
      97: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', // FIXME:
      // https://bscscan.com/address/0x99d865Ed50D2C32c1493896810FA386c1Ce81D91
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // FIXME:
      // https://bscscan.com/address/0x2170ed0880ac9a755fd29b2688956bd959f933f8
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb, // FIXME: use contracts.bnb instead
  },
  {
    // FIXME:
    pid: 7,
    risk: 1,
    lpSymbol: 'USDT-BUSD',
    lpAddresses: {
      97: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd', // FIXME:
      // https://bscscan.com/address/0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x55d398326f99059ff775485246999027b3197955',
      56: '0x55d398326f99059ff775485246999027b3197955', // FIXME:
      // https://bscscan.com/address/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // { // FIXME:
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'CAKE-BNB',
  //   lpAddresses: {
  //     97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', 56: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', // https://bscscan.com/address/0xa527a61703d82139f8a06bc30097cc9caa2df5a6
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '0x89dcddca577f3658a451775d58ea99da532263c8', 56: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // https://bscscan.com/address/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  {
    // FIXME:
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // FIXME:
      // https://bscscan.com/address/0xe9e7cea3dedca5984780bafc599bd69add087d56
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    // FIXME:
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // FIXME:
      // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    // FIXME:
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
      // CAKE-BNB LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 11,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'SIL',
    lpAddresses: {
      97: '0xaE1AF9510049138e7a1927B741A542a8bcc78B0D',
      56: '0xaE1AF9510049138e7a1927B741A542a8bcc78B0D',
    },
    tokenSymbol: 'SIL',
    tokenAddresses: {
      97: '0xc66E4De0d9b4F3CB3f271c37991fE62f154471EB',
      56: '0xc66E4De0d9b4F3CB3f271c37991fE62f154471EB',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BSCPAD',
    lpAddresses: {
      97: '0x1e47DA535D9E96E2F9348d00c18fBe967566bc28',
      56: '0x1e47DA535D9E96E2F9348d00c18fBe967566bc28',
      // DAI-BUSD LP
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
      56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 17,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
      // DAI-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
      // DAI-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    // FIXME:
    pid: 19,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c',
      // DAI-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },


  {
    // FIXME:
    pid: 20,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'NFI',
    lpAddresses: {
      97: '',
      56: '0xAB51b64010Ee0BA562F1F664274a73A47Ce0D2e3',
      // DAI-BUSD LP
    },
    tokenSymbol: 'NFI',
    tokenAddresses: {
      97: '',
      56: '0x43f001914c7d347d152f296e8539086fe49f8bd6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 21,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x56C77d59E82f33c712f919D09FcedDf49660a829',
      // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 22,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'GOOSE',
    lpAddresses: {
      97: '',
      56: '0xd1B59D11316E87C3a0A069E80F590BA35cD8D8D3',
      // DAI-BUSD LP
    },
    tokenSymbol: 'GOOSE',
    tokenAddresses: {
      97: '',
      56: '0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 23,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'SALT',
    lpAddresses: {
      97: '',
      56: '0x6284B49544c8900B4612f8450DCE8D484E5c2631',
      // DAI-BUSD LP
    },
    tokenSymbol: 'SALT',
    tokenAddresses: {
      97: '',
      56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 24,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'FULLSAIL',
    lpAddresses: {
      97: '',
      56: '0x09D57cBc545e302CC3aAeD8eEaA0EC7bf45b7165',
      // DAI-BUSD LP
    },
    tokenSymbol: 'FULLSAIL',
    tokenAddresses: {
      97: '',
      56: '0x8148b58393f00b4b379cbeb8018d3445e0b636a0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // FIXME:
    pid: 25,
    risk: 1,
    lpSymbol: 'FUEL-BNB',
    lpAddresses: {
      97: '',
      56: '0x3763A3263CEaca5e7Cc1Bc22A43920bAd9f743Cd',
      // DAI-BUSD LP
    },
    tokenSymbol: 'FUEL-BNB',
    tokenAddresses: {
      97: '',
      56: '0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  // { // FIXME:
  //     pid: 12,
  //     risk: 1,
  //     isTokenOnly: true,
  //     lpSymbol: 'USDT',
  //     lpAddresses: {
  //         97: '',
  //         56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //     },
  //     tokenSymbol: 'USDT',
  //     tokenAddresses: {
  //         97: '',
  //         56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //     },
  //     quoteTokenSymbol: QuoteToken.BUSD,
  //     quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
