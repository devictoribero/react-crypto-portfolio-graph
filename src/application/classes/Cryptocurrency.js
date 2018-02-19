export default class Cryptocurrency {
  constructor({ name, iso }) {
    this.name = name;
    this.iso = iso;
  }

  getName() {
    return this.name;
  }

  getISO() {
    return this.iso;
  }
}
