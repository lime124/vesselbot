'use strict';

var irc = require('irc');
var nconf = require('nconf');
var Twitter = require('./lib/twitter');
var Ascii = require('./lib/ascii');

nconf.argv().env().file({ file: 'config.json' });

var tw = new Twitter(nconf);
var ascii = new Ascii();

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
    var face = ascii.draw(message.split('.draw ')[1]);
    client.say(to, face);
  }
});

client.addListener('error', function (message) {
  console.error('error: ', message);
});
