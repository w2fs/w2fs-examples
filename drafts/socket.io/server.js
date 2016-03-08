"use strict";
var io = require('socket.io').listen(6666);

io.on('connection', function (socket) {
  socket.on('mail', (data)=>{
    console.log(data);
    io.sockets.emit('mail','1');
    socket.emit('mail','2');
  });
});
