import t from 'tcomb';
import { map } from 'lodash';

import Recipe from './Recipe';

const Recipes = t.struct({
  endIndex: t.Number,
  recipeList: t.list(Recipe),
  startIndex: t.Number,
}, 'Recipes');

Recipes.of = t.func(
  [t.Object],
  Recipes,
  'Recipes'
).of(payload => {
  const {
    from: startIndex,
    hits,
    to: endIndex,
  } = payload;

  return {
    endIndex,
    recipeList: map(hits, recipe => Recipe.of(recipe)),
    startIndex,
  };
});

export default Recipes;
