import DefaultException from './DefaultException';

export default
class NotCryptocurrencyOnTimeInstanceException
extends DefaultException {
  constructor() {
    super();
    this.errorCode = 'NOT_CRYPTOCURRENCY_INSTANCE';
    this.message = 'The parameter given is not a CryptoCurrency.';
  }
}
