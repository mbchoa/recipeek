import express from 'express';
import compression from 'compression';
import request from 'request';
import cors from 'cors';

import graphqlRouter from './graphql/router';

export default function startApiServer(apiPort) {
  const app = express();
  app.use('*', cors({ origin: `http://localhost:${process.env.PORT}` }));
  app.use(compression());

  graphqlRouter(app);

  app.get('/api/v2/search/:ingredient', (req, res) => {
    request(`https://api.edamam.com/search?q=${req.params.ingredient}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`, (err, resp, payload) => {
      if (err) {
        return console.log(err);
      }
      res.set({
        'Cache-Control': 'public, max-age=86400',
        'Content-Type': 'application/json',
      });
      res.send({
        status: 200,
        data: JSON.parse(payload),
      });
    });
  });

  app.listen(apiPort, function listen() {
    console.log(`Express API server listening on port ${this.address().port} in ${process.env.NODE_ENV} mode`);
  });
};
