import CryptoCurrentValuesTakerFromAPI from './API/CryptoCurrentValuesTakerFromAPI';
import CryptoCurrentValuesAdapter from '../adapters/CryptoCurrentValuesAdapter';
import CreateCurrentDataStructureFromAdapter from './CreateCurrentDataStructureFromAdapter';
import CryptocurrencyPosition from "../application/classes/CryptocurrencyPosition";

const CryptoCurrentPriceStructure = {

  createStructure: crypto => {
     return CryptoCurrentValuesTakerFromAPI.getCryptoCurrentPrice(crypto)
      .then(result => CryptoCurrentValuesAdapter.adaptData(result));
    },
};

export default CryptoCurrentPriceStructure;
