export class CryptocurrencyOnTime {
  constructor({ cryptocurrency, value, timestamp }) {
    this.cryptocurrency = cryptocurrency;
    this.time = timestamp;
    this.value = {
      bitcoin: value.btc,
      dollar: value.usd,
      euro: value.eur,
    };

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
}
