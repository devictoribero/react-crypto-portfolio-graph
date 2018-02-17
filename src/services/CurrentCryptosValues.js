import CryptoValuesTakerFromAPI from './CryptoValuesTakerFromAPI';
import CreatorOfCryptoDataStructureFromAPI from './CreatorOfCryptoDataStructureFromAPI';

const CurrentCryptosValues = {

  createCurrentValuesArrayFromCryptoAPIdata: crypto => {
    let arrayCurrentValuesOfCryptos = [];

    return
      CryptoValuesTakerFromAPI
        .getCryptoCurrentPrice(crypto, arrayCurrentValuesOfCryptos)
        .then(result => CreatorOfCryptoDataStructureFromAPI.execute(result, crypto))
        .then(result => console.log(result));
  },
};

export default CurrentCryptosValues;
