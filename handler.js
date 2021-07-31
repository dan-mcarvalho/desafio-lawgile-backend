const handler = require('express/handler');
const server = require('./server')

exports.handler = handler(server);