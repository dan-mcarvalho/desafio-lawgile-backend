const server = require('./app');

const { PORT = 3000 } = process;

server.listen(PORT, () => {
  console.log(`Postgraphile started on port ${PORT}!`);
});

module.exports = server;