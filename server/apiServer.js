const express = require('express');
const app = express();
const cors = require('cors');
const searchController = require('./controllers/searchController');
const scraperController = require('./controllers/scraperController');
const keywordFilterController = require('./controllers/keywordFilterController');
const nlpController = require('./controllers/nlpController');

app.use(cors());

app.get('/search/:ingredient',
  searchController,
  scraperController.getAllScrapedRecipePages,
  nlpController,
  keywordFilterController,
  (req, res) => {
    res.send(req.parsedData);
  });

app.listen(3000);
