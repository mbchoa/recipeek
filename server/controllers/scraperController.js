const cheerio = require('cheerio');
const request = require('request');

const getRecipePageHTML = url =>
  new Promise((resolve, reject) => {
    request(url, (err, res, html) => {
      if (err) return console.log(`failed to request recipe page @ ${url}`);
      const $ = cheerio.load(html);
      resolve([]);
    });
  });

module.exports = {
  getAllScrapedRecipePages: (req, res, next) => {
    const recipesSourceUrlArr = req.parsedData.recipes.map(recipeData => recipeData.source_url);
    console.log('recipes source url', recipesSourceUrlArr);
  },
  //   const brandPromise = new Promise((resolve, reject) => {
  //     request(`https://www.thewhiskyexchange.com/b/40/${req.params.brand}-single-malt-scotch-whisky`, (error, response, html) => {
  //       let $$ = cheerio.load(html);
  //       const output = $$('.group-list .product').map((index, elem) => {
  //         return {
  //           productName: $$(elem).attr('title'),
  //           productPrice: $$(elem).children('.price').text(),
  //         }
  //       }).toArray();
  //
  //       const productPageArr = $$('.group-list .product').map((index, elem) => {
  //         return $$(elem).attr('href');
  //       }).toArray();
  //
  //       resolve({
  //         productData: output,
  //         productPageArr: productPageArr
  //       });
  //
  //     });
  //   }).then((resolveData) => {
  //     function getScotchProduct(url) {
  //       return new Promise((resolve, reject) => {
  //         request(`https://www.thewhiskyexchange.com${url}`, (err, res, html) => {
  //           if (err) {
  //             console.log('error occurred');
  //           }
  //           const $ = cheerio.load(html);
  //           const productFacts = [];
  //           $('#prodMeta .meta').children().each((index, el) => {
  //             if (index % 2 === 0) {
  //               productFacts.push({
  //                 fact: $(el).text(),
  //                 value: undefined,
  //               });
  //             } else {
  //               productFacts[productFacts.length - 1].value = $(el).text();
  //             }
  //           });
  //           resolve(productFacts);
  //         })
  //       });
  //     }
  //     const promisesArr = resolveData.productPageArr.map(url => getScotchProduct(url));
  //     Promise
  //       .all(promisesArr)
  //       .then(dataArr => {
  //         const output = resolveData.productData.map((data, i) => {
  //           data.productFacts = dataArr[i];
  //           return data;
  //         });
  //         res.send(output);
  //       });
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }
};
