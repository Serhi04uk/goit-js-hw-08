import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const videoIframe = document.getElementById('vimeo-player');

const player = new Player(videoIframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);
if (currentTime !== null) {
  player.setCurrentTime(currentTime);

  // .then(function (seconds) {
  //   console.log(`Значение времени из localeStorage: ${seconds}`);
  // })
  // .catch(function (error) {
  //   switch (error.name) {
  //     case 'RangeError':
  //       console.log(
  //         'Вызвано некорректным временем в setCurrentTime и установило время 0'
  //       );
  //       break;

  //     default:
  //       console.log('ошибки с другими причинами');
  //       break;
  //   }
  // });
}
