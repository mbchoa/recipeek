const workerFarm = require('worker-farm')
  , nlpWorkers = workerFarm(require.resolve('./nlpWorker'));
var ret = 0;

module.exports = (req, res, next) => {
  console.log('-> nlp controller entry point');
  req.parsedData.forEach((recipeData, i) => {
    nlpWorkers(req.recipeBodyArr[i], function (err, nlpTerms) {
      recipeData.keywords = nlpTerms;
      if (++ret === req.parsedData.length) {
        ret = 0;
        next();
      }
    });
  });
};