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

const app = express();

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
  scraperController,
  nlpController,
  keywordFilterController,
  (req, res) => {
    res.set({
      'Cache-Control': 'public, max-age=86400',
    });
    res.send(req.parsedData);
    console.log('round trip time', Date.now() - req.start);
  });

app.get('/api/v2/search/:ingredient', (req, res) => {
  
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Express API server listening on port ${this.address().port} in ${app.settings.env} mode`);
});

export default app;
