// TODO: write your code here
import json from './parser';
import read from './reader';


class GameSavingLoader {
  async load() {
    try {
        const data = await read(); 
        const value = await json(data);
        value.then(modifiedData => {
            return {
            "id": modifiedData.id, // id сохранения
            "created": modifiedData.created, // timestamp создания
            "userInfo": modifiedData.userInfo
            }
        })
    } catch(err) {
        console.error(err)
    }
  }
}


