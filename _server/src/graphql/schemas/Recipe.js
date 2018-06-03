export const typeDef = `
  type Recipe {
    calories: Float,
    dietLabels: [String],
    digest: [Nutrient],
    healthLabels: [String],
    image: String,
    ingredients: [Ingredient],
    ingredientLines: [String],
    label: String,
    source: String,
    totalWeight: Float,
    url: String,
    yield: Int,
  }
`;
