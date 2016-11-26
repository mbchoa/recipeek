import path from 'path';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import {
  keywordFilterController,
  nlpController,
  scraperController,
  searchController,
} from './controllers';
import request from 'request';

// config
if (process.env.NODE_ENV !== 'production') {
  console.log('dotenv config executing');
  require('dotenv').config();
}

const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(path.join(
  __dirname,
  process.env.NODE_ENV === 'development'
    ? '/..'
    : ''
)));

app.get('/api/search/:ingredient',
  searchController,
  scraperController,
  nlpController,
  keywordFilterController,
  (req, res) => {
    res.set({
      'Cache-Control': 'public, max-age=86400',
      'Content-Type': 'application/json',
    });
    res.send({
      status: 200,
      data: req.parsedData,
    });
    console.log('round trip time', Date.now() - req.start);
  });

app.get('/api/v2/search/:ingredient', (req, res) => {
  request(`https://api.edamam.com/search?q=${req.params.ingredient}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`, (err, resp, payload) => {
    if (err) {
      return console.log(err);
    }
    res.send({
      status: 200,
      data: JSON.parse(payload),
    });
  });
})

// test cicd
app.listen(process.env.PORT || 3000, function () {
  console.log(`Express API server listening on port ${this.address().port} in ${process.env.NODE_ENV} mode`);
});

export default app;
