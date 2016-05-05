'use strict';

var Heroes = function () {
  this.heroes = {
    jacky: 'http://people.mozilla.org/~ehunt/uxley-bot/1.png',
    katie: 'http://people.mozilla.org/~ehunt/uxley-bot/2.png',
    liz: 'http://people.mozilla.org/~ehunt/uxley-bot/3.png'
    tif: 'http://people.mozilla.org/~ehunt/uxley-bot/4.png'
    mihaela: 'http://people.mozilla.org/~ehunt/uxley-bot/5.png'
    francis: 'http://people.mozilla.org/~ehunt/uxley-bot/6.png'
  };

  this.pic = function (hero) {
    return this.heroes[hero] || '';
  };
};

module.exports = Heroes;
