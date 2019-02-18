export type EdamamDietLabel = string;

export type EdamamIngredient = {
  text: string,
  weight: number,
}

export type EdamamRecipe = {
  calories: number,
  dietLabels: EdamamDietLabel[],
  image: string,
  ingredients: EdamamIngredient[],
  ingredientLines: string[],
  label: string,
  source: string,
  totalWeight: number,
  totalTime: number,
  url: string,
  yield: Number,
}

export type EdamamHit = {
  recipe: EdamamRecipe,
}
