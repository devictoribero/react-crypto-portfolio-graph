const CreateCurrentDataStructureFromAdapter = {

  execute: cryptoCurrentDataAdapted => {
    return {
      name: cryptoCurrentDataAdapted.name,
      iso: cryptoCurrentDataAdapted.iso,
      amount: cryptoCurrentDataAdapted.amount_coins,
      time: cryptoCurrentDataAdapted.time,
      values: {
        current: {
          btc: cryptoCurrentDataAdapted.values.current.BTC,
          eur: cryptoCurrentDataAdapted.values.current.EUR,
        },
      },
    };
  },
};

export default CreateCurrentDataStructureFromAdapter;
