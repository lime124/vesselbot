'use strict';

var twitterAPI = require('node-twitter-api');

var Twitter = function (nconf) {
  this.accessToken;
  this.secretToken;

  var tw = new twitterAPI({
    consumerKey: nconf.get('twitterKey'),
    consumerSecret: nconf.get('twitterSecret'),
    callback: ''
  });

  this.tweet = function (message) {
    tw.statuses('update', {
      status: message.toString().trim()
    }, nconf.get('twitterAccessToken'), nconf.get('twitterAccessTokenSecret'), function (err, data, resp) {
      if (err) {
        console.error(err);
      }
    });
  };
};

module.exports = Twitter;
