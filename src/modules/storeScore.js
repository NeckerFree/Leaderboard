import Storage from './storage.js';
import Score from './score.js';

/**
 * Class to Add, Remove and Get score from Storage from
 */
export default class StoreScore {
    scoreData;

    constructor() { this.scoreData = new Storage('ScoresData'); }

  add= (name, value) => {
    this.tasksCollection = this.scoreData.getItemStorage();
    const objectScore = new Score(name, value);
    this.scoreData.addItemStorage(objectScore);
  }

  getScoreData=() => this.scoreData.getItemStorage();
}
