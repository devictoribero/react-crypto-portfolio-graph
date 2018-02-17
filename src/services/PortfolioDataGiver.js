import CryptoCurrentPriceStructure from './CryptoCurrentPriceStructure';
import CreateHistoricDataStructureFromAdapter from './CreateHistoricDataStructureFromAdapter';

const PortfolioDataGiver = {

  getPorfolioData: portfolio => {
    // Here will be the exact data needed to print the GraphComponent
    let portfolioData = [];

    return portfolio.map(crypto =>
      CryptoCurrentPriceStructure.createStructure(crypto)
    );
  },
};

export default PortfolioDataGiver;
