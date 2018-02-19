import CryptocurrencyPosition from "./CryptocurrencyPosition";
import NotCryptocurrencyPositionInstanceException
  from '../exceptions/NotCryptocurrencyPositionInstanceException';

export default class Portfolio {
  constructor(cryptoPositionArray) {
    this.positions = cryptoPositionArray.map(each => {
      if (!each instanceof CryptocurrencyPosition) {
        throw new NotCryptocurrencyPositionInstanceException();
      }

      return new CryptocurrencyPosition(each);
    });
  }
}
