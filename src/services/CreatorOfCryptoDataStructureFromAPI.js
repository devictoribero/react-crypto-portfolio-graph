const CreatorOfCryptoDataStructureFromAPI = {

  execute: (resultFromPromiseAfterGetCryptoDataFromAPI, crypto) => {
    return {
      name: crypto.name,
      iso: crypto.iso,
      values: {
        btc: resultFromPromiseAfterGetCryptoDataFromAPI.data.BTC,
        eur: resultFromPromiseAfterGetCryptoDataFromAPI.data.EUR,
      },
    };
  },
};

export default CreatorOfCryptoDataStructureFromAPI;
