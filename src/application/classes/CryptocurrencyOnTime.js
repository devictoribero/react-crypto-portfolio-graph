import Cryptocurrency from "./Cryptocurrency";
import NotCryptocurrencyInstanceException
  from '../exceptions/NotCryptocurrencyInstanceException';

export default class CryptocurrencyOnTime {
  constructor({ cryptocurrency, timestamp, value }) {
    if (!cryptocurrency instanceof Cryptocurrency) {
      throw new NotCryptocurrencyInstanceException();
    }

    this.cryptocurrency = cryptocurrency;
    this.time = timestamp;
    this.value = {
      bitcoin: value.bitcoin,
      dollar: value.dollar,
      euro: value.euro,
    };
  }

  getTime() {
    return this.time;
  }

  getBitcoinValue() {
    return this.value.bitcoin;
  }

  getDollarValue() {
    return this.value.dollar;
  }

  getEuroValue() {
    return this.value.euro;
  }
}
