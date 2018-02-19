import CryptoCurrentPriceStructure from './CryptoCurrentPriceStructure';
import CreateHistoricDataStructureFromAdapter from './CreateHistoricDataStructureFromAdapter';

const PortfolioDataGiver = {

  getPorfolioData: portfolio => {
    // Exact data that the ChartComponent needs
    let portfolioData = [];

    return portfolio.map(coin =>
      CryptoCurrentPriceStructure.createStructure(coin).then(result => console.log(result))
    );
  },
};

export default PortfolioDataGiver;
