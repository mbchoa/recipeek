import express from 'express';
import compression from 'compression';

import graphqlRouter from './graphql/router';

const app = express();

app.use(compression());

graphqlRouter(app);

app.listen(process.env.PORT, function () {
  console.log(`Recipeek express server listening on port ${this.address().port} in ${process.env.NODE_ENV} mode`);
});
