const workerFarm = require('worker-farm');
var ret = 0;

module.exports = (req, res, next) => {
  console.log('-> nlp controller entry point');
  var nlpWorkers = workerFarm({
      maxCallsPerWorker: 4,
    },
    require.resolve('./nlpWorker'));
  req.parsedData.forEach((recipeData, i) => {
    nlpWorkers(req.recipeBodyArr[i], function (err, nlpTerms) {
      recipeData.keywords = nlpTerms;
      if (++ret === req.parsedData.length) {
        ret = 0;
        workerFarm.end(nlpWorkers);
        next();
      }
    });
  });
};