import DefaultException from './DefaultException';

export default class NotCryptocurrencyPositionInstanceException extends DefaultException {
  constructor() {
    super();
    this.errorCode = 'NOT_CRYPTOCURRENCY_POSITION_INSTANCE';
    this.message = 'The parameter given is not a CRYPTOCURRENCY_POSITION.';
  }
}
