const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = 'sSp7OrPloGUwv60DHsj2';

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const answer = await response.json();
  return answer;
};
const getData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const addScore = async (name, value) => {
  let answer;
  if (gameId !== '') {
    const data = { user: `${name}`, score: parseInt(value, 10) };
    const response = await postData(`${apiURL}/games/${gameId}/scores/`, data);
    answer = response.result;
  }
  return answer;
};

const getScoreData = async () => {
  let answer = [];
  if (gameId !== '') {
    const data = await getData(`${apiURL}/games/${gameId}/scores/`);
    answer = data.result;
  }
  return answer;
};
export { addScore, getScoreData };
