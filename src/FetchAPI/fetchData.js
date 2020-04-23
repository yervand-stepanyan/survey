async function request(url, method, body) {
  const fetchData = body
    ? {
        body: JSON.stringify(body) || '',
        method,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    : {
        method
      };

  const response = await fetch(
    `${process.env.REACT_APP_API_ROOT}/api/${url}`,
    fetchData
  );

  return response.json();
}

export function doGet(url) {
  return request(url, 'GET');
}

export function doPost(url, body) {
  return request(url, 'POST', body);
}

export function doDelete(url, body) {
  return request(url, 'DELETE', body);
}
