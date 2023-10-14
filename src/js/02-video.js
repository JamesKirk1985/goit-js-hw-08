import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
player.setCurrentTime(localStorage.getItem(localStorageKey) || 0);
// ('videoplayer-current-time');

function stopVideoTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(localStorageKey, seconds);
  });
}
var throttle = require('lodash.throttle');
player.on('timeupdate', throttle(stopVideoTime, 1000));
