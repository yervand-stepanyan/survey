async function request({ url, method, body, id }) {
  const fetchData = body
    ? {
        body: JSON.stringify(body) || '',
        headers: {
          'Content-Type': 'application/json'
        },
        method
      }
    : {
        method
      };

  const response = await fetch(
    `${process.env.REACT_APP_API_ROOT}/api/${url}${id ? `/${id}` : ''}`,
    fetchData
  );

  return response.json();
}

const API = {
  get: url => request({ url, method: 'GET' }),
  post: (url, body) => request({ url, method: 'POST', body }),
  delete: (url, id) => request({ url, method: 'DELETE', id })
};

export default API;
