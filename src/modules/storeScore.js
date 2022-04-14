import { postData, getData } from './api.js';

const GAME_ID = 'sSp7OrPloGUwv60DHsj2';

const addScore = async (name, value) => {
  let answer;
  if (GAME_ID !== '') {
    const data = { user: `${name}`, score: parseInt(value, 10) };
    const response = await postData(`games/${GAME_ID}/scores/`, data);
    answer = response.result;
  }
  return answer;
};

const getScoreData = async () => {
  let answer = [];
  if (GAME_ID !== '') {
    const data = await getData(`games/${GAME_ID}/scores/`);
    answer = data.result;
  }
  return answer;
};
export { addScore, getScoreData };
