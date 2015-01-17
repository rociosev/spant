/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var Vibe = require('ui/vibe');
var intervalTime;
var interval;

var main = new UI.Card({
  title: 'SPANT',
  icon: 'images/menu_icon.png',
  subtitle: 'Enter desired time interval'
});

main.show();


main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: '5 sec interval',
        subtitle: 'Spant 5 seconds'
      }, {
        title: '10 sec interval',
        subtitle: 'Spant 10 seconds'
      },
      {
        title: '15 sec interval',
        subtitle: 'Spant 15 seconds'
      }]
    }]
  });
  menu.on('select', function(e) {
    intervalTime = (e.itemIndex + 1) * 5000;
    window.clearInterval(interval);
    interval = setInterval(function() {Vibe.vibrate('long')}, intervalTime);
    function confirm() {
    var wind = new UI.Window();
    var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Interval set to ' + (intervalTime / 1000) + '!',
    textAlign: 'center'
    });
    wind.add(textfield);
    wind.on('click', 'back', function(e) {
    window.clearInterval(interval);
    menu.show();
  });
  wind.show();
}
    confirm();
  });
  menu.show();
});




main.on('click', 'up', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
