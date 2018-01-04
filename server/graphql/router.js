import bodyParser from 'body-parser';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from  './schemas';
import resolvers from './resolvers';

export default function graphqlRouter(app) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[GraphQL IDE Enabled]');
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers
    })
  }));
}
