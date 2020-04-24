async function request({ url, method, body, id }) {
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
    `${process.env.REACT_APP_API_ROOT}/api/${url}/${id || ''}`,
    fetchData
  );

  return response.json();
}

export function doGet(url) {
  return request({ url, method: 'GET' });
}

export function doPost(url, body) {
  return request({ url, method: 'POST', body });
}

export function doDelete(url, id) {
  return request({ url, method: 'DELETE', id });
}
