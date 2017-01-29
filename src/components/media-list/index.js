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

    // строим 
    element.innerHTML = this.tempalte({
      lists: lists,
      calcTime: this.calcTime
    });

    // чтоб не плодить лисенеры пользуем делегирование событий на корневом элементе 
    element.addEventListener('click', this.onClickLike.bind(this));
  }

  calcTime(date) {
    let result;
    const hours = (new Date() - new Date(date * 1000)) / (60 * 60 * 1000);
    if (hours < 24) {
      result = Math.round(hours) + 'h';
    } else if (hours > 24) {
      result = Math.round(hours / 24) + 'd'
    }
    return result;
  }

  onClickLike(event) {
    // при баблинге события ловим и проверяем 
    if (event.target.classList.contains('media-list-item__description-like-image')) {
      alert(event.target.getAttribute('data-id'));
    }
  }
}
