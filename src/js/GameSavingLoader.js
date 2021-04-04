import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const result = await json(data);
    return await new GameSaving(JSON.parse(result));
  }
}
