"use strict";
var io = require('socket.io-client');
var socket = io.connect('http://localhost:6666');

socket.on('mail', console.log);
socket.emit('mail', 'console.log');