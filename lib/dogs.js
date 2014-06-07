'use strict';

var Dogs = function () {
  this.dogs = {
    biggie: 'http://photos-a.ak.instagram.com/hphotos-ak-xpa1/1172383_458438560969432_2069516297_n.jpg',
    midi: 'https://scontent-b-sea.xx.fbcdn.net/hphotos-xpa1/t1.0-9/10314665_10152435614193064_3814490407163700903_n.jpg',
    biggiebike: 'http://photos-b.ak.instagram.com/hphotos-ak-xfa1/918150_901101269914801_1955291612_n.jpg',
    ollie: 'http://photos-f.ak.instagram.com/hphotos-ak-xaf1/1171776_449637678503157_549754371_n.jpg',
    classyollie: 'https://i.imgur.com/olfrXsy.png'
  };

  this.pic = function (dog) {
    return this.dogs[dog] || '';
  };
};

module.exports = Dogs;
