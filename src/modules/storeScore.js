const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'cors',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
  });
  const answer = response.json();
  return answer;
};
const getData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  const data = await response.json();
  return data;
};
/**
 * Class to Add, Remove and Get score from Storage
 */
export default class StoreScore {
  gameId = 'g6EONfLWOqgXSHiQqOZs';
  constructor() {
    let answer;
    if (this.gameId === '') {
      postData(`${apiURL}/games`, { name: 'Awesome Game' })
        .then((data) => {
          answer = data.result;
          if (answer !== undefined && answer !== null) {
            this.gameId = answer.match(/([^(Game with ID: )])(.*)[^( added.)]/g);
          }
        });
    }
  }

  add = async (name, value) => {
    let answer;
    if (this.gameId !== '') {
      postData(`${apiURL}/games/${this.gameId}/scores`, { user: `${name}`, score: value })
        .then((data) => {
          answer = data.result;
        });
    }
    return answer;
  }

  getScoreData = async () => {
    let answer = [];
    if (this.gameId !== '') {
      const data = await getData(`${apiURL}/games/${this.gameId}/scores`);
      answer = data.result;
    }
    return answer;
  }
}
