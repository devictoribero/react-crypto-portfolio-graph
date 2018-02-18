const CalculatorOfPriceVariation = () => {
  execute: (cryptocurrencyOnTime, currentCryptocurrencyOnTime) => {
    const priceVariation = currentCryptocurrencyOnTime / cryptocurrencyOnTime;

    Math.round(priceVariation * 100) / 100;

    return percent;
  }
};

export default CalculatorOfBenefits;
