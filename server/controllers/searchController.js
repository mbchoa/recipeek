const request = require('request');
const MAX_NUM_RESULTS = 10;

module.exports = (req, res, next) => {
  console.log('-> search controller entry point');
  // console.log(`* request search for ingredient: ${req.params.ingredient}`);
  // const startTime = Date.now();
  req.start = Date.now();
  request(`http://food2fork.com/api/search?key=23a189635e90b56842dee3b32139deac&q=${req.params.ingredient}`, (err, resp, html) => {
    // console.log('* search request round trip = ', Date.now() - startTime);
    req.parsedData = JSON
      .parse(html)
      .recipes
      .slice(0, MAX_NUM_RESULTS);
    next();
  });
};
