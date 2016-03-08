'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    return reply('hello world');
  }
});

// Custom Error 404/500...
const preResponse = function (request, reply) {
  const response = request.response;
  if (!response.isBoom) {
    return reply.continue();
  }
  const error = response;
  return reply({
    status: 0,
    errorCode: error.output.statusCode
  })
};
server.ext('onPreResponse', preResponse);

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});