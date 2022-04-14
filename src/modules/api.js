const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const postData = async (path = '', data = {}) => {
  const fullUrl = `${API_URL}/${path}`;
  const response = await fetch(fullUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const answer = await response.json();
  return answer;
};
const getData = async (path) => {
  const fullUrl = `${API_URL}/${path}`;
  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export { postData, getData };
