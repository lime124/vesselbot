'use strict';

var Cats = function () {
  this.cats = {
    noby: 'http://photos-d.ak.instagram.com/hphotos-ak-xfp1/891277_293647194134115_1368989003_n.jpg',
    frida: 'http://photos-g.ak.instagram.com/hphotos-ak-xap1/10431888_638723902879854_940514312_n.jpg',
    molly: 'http://scontent-b.cdninstagram.com/hphotos-xap1/outbound-distilleryimage8/t0.0-17/OBPTH/864028faeee311e283e622000a1fb86d_7.jpg',
    giro: 'http://cloud.mikeskalnik.com/image/1c3n193j323u/IMG_5932.jpeg'
  };

  this.pic = function (cat) {
    return this.cats[cat] || '';
  };
};

module.exports = Cats;
