const request = require('request');
const dummyData = require('../../dummyData');

module.exports = (req, res, next) => {
  console.log(`request search for ingredient: ${req.params.ingredient}`);
  // request(`http://food2fork.com/api/search?key=23a189635e90b56842dee3b32139deac&q=${req.params.ingredient}`, (err, resp, html) => {
    // req.parsedData = JSON.parse(html);
    // next();
  // });
  req.parsedData = dummyData.recipes;
  next();
};
