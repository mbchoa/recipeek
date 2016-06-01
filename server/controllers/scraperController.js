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
    const recipesSourceUrlArr = req.parsedData.recipes.map(recipeData => recipeData.source_url);
    const recipesSourceUrlPromisesArr = recipesSourceUrlArr.map(getRecipePageHTML);
    Promise
      .all(recipesSourceUrlPromisesArr)
      .then(recipeHtmlArr => {
        req.parsedData.recipes = req.parsedData.recipes.map((recipeData, i) => {
          recipeData.body = recipeHtmlArr[i].body;
          return recipeData;
        });
        next();
      }).catch(err => console.log('error resolving recipes', err));
  },
};
