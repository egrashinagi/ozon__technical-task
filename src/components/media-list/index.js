'use strict';

import './mediaList.scss';

export default class MediaList {
  constructor({element, data}) {
    element.classList.add('media-list');
    this.tempalte = require('./mediaList.jade');
  }
}
