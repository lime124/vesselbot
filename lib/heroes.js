'use strict';

var Heroes = function () {
  this.heroes = {
    1: 'http://people.mozilla.org/~ehunt/uxley-bot/jacky.png',
    2: 'http://people.mozilla.org/~ehunt/uxley-bot/katie.png',
    3: 'http://people.mozilla.org/~ehunt/uxley-bot/liz.png'
    4: 'http://people.mozilla.org/~ehunt/uxley-bot/tif.png'
    5: 'http://people.mozilla.org/~ehunt/uxley-bot/mihaela.png'
    6: 'http://people.mozilla.org/~ehunt/uxley-bot/francis.png'
  };

  this.pic = function (hero) {
    return this.heroes[hero] || '';
  };
};

module.exports = Heroes;
