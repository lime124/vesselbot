'use strict';

var irc = require('irc');
var nconf = require('nconf');
var Twitter = require('./lib/twitter');

nconf.argv().env().file({ file: 'config.json' });

var tw = new Twitter(nconf);

var client = new irc.Client(nconf.get('server'), nconf.get('botName'), {
  channels: nconf.get('channels'),
});

nconf.get('channels').forEach(function (channel) {
  client.join(channel, function () {
    console.log('connected to ', channel)
    client.say('NickServ', 'IDENTIFY ' + nconf.get('password'));
  });
});

client.addListener('registered', function (message) {
  console.log('registered ', message);
});

client.addListener('message', function (from, to, message) {
  console.log(from + ' => ' + to + ': ' + message);

  if (message.match(/^(\.vw )/i)) {
    tw.tweet(message.split('.vw ')[1]);
  }
});

client.addListener('error', function (message) {
  console.log('error: ', message);
});
