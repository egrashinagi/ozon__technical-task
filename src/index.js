'use strict';

import './index.scss'; // main styles

// components
import MediaList from './components/media-list'


let req = {
  url: 'https://api.instagram.com/v1/users/691623/media/recent',
  params: {
    access_token: '691623.1419b97.479e4603aff24de596b1bf18891729f3',
    count: 20,
  },
};

let requestParams = '?';
for (let param in req.params) {
  requestParams += `${param}=${req.params[param]}&`;
}


fetch(req.url + requestParams)
  .then(result => {
    return result.json();
  })
  .then(response => {
    new MediaList({
      element: document.querySelector('media-list[data-name="main"]'),
      data: response.data
    });
  })
;


console.log('index.js - load');
