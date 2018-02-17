import CurrentCryptosValues from './CurrentCryptosValues'

const PortfolioDataGiver = {

  getPorfolioInfo: (portfolio) => {
    portfolio.map(crypto =>
      CurrentCryptosValues.createCurrentValuesArrayFromCryptoAPIdata(crypto)
    );
  },
};

export default PortfolioDataGiver;
