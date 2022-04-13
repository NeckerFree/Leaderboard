import Storage from './storage.js';
import Score from './score.js';

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    //mode: 'cors',
    //credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    // redirect: 'follow',
    // referrerPolicy: 'no-referrer',
   
  })
  let answer = await response.json();
  return answer;
}
const getData =async (url) => {
  const response= await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  })
  let data = await response.json();
  return data;
};
/**
 * Class to Add, Remove and Get score from Storage 
 */
export default class StoreScore {
  gameId = 'c3jiAaUZsctiWm4Cl82';
  // constructor() {
  //   let answer;
  //   return (async () => {
  //     if (this.gameId === '') {
       
  //       answer = await postData(`${apiURL}/games`, { name: 'Awesome Game' });
  //       if (answer !== undefined && answer !== null) {
  //         this.gameId = answer.result.match(/([^(Game with ID: )])(.*)[^( added.)]/g);
  //       }
  //     }
  //     return answer;
  //   });
  //     // .then(data => data.json())
  //     // .then(data => {
  //     //   if (data !== undefined && data !== null) {
  //     //     this.gameId = data.result.match(/([^(Game with ID: )])(.*)[^( added.)]/g);
  //     //   }
  //     // })
   
  // }
  add =async (name, value) => {
    let answer;
    answer= await postData(`${apiURL}/games/${this.gameId}/scores`, { 'user': `${name}`, 'score': value });
    return answer.result;
  }
  getScoreData = async () => {
    let answer=[];
    answer= await getData(`${apiURL}/games/${this.gameId}/scores`);
    return answer.result;
  }
}
