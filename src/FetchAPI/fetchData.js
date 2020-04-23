export async function getSurveys() {
  const response = await fetch(process.env.REACT_APP_API_ROOT);

  return response.json();
}

export async function addSurvey(data) {
  const response = await fetch(process.env.REACT_APP_API_ROOT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}
