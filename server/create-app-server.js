import express from 'express';
import compression from 'compression';

import graphqlRouter from './graphql/router';

export default function startAppServer(port) {
  const app = express();
  app.use(express.static(__dirname));
  app.use(compression());

  graphqlRouter(app);

  app.listen(port, function () {
    console.log(`Recipeek express server listening on port ${this.address().port} in ${process.env.NODE_ENV} mode`);
  });
};
