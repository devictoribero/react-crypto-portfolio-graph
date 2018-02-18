class NotCryptocurrencyOnTimeInstanceException extends DefaultException {
  constructor({ error_code, message }) {
    super();
    this.errorCode = errorCode;
    this.message = message;
  }
}
