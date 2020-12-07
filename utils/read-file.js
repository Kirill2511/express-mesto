const fs = require('fs').promises;

module.exports = (path) => fs
  .readFile(path, { encoding: 'utf8' })
  .then((data) => JSON.parse(data));
