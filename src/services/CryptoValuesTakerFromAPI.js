import axios from 'axios';

const CryptoValuesTakerFromAPI = {

  getCryptoCurrentPrice: (crypto, arrayCurrentValuesOfCryptos) => {
    let url;

    url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto.iso}&tsyms=BTC,EUR`;

    return axios.get(url);
  },
};

export default CryptoValuesTakerFromAPI;
