import CryptocurrencyOnTime from './CryptocurrencyOnTime';
import NotCryptocurrencyOnTimeInstanceException
  from '../exceptions/NotCryptocurrencyOnTimeInstanceException';

export default class CryptocurrencyPosition {
  constructor({ cryptocurrencyOnTime, amount }){
    if (!cryptocurrencyOnTime instanceof CryptocurrencyOnTime) {
      throw new NotCryptocurrencyOnTimeInstanceException();
    }

    this.cryptocurrencyOnTime = cryptocurrencyOnTime;
    this.amount = amount;
  }

  getCryptocurrencyOnTime() {
    return this.cryptocurrencyOnTime;
  }

  getAmount() {
    return this.amount;
  }

}
