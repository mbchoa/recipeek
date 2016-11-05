import t from 'tcomb';
import { assign, map } from 'lodash';

import DietLabels from './DietLabels';
import HealthLabels from './HealthLabels';
import Ingredient from './Ingredient';
import Nutrient from './Nutrient';

const Recipe = t.struct({
  calories: t.Number,
  dietLabels: t.list(DietLabels),
  healthLabels: t.list(HealthLabels),
  imageUrl: t.String,
  ingredients: t.list(Ingredient),
  name: t.String,
  nutrients: t.list(Nutrient),
  source: t.String,
  sourceUrl: t.String,
  yield: t.Number,
}, 'Recipe');

Recipe.of = t.func(
  [t.Object],
  Recipe,
  'Recipe'
).of(({ recipe }) => {
  const {
    image: imageUrl,
    ingredients,
    label: name,
    totalNutrients,
    url: sourceUrl,
  } = recipe;

  return assign(  
    {},
    recipe,
    {
      imageUrl,
      name,
      sourceUrl,
    },
    {
      ingredients: map(ingredients, ingredient => new Ingredient(ingredient)),
      nutrients: map(totalNutrients, nutrient => new Nutrient(nutrient)),
    }
  );
});

export default Recipe;
