const fs = require('fs');
const path = require('path');

const babelrc = fs.readFileSync(path.resolve(__dirname, '../.babelrc'));
let config = {};

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('error relate to babelrc => ', err);
}

require('babel-register')(config);
