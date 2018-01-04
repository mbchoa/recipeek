export default `
  type Recipe {
    calories: Float,
    dietLabels: [String],
    healthLabels: [String],
    image: String,
    ingredients: [Ingredient],
    label: String,
    source: String,
    totalDaily: [Nutrient],
    totalNutrients: [Nutrient],
    totalWeight: Float,
    uri: String,
    url: String,
    yield: Int,
  }
`;
