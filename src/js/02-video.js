import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
('videoplayer-current-time');

function stopVideoTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}
var throttle = require('lodash.throttle');
player.on('timeupdate', throttle(stopVideoTime, 1000));
