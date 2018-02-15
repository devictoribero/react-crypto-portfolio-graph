import CryptoDataProvider from '../providers/CryptoDataProvider';


let _provider;

_provider = {
  __invoke: (portfolio) =>
    console.log('received a portfolio returns all the data structure to build the graphs'),
};

export default _provider;
