const foodAdjectives = require('../foodAdjectives');

module.exports = (req, res, next) => {
  console.log('key word filter controller entry point');
  // .filter(term => foodAdjectives.indexOf(term.toLowerCase()) >= 0);
  next();
};
