'use strict';

var irc = require('irc');
var nconf = require('nconf');
var Twitter = require('./lib/twitter');
var Ascii = require('./lib/ascii');
var Cats = require ('./lib/cats');
var Dogs = require ('./lib/dogs');

nconf.argv().env().file({ file: 'config.json' });

var tw = new Twitter(nconf);
var ascii = new Ascii();
var cats = new Cats();
var dogs = new Dogs();

var client = new irc.Client(nconf.get('server'), nconf.get('botName'), {
  channels: nconf.get('channels'),
});

nconf.get('channels').forEach(function (channel) {
  client.join(channel, function () {
    console.log('connected to ', channel);
    client.say('NickServ', 'IDENTIFY ' + nconf.get('password'));
  });
});

client.addListener('registered', function (message) {
  console.log('registered ', message);
});

client.addListener('message', function (from, to, message) {
  if (message.match(/^(\.vw )/i)) {
    tw.tweet(message.split('.vw ')[1], function (err, tid) {
      if (err) {
        console.error(err);
      } else {
        client.say(to, 'tweeted: https://twitter.com/' + nconf.get('twitterNick') + '/status/' + tid);
      }
    });
  } else if (message.match(/^(\.draw )/i)) {
    client.say(to, ascii.draw(message.split('.draw ')[1]));
  } else if (message.match(/^(\.cat )/i)) {
    client.say(to, cats.pic(message.split('.cat ')[1]));
  } else if (message.match(/^(\.dog )/i)) {
    client.say(to, dogs.pic(message.spli('.dog ')[1]));
  }
});

client.addListener('error', function (message) {
  console.error('error: ', message);
});
