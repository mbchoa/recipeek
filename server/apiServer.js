const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const compression = require('compression');
const searchController = require('./controllers/searchController');
const scraperController = require('./controllers/scraperController');
const keywordFilterController = require('./controllers/keywordFilterController');
const nlpController = require('./controllers/nlpController');

app.use(cors());
app.use(compression());
app.use(express.static(path.join(
  __dirname,
  process.env.NODE_ENV === 'development'
    ? '/..'
    : '/../dist'
)));

app.get('/api/search/:ingredient',
  searchController,
  scraperController.getAllScrapedRecipePages,
  nlpController,
  keywordFilterController,
  (req, res) => {
    res.set({
      'Cache-Control': 'public, max-age=86400',
    });
    res.send(req.parsedData);
    console.log('round trip time', Date.now() - req.start);
  });

app.listen(process.env.PORT || 3000, function() {
  console.log(`Express API server listening on port ${this.address().port} in ${app.settings.env} mode`);
});

module.exports = app;
