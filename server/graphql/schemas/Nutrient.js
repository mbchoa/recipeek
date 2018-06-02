export const typeDef = `
  type Nutrient {
    label: String,
    tag: String,
    total: Float,
    daily: Float,
    unit: String,
    sub: [Nutrient]
  }
`;
