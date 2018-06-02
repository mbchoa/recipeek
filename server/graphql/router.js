import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './executableSchema';

export default function graphqlRouter(app) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[GraphQL IDE Enabled]');
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));
}
