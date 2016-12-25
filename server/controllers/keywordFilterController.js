const foodAdjectives = require('../foodAdjectives');
const array = require('lodash/array');

const top3CommonKeyWords = keywordsArr => {
  const normalizedKeyWords = keywordsArr.map(word => word.toLowerCase());
  const occurrenceMap = {};
  normalizedKeyWords.forEach(word => {
    if (occurrenceMap.hasOwnProperty(word)) {
      occurrenceMap[word]++;
    } else {
      occurrenceMap[word] = 1;
    }
  });
};

export default function keywordFilterController(req, res, next) {
  console.log('-> key word filter controller entry point');
  const startTime = Date.now();
  req.parsedData.forEach(recipeData => {
    recipeData.keywords = array.uniq(recipeData.keywords)
      .map(word => word.toLowerCase())
      .filter(term => foodAdjectives.indexOf(term.toLowerCase()) >= 0)
      .slice(0, 3);
  });
  // console.log(`* keyword filter roundtrip time = ${Date.now() - startTime}`);
  next();
};
