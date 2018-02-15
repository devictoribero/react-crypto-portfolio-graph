import axios from 'axios';
import cryptoDataService from '../services/cryptoDataService';

let _provider, data;

_provider = {
  getData: (portfolio) => {

    // recoger toda la info de cada una de las monedas.
      // Para cada mmoneda coger sus datos
        // Para coger sus datos hay que pasar por el adaptador
    // montar un array con toda la info de las monedas
    // return el array

    console.log('init...');

    console.log('starting petition...');

    let url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR';

    console.log('performing...');

    return axios.get(url);
  },
};

export default _provider;
