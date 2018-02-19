let UtilsService;

UtilsService = {
  queryStringToJSON: queryString => {
    if (queryString.indexOf('?') > -1){
      queryString = queryString.split('?')[1];
    }

    let pairs = queryString.split('&');
    let result = {};
    pairs.forEach(function(pair) {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return result;
  }
}

export default UtilsService;
