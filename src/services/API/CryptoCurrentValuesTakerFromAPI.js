import axios from 'axios';
import DateService from '../DateService';

const CryptoCurrentValuesTakerFromAPI = {

  getCryptoCurrentPrice: crypto => {
    const timestamp = DateService.unix(new Date('2018-01-28'));
    const params = [
      `fsym=${crypto.iso}`,
      `tsyms=BTC,EUR,USD`,
      `ts=${timestamp}`,
      `cryptocurrency=${crypto.name}`,
      `iso=${crypto.iso}`,
      `amount=${crypto.amount_coins}`,
    ].join('&');

    let url = `https://min-api.cryptocompare.com/data/pricehistorical?${params}`;

    return axios.get(url);
  },
};

export default CryptoCurrentValuesTakerFromAPI;
