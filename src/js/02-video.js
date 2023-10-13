import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(throttle);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem());
('videoplayer-current-time');
player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
function stopVideoTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}
var throttle = require('lodash.throttle');
player.on('timeupdate', throttle(stopVideoTime, 1000));
