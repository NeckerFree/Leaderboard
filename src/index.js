import './style.css';
import StoreScore from './modules/storeScore.js';

const form = document.getElementsByTagName('form')[0];
const storeScore = new StoreScore();
const getInitialData =async () => {
  const scoreData =await storeScore.getScoreData();
  const scoreList = document.getElementsByClassName('scoreList')[0];
  if (scoreData!==undefined && scoreData !== null) {
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
const processData =async () => {
  const inputName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  const msg=await storeScore.add(inputName.value, inputScore.value);
};
const refresh =async () => {
 let response=await getInitialData();
};
window.addEventListener('load', () => {
  const section = document.getElementsByTagName('section')[0];
  section.classList.add('sectionContainer');
  const columnRecent = document.getElementsByTagName('article')[0];
  columnRecent.classList.add('columnRecent');
  const divs=document.getElementsByTagName('div');
  const rowRecent = divs[0];
  rowRecent.classList.add('recentScores');
  // const h2 = document.createElement('h2');
  // h2.innerText = 'Recent scores';
  const refreshButton = document.getElementById('refreshButton');
  // refreshButton.setAttribute('type', 'button');
  // refreshButton.setAttribute('id', 'refreshButton');
  // refreshButton.setAttribute('value', 'Refresh');
  refreshButton.addEventListener('click', refresh);
  // rowRecent.appendChild(h2);
  // rowRecent.appendChild(refreshButton);
  
  const divScoreList = divs[1];
  divScoreList.classList.add('scoreList');
  let response=refresh();
  // columnRecent.appendChild(rowRecent);
  // columnRecent.appendChild(scoreList);
  //section.insertAdjacentElement('afterbegin', columnRecent);
});

form.addEventListener('submit', () => {
  processData();
});
