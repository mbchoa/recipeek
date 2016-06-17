const nlp = require('nlp_compromise');

const htmlToNlpTerms = html => {
  try {
    return nlp.text(html).terms();
  } catch (err) {
    console.log('error running nlp', err);
    return [];
  }
};

module.exports = (req, res, next) => {
  // console.log('-> nlp controller entry point');
  const startTime = Date.now();
  req.parsedData = req.parsedData.map((recipeData, i) => {
    const singleStartTime = Date.now();
    const nlpTerms = htmlToNlpTerms(req.recipeBodyArr[i]);
    // console.log(`* nlp #${i} round trip time: ${Date.now() - singleStartTime}`);
    recipeData.keywords = nlpTerms
      .filter(term => term.tag === 'Adjective')
      .map(term => term.text);
    return recipeData;
  });
  // console.log('* nlp total parsing execution time = ', Date.now() - startTime);
  next();
};
