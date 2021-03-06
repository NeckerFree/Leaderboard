import './style.css';
import { addScore, getScoreData } from './modules/storeScore.js';

const form = document.getElementsByTagName('form')[0];
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');

const getInitialData = async () => {
  const scoreData = await getScoreData();
  const scoreList = document.getElementsByClassName('scoreList')[0];
  scoreList.innerHTML = '';
  if (scoreData !== undefined && scoreData !== null) {
    for (let index = 0; index < scoreData.length; index += 1) {
      const isRowPair = index % 2;
      const element = scoreData[index];
      const p = document.createElement('p');
      p.innerText = `${element.user}: ${element.score}`;
      if (isRowPair === 0) {
        p.classList.add('alternateRow');
      } else {
        p.classList.add('normalRow');
      }
      scoreList.appendChild(p);
    }
  }
};
const processData = async (e) => {
  e.preventDefault();
  addScore(inputName.value, inputScore.value);
  form.reset();
};
const refresh = () => {
  getInitialData();
};
window.addEventListener('load', () => {
  const section = document.getElementsByTagName('section')[0];
  section.classList.add('sectionContainer');
  const columnRecent = document.getElementsByTagName('article')[0];
  columnRecent.classList.add('columnRecent');
  const divs = document.getElementsByTagName('div');
  const rowRecent = divs[0];
  rowRecent.classList.add('recentScores');
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', refresh);
  const divScoreList = divs[1];
  divScoreList.classList.add('scoreList');
  refresh();
});

form.addEventListener('submit', processData);
