const CryptoCurrentValuesAdapter = {

  adaptData: (currentDataFromAPI, crypto) => {
    return {
      name: crypto.name,
      iso: crypto.iso,
      amount: crypto.amount_coins,
      time: crypto.time,
      values: {
        current: {
          btc: currentDataFromAPI.data.BTC,
          eur: currentDataFromAPI.data.EUR,
        },
      },
    };
  },
};

export default CryptoCurrentValuesAdapter;
