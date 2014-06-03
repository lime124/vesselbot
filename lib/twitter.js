'use strict';

var twitterAPI = require('node-twitter-api');

var Twitter = function (nconf) {
  var tw = new twitterAPI({
    consumerKey: nconf.get('twitterKey'),
    consumerSecret: nconf.get('twitterSecret'),
    callback: ''
  });

  this.tweet = function (message, next) {
    tw.statuses('update', {
      status: message.toString().trim()
    }, nconf.get('twitterAccessToken'), nconf.get('twitterAccessTokenSecret'), function (err, data, resp) {
      if (err) {
        next(err);
      } else {
        next(null, data.id_str);
      }
    });
  };
};

module.exports = Twitter;
