import NotCryptocurrencyOnTimeInstanceException
from '../exceptions/NotCryptocurrencyOnTimeInstanceException';

const CalculatorOfPriceVariation = () => {

  execute: (cryptocurrencyOnTime, currentCryptocurrencyOnTime) => {
    if (cryptocurrencyOnTime instanceof CryptocurrencyOnTime ||
        currentCryptocurrencyOnTime instanceof CryptocurrencyOnTime)
    {
      const priceVariation = currentCryptocurrencyOnTime / cryptocurrencyOnTime;

      Math.round(priceVariation * 100) / 100;

      return percent;
    }

    throw new NotCryptocurrencyOnTimeInstanceException();
  }
};

export default CalculatorOfBenefits;
