export default class CryptocurrencyPosition {
  constructor({ cryptocurrencyOnTime, amount }) {
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
