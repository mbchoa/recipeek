const cheerio = require('cheerio');
const request = require('request');

const getRecipePageHTML = url =>
  new Promise((resolve, reject) => {
    request(url, (err, res, html) => {
      if (err) return console.log(`failed to request recipe page @ ${url}`);
      const $ = cheerio.load(html);
      resolve({
        body: $('body').text(),
      });
    });
  });

module.exports = {
  getAllScrapedRecipePages: (req, res, next) => {
    const startTime = Date.now();
    const recipesSourceUrlArr = req.parsedData.map(recipeData => recipeData.source_url);
    const recipesSourceUrlPromisesArr = recipesSourceUrlArr.map(getRecipePageHTML);
    Promise
      .all(recipesSourceUrlPromisesArr)
      .then(recipeHtmlArr => {
        console.log('fetch url pages round trip = ', Date.now() - startTime);
        req.recipeBodyArr = req.parsedData.map((recipeData, i) => {
          return recipeHtmlArr[i].body;
        });
        next();
      }).catch(err => console.log('error resolving recipes', err));
  },
};
