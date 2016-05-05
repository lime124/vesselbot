'use strict';

var irc = require('irc');
var nconf = require('nconf');

nconf.argv().env().file({ file: 'config.json' });

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
  if (message.match(/superheroes/i)) {
    client.say(to, 'http://people.mozilla.org/~ehunt/uxley-bot/superheroes.png');
} else if (message.match(/^(\.hero )/i)) {
    client.say(to, heroes.pic(message.split('.hero ')[1]));
});

client.addListener('error', function (message) {
  console.error('error: ', message);
});
