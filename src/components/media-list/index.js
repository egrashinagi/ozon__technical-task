'use strict';

import './mediaList.scss';

export default class MediaList {
  constructor({element, data}) {
    element.classList.add('media-list');
    this.tempalte = require('./mediaList.jade');

    let columnLength = Math.ceil(data.length / 3);
    let lists = [];
    let list = [];  // начинаем с 1 и +/- 1 в вычислениях чтобы правильно сработал остаток от деления (i % columnLength) 
    for (let i = 1; i < data.length + 1; i++) {
      list.push(data[i - 1]);
      if (i % columnLength == 0) {
        lists.push(list);
        list = [];
      }
    }
    lists.push(list); // последний проход будет самым маленьким и в if не попадает так что надо добваить отдельно  
  }
}
