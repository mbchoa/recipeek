import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import {
  typeDef as RecipeList,
  resolvers as recipeListResolver,
} from './schemas/RecipeList';
import { typeDef as Ingredient } from './schemas/Ingredient';
import { typeDef as Nutrient } from './schemas/Nutrient';
import { typeDef as Recipe } from './schemas/Recipe';

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export default makeExecutableSchema({
  typeDefs: [ Query, RecipeList, Ingredient, Nutrient, Recipe ],
  resolvers: merge(resolvers, recipeListResolver),
});
