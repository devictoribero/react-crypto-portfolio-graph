import axios from 'axios';

const CryptoCurrentValuesTakerFromAPI = {

  getCryptoCurrentPrice: crypto => {
    let url =
      `https://min-api.cryptocompare.com/data/price?fsym=${crypto.iso}&tsyms=BTC,EUR`;

    return axios.get(url);
  },
};

export default CryptoCurrentValuesTakerFromAPI;
