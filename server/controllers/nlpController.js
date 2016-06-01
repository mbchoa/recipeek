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
  console.log('nlp controller entry point');
  req.parsedData = req.parsedData.map((recipeData, i) => {
    recipeData.keywords = htmlToNlpTerms(req.recipeBodyArr[i])
      .filter(term => term.tag === 'Adjective')
      .map(term => term.text);
    return recipeData;
  });
  next();
};
