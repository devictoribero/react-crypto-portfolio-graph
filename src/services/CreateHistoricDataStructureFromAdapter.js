const CreateCurrentDataStructureFromAPI = {

  execute: (resultFromHistoricPrice, cryptoCurrentPriceStructure) => {
    return {
      name: cryptoCurrentPriceStructure.name,
      iso: cryptoCurrentPriceStructure.iso,
      amount: cryptoCurrentPriceStructure.amount_coins,
      time: cryptoCurrentPriceStructure.time,
      values: {
        current: {
          btc: cryptoCurrentPriceStructure.values.current.BTC,
          eur: cryptoCurrentPriceStructure.values.current.EUR,
        },
        historic: {
          btc: resultFromHistoricPrice.data.BTC,
          eur: resultFromHistoricPrice.data.EUR,
        }
      },
    };
  },
};

export default CreateCurrentDataStructureFromAPI;
