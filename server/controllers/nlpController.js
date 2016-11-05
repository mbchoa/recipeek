const workerFarm = require('worker-farm')
const nlpWorkers = workerFarm(require.resolve('./nlpWorker'));
let ret = 0;

export default function nlpController(req, res, next) {
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
}
