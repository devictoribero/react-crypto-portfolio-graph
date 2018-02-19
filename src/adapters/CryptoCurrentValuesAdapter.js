import Cryptocurrency from '../application/classes/Cryptocurrency';
import CryptocurrencyOnTime from '../application/classes/CryptocurrencyOnTime';
import CryptocurrencyPosition from '../application/classes/CryptocurrencyPosition';
import Portfolio from '../application/classes/Portfolio';

import UtilsService from '../services/UtilsService';

const CryptoCurrentValuesAdapter = {
  adaptData: (currentDataFromAPI) => {
    const queryStringInJson = UtilsService.queryStringToJSON(
      currentDataFromAPI.request.responseURL
    );

    const {
      ts: timestamp,
      cryptocurrency: crypto_name,
      iso: iso,
      amount
    } = queryStringInJson;

    const cryptocurrency = new Cryptocurrency({
      name: crypto_name,
      iso: iso,
    });

    const cryptocurrencyOnTime = new CryptocurrencyOnTime({
      cryptocurrency,
      timestamp,
      value: {
        bitcoin: currentDataFromAPI.data[queryStringInJson.iso].BTC,
        dollar: currentDataFromAPI.data[queryStringInJson.iso].USD,
        euro: currentDataFromAPI.data[queryStringInJson.iso].EUR,
      }
    });

    const cryptocurrencyPosition = new CryptocurrencyPosition({
      cryptocurrencyOnTime,
      amount,
    });


    return cryptocurrencyPosition;
  },
};

export default CryptoCurrentValuesAdapter;
