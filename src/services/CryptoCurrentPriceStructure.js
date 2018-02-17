import CryptoCurrentValuesTakerFromAPI from './API/CryptoCurrentValuesTakerFromAPI';
import CryptoCurrentValuesAdapter from '../adapters/CryptoCurrentValuesAdapter';
import CreateCurrentDataStructureFromAdapter from './CreateCurrentDataStructureFromAdapter';

const CryptoCurrentPriceStructure = {

  createStructure: crypto => {
    return CryptoCurrentValuesTakerFromAPI.getCryptoCurrentPrice(crypto)
      .then(result => CryptoCurrentValuesAdapter.adaptData(result, crypto))
      .then(result => CreateCurrentDataStructureFromAdapter.execute(result));
    },
};

export default CryptoCurrentPriceStructure;
