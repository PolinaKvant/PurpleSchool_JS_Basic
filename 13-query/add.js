function buildQueryString(queryParams) {
    let queryString = '';
    Object.keys(queryParams).forEach((key, index) => {
      if (index !== 0) queryString += '&';
      queryString += `${key}=${queryParams[key]}`;
    });
    return queryString;
  }
  
  const queryParams = {
    search: 'Вася',
    take: 10,
  };
  
  const queryString = buildQueryString(queryParams);
  console.log(queryString); 