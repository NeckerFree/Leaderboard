import './style.css';
import StoreScore from './modules/storeScore.js';

const form = document.getElementsByTagName('form')[0];
const storeScore = new StoreScore();
const getInitialData = () => {
  const scoreData = storeScore.getScoreData();
  const scoreList = document.createElement('div');
  scoreList.classList.add('scoreList');
  if (scoreData !== null) {
    for (let index = 0; index < scoreData.length; index += 1) {
      const isRowPair = index % 2;
      const element = scoreData[index];
      const p = document.createElement('p');
      p.innerText = `${element.name}: ${element.value}`;
      if (isRowPair === 0) {
        p.classList.add('alternateRow');
      } else {
        p.classList.add('normalRow');
      }

      scoreList.appendChild(p);
    }
  }
  return scoreList;
};
const processData = () => {
  const inputName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  storeScore.add(inputName.value, inputScore.value);
};
const refresh = () => {
  window.location.reload();
};
window.addEventListener('load', () => {
  const section = document.getElementsByTagName('section')[0];
  section.classList.add('sectionContainer');
  const columnRecent = document.createElement('div');
  columnRecent.classList.add('columnRecent');
  const rowRecent = document.createElement('div');
  rowRecent.classList.add('recentScores');
  const h2 = document.createElement('h2');
  h2.innerText = 'Recent scores';
  const refreshButton = document.createElement('input');
  refreshButton.setAttribute('type', 'button');
  refreshButton.setAttribute('id', 'refreshButton');
  refreshButton.setAttribute('value', 'Refresh');
  refreshButton.addEventListener('click', refresh);
  rowRecent.appendChild(h2);
  rowRecent.appendChild(refreshButton);
  const scoreList = getInitialData();
  columnRecent.appendChild(rowRecent);
  columnRecent.appendChild(scoreList);
  section.insertAdjacentElement('afterbegin', columnRecent);
});

form.addEventListener('submit', () => {
  processData();
});
